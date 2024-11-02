import AmountRequest from '../config/nosql/models/requestAmount.model'
import Amount from '../config/nosql/models/amount.model'
import User from '../config/nosql/models/user.model'
import ViewHistory from '../config/nosql/models/view-history.model'
import ReadTime from '../config/nosql/models/readtime.model'

// Doanh thu theo trạng thái giao dịch
const getTransactionOverview = async (startDate, endDate) => {
  try {
    const pendingTransactions = await AmountRequest.countDocuments({
      status: 'PENDING',
      date: { $gte: new Date(startDate), $lte: new Date(endDate) },
    })
    const approvedTransactions = await AmountRequest.countDocuments({
      status: 'APPROVED',
      date: { $gte: new Date(startDate), $lte: new Date(endDate) },
    })
    const rejectedTransactions = await AmountRequest.countDocuments({
      status: 'REJECTED',
      date: { $gte: new Date(startDate), $lte: new Date(endDate) },
    })

    const tableData = await AmountRequest.find({
      date: { $gte: new Date(startDate), $lte: new Date(endDate) },
    }).populate('userId')

    return {
      labels: ['Đang chờ', 'Đã duyệt', 'Từ chối'],
      datasets: [
        {
          label: 'Thống kê giao dịch nạp tiền',
          data: [
            pendingTransactions,
            approvedTransactions,
            rejectedTransactions,
          ],
          backgroundColor: [
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1,
        },
      ],
      tableData,
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

// Doanh thu theo thời gian
const getRevenueOverTime = async (startDate, endDate) => {
  try {
    // Tạo danh sách các ngày từ startDate đến endDate
    const daysArray = []
    let currentDate = new Date(startDate)
    while (currentDate <= new Date(endDate)) {
      daysArray.push(currentDate.toISOString().split('T')[0]) // Định dạng 'YYYY-MM-DD'
      currentDate.setDate(currentDate.getDate() + 1)
    }

    const revenue = await AmountRequest.aggregate([
      {
        $match: {
          status: 'APPROVED',
          date: { $gte: new Date(startDate), $lte: new Date(endDate) },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$date' } }, // Nhóm theo ngày cụ thể
          totalAmount: { $sum: '$amount' },
        },
      },
      { $sort: { _id: 1 } }, // Sắp xếp theo ngày
    ])

    // Tạo một object map doanh thu theo ngày
    const revenueMap = revenue.reduce((acc, item) => {
      acc[item._id] = item.totalAmount
      return acc
    }, {})

    // Đảm bảo mỗi ngày đều có một cột, nếu không có dữ liệu thì set giá trị 0
    const labels = daysArray
    const data = daysArray.map((day) => revenueMap[day] || 0) // Nếu không có thì set 0
    const tableData = await AmountRequest.find({
      status: 'APPROVED',
      date: { $gte: new Date(startDate), $lte: new Date(endDate) },
    }).populate('userId')

    return {
      labels,
      datasets: [
        {
          label: 'Thống kê doanh thu',
          data,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
      tableData,
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

// Doanh thu người dùng cao nhất theo số tiền gửi
const getTopUsersByDepositAmount = async (startDate, endDate, limit) => {
  try {
    const topUsers = await AmountRequest.aggregate([
      {
        $match: {
          date: { $gte: new Date(startDate), $lte: new Date(endDate) },
          status: 'APPROVED',
        },
      },
      {
        $group: {
          _id: '$userId',
          totalAmount: { $sum: '$amount' },
        },
      },
      { $sort: { totalAmount: -1 } },
      { $limit: Number(limit) },
    ])

    const preLabels = topUsers.map((user) => user._id)
    const users = await User.find({ _id: { $in: preLabels } }).select(
      'userName'
    )
    const userMap = new Map(
      users.map((user) => [user._id.toString(), user.userName])
    )

    const labels = topUsers.map((user) => userMap.get(user._id.toString()))
    const data = topUsers.map((user) => user.totalAmount)

    const allUsers = await AmountRequest.aggregate([
      {
        $match: {
          date: { $gte: new Date(startDate), $lte: new Date(endDate) },
          status: 'APPROVED',
        },
      },
      {
        $group: {
          _id: '$userId',
          totalAmount: { $sum: '$amount' },
        },
      },
    ])

    const tableDataPromises = allUsers.map(async (user) => {
      const userInfo = await User.findById(user._id).select('userName')
      return {
        userId: user._id,
        userName: userInfo.userName,
        totalAmount: user.totalAmount,
      }
    })

    const tableData = await Promise.all(tableDataPromises)

    const sortedTableData = tableData
      .sort((a, b) => b.totalAmount - a.totalAmount)
      .slice(0, Number(limit))

    return {
      labels,
      datasets: [
        {
          label: 'Top người dùng theo số tiền nạp',
          data,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
        },
      ],
      tableData: sortedTableData,
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

// Biểu đồ theo thời gian xét duyệt
const getAverageProcessingTime = async (startDate, endDate) => {
  try {
    const processingTimes = await AmountRequest.aggregate([
      {
        $match: {
          status: { $in: ['APPROVED', 'REJECTED'] },
          date: { $gte: new Date(startDate), $lte: new Date(endDate) },
        },
      },
      {
        $project: {
          processingTime: {
            $subtract: ['$updatedAt', '$createdAt'],
          },
        },
      },
      {
        $group: {
          _id: null,
          averageProcessingTime: { $avg: '$processingTime' },
        },
      },
    ])

    const avgProcessingTime = processingTimes[0]?.averageProcessingTime || 0

    return {
      labels: ['Average Processing Time'],
      datasets: [
        {
          label: 'Processing Time (ms)',
          data: [avgProcessingTime],
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
        },
      ],
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

// Tỷ lệ người dùng nạp tiền
const getUserDepositRate = async () => {
  try {
    const totalUsers = await User.countDocuments()
    const usersWithDeposits = await Amount.countDocuments()

    const depositRate = (usersWithDeposits / totalUsers) * 100

    return {
      labels: ['Người dùng đã nạp', 'Người dùng chưa nạp'],
      datasets: [
        {
          label: 'User Deposit Rate',
          data: [usersWithDeposits, totalUsers],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
          borderWidth: 1,
        },
      ],
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

// Thống kê theo lượt xem trong khoảng thời gian
const getTopBooksByViews = async (startDate, endDate, limit) => {
  try {
    const topBooks = await ViewHistory.aggregate([
      {
        $match: {
          date: { $gte: new Date(startDate), $lte: new Date(endDate) },
        },
      },
      {
        $group: {
          _id: '$bookId',
          totalViews: { $sum: '$views' },
        },
      },
      {
        $lookup: {
          from: 'books',
          localField: '_id',
          foreignField: '_id',
          as: 'bookDetails',
        },
      },
      {
        $unwind: '$bookDetails',
      },
      {
        $project: {
          _id: 0,
          bookId: '$_id',
          title: '$bookDetails.title',
          totalViews: 1,
        },
      },
      {
        $sort: {
          totalViews: -1,
        },
      },
      {
        $limit: Number(limit),
      },
    ])

    const labels = topBooks.map((book) => book.title)
    const data = topBooks.map((book) => book.totalViews)

    const allBooks = await ViewHistory.aggregate([
      {
        $match: {
          date: { $gte: new Date(startDate), $lte: new Date(endDate) },
        },
      },
      {
        $group: {
          _id: '$bookId',
          totalViews: { $sum: '$views' },
        },
      },
      {
        $lookup: {
          from: 'books',
          localField: '_id',
          foreignField: '_id',
          as: 'bookDetails',
        },
      },
      {
        $unwind: '$bookDetails',
      },
      {
        $project: {
          _id: 0,
          bookId: '$_id',
          title: '$bookDetails.title',
          totalViews: 1,
        },
      },
    ])

    const tableData = allBooks
      .sort((a, b) => b.totalViews - a.totalViews)
      .slice(0, Number(limit))

    return {
      labels,
      datasets: [
        {
          label: 'Thống kê sách theo lượt xem',
          data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
      tableData,
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

const ExcelJS = require('exceljs')

const exportExcelFile = async (startDate, endDate, type) => {
  const workbook = new ExcelJS.Workbook()
  let worksheet
  let tableData

  // Lấy tableData dựa trên loại thống kê
  switch (type) {
    case 'transaction':
      const overview = await getTransactionOverview(startDate, endDate)
      tableData = overview.tableData
      worksheet = workbook.addWorksheet('Transaction Overview')
      worksheet.columns = [
        { header: 'Transaction ID', key: '_id', width: 20 },
        { header: 'User Id', key: 'userId', width: 20 },
        { header: 'User Name', key: 'userName', width: 20 },
        { header: 'Amount', key: 'amount', width: 15 },
        { header: 'Status', key: 'status', width: 15 },
        { header: 'Date', key: 'date', width: 20 },
      ]
      tableData.forEach((transaction) => {
        worksheet.addRow({
          _id: transaction._id,
          userId: transaction.userId._id,
          userName: transaction.userId.userName,
          amount: transaction.amount,
          status: transaction.status,
          date: new Date(transaction.date).toLocaleString(),
        })
      })
      break
    case 'revenue':
      const revenueTime = await getRevenueOverTime(startDate, endDate)
      tableData = revenueTime.tableData
      worksheet = workbook.addWorksheet('Revenue Over Time')
      worksheet.columns = [
        { header: 'Transaction ID', key: '_id', width: 20 },
        { header: 'User Id', key: 'userId', width: 20 },
        { header: 'User Name', key: 'userName', width: 20 },
        { header: 'Amount', key: 'amount', width: 15 },
        { header: 'Status', key: 'status', width: 15 },
        { header: 'Date', key: 'date', width: 20 },
      ]
      tableData.forEach((revenue) => {
        worksheet.addRow({
          _id: revenue._id,
          userId: revenue.userId._id,
          userName: revenue.userId.userName,
          amount: revenue.amount,
          status: revenue.status,
          date: new Date(revenue.date).toLocaleString(),
        })
      })
      break
    case 'topUsers':
      const topUsers = await getTopUsersByDepositAmount(startDate, endDate)
      tableData = topUsers.tableData
      worksheet = workbook.addWorksheet('Top Users by Deposit Amount')
      worksheet.columns = [
        { header: 'User ID', key: 'userId', width: 20 },
        { header: 'User Name', key: 'userName', width: 20 },
        { header: 'Total Amount Deposited', key: 'totalAmount', width: 25 },
      ]
      tableData.forEach((user) => {
        worksheet.addRow({
          userId: user.userId,
          userName: user.userName,
          totalAmount: user.totalAmount,
        })
      })
      break
    case 'topView':
      const topBooks = await getTopBooksByViews(startDate, endDate)
      tableData = topBooks.tableData
      worksheet = workbook.addWorksheet('Top Books by Views')
      worksheet.columns = [
        { header: 'Book ID', key: 'bookId', width: 30 },
        { header: 'Book Title', key: 'title', width: 30 },
        { header: 'Total Views', key: 'totalViews', width: 20 },
      ]
      tableData.forEach((book) => {
        worksheet.addRow({
          bookId: book.bookId,
          title: book.title,
          totalViews: book.totalViews,
        })
      })
      break
    default:
      throw new Error('Invalid type provided')
  }

  // Thêm dữ liệu vào worksheet

  const buffer = await workbook.xlsx.writeBuffer()
  return buffer
}

// Thống kê thời gian đọc trong khoảng thời gian của 1 user
const getReadTimeOverviewData = async (startDate, endDate, userId) => {
  try {
    // Tạo danh sách các ngày từ startDate đến endDate
    const daysArray = []
    let currentDate = new Date(startDate)
    while (currentDate <= new Date(endDate)) {
      daysArray.push(currentDate.toISOString().split('T')[0]) // Định dạng 'YYYY-MM-DD'
      currentDate.setDate(currentDate.getDate() + 1)
    }

    // Lấy tất cả bản ghi thời gian đọc của user trong khoảng thời gian
    const readTimeData = await ReadTime.find({
      userId: userId,
      date: { $gte: new Date(startDate), $lte: new Date(endDate) },
    }).sort({ date: 1 })

    // Tạo một object map thời gian đọc theo ngày
    const readTimeMap = readTimeData.reduce((acc, record) => {
      acc[record.date.toISOString().split('T')[0]] = {
        totalReadTime: record.totalReadTime,
        detail: record.detail,
      }
      return acc
    }, {})

    // Đảm bảo mỗi ngày đều có một cột, nếu không có dữ liệu thì set giá trị 0
    const labels = daysArray
    const data = daysArray.map((day) => {
      const record = readTimeMap[day]
      return record ? record.totalReadTime : 0 // Nếu không có thì set 0
    })

    const totalReadTimeOverall = data.reduce((acc, time) => acc + time, 0)
    const numberOfDays = daysArray.length
    const averageReadTime =
      numberOfDays > 0 ? totalReadTimeOverall / numberOfDays : 0

    // Tạo details cho từng ngày
    const details = daysArray.map((day) => {
      const record = readTimeMap[day]
      return {
        date: new Date(day),
        totalReadTime: record ? record.totalReadTime : 0,
        details: record ? record.detail : [],
      }
    })

    return {
      labels,
      datasets: [
        {
          label: 'Total Read Time (minutes)',
          data,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
      averageReadTime,
      details,
    }
  } catch (error) {
    console.error('Error fetching read time data:', error)
    throw error
  }
}

const updateReadTime = async (userId, bookId, date, time) => {
  try {
    let readTime = await ReadTime.findOne({
      userId: userId,
      date: date,
    })

    if (!readTime) {
      const data = await ReadTime.create({
        userId: userId,
        date: date,
        totalReadTime: time,
        detail: [
          {
            bookId: bookId,
            readTime: time,
          },
        ],
      })
      return {
        status: 200,
        message: 'Update read time record successfully',
        data,
      }
    } else {
      readTime.totalReadTime += time
      const bookDetail = readTime.detail.find(
        (item) => item.bookId.toString() === bookId.toString()
      )
      if (bookDetail) {
        bookDetail.readTime += time
      } else {
        readTime.detail.push({
          bookId: bookId,
          readTime: time,
        })
      }

      await readTime.save()

      return {
        status: 200,
        message: 'Update read time record successfully',
        data: readTime,
      }
    }
  } catch (error) {
    console.error('Error updating read time:', error)
    throw new Error(error.message)
  }
}

export default {
  getTransactionOverview,
  getRevenueOverTime,
  getTopUsersByDepositAmount,
  getAverageProcessingTime,
  getUserDepositRate,
  getTopBooksByViews,
  exportExcelFile,
  getReadTimeOverviewData,
  updateReadTime,
}
