import AmountRequest from '../config/nosql/models/requestAmount.model'
import Amount from '../config/nosql/models/amount.model'
import User from '../config/nosql/models/user.model'

// Doanh thu theo trạng thái giao dịch
const getTransactionOverview = async (startDate, endDate) => {
  try {
    const totalTransactions = await AmountRequest.countDocuments({
      date: { $gte: new Date(startDate), $lte: new Date(endDate) },
    })
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

    return {
      labels: ['Đang chờ', 'Đã duyệt', 'Từ chối'],
      datasets: [
        {
          label: 'Transactions Overview',
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

    return {
      labels,
      datasets: [
        {
          label: 'Revenue Over Time',
          data,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

// Doanh thu người dùng cao nhất theo số tiền gửi
const getTopUsersByDepositAmount = async (startDate, endDate) => {
  try {
    const limit = 5
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
      { $limit: limit },
    ])

    const preLabels = topUsers.map((user) => user._id)
    const users = await User.find({ _id: { $in: preLabels } }).select(
      'userName'
    )
    const labels = users.map((user) => user.userName)
    const data = topUsers.map((user) => user.totalAmount)

    return {
      labels,
      datasets: [
        {
          label: 'Top Users by Deposit Amount',
          data,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
        },
      ],
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

export default {
  getTransactionOverview,
  getRevenueOverTime,
  getTopUsersByDepositAmount,
  getAverageProcessingTime,
  getUserDepositRate,
}
