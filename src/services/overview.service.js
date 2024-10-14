import AmountRequest from '../config/nosql/models/requestAmount.model'
import Amount from '../config/nosql/models/amount.model'
import User from '../config/nosql/models/user.model'

// Doanh thu theo trạng thái giao dịch
const getTransactionOverview = async () => {
  try {
    const totalTransactions = await AmountRequest.countDocuments()
    const pendingTransactions = await AmountRequest.countDocuments({
      status: 'PENDING',
    })
    const approvedTransactions = await AmountRequest.countDocuments({
      status: 'APPROVED',
    })
    const rejectedTransactions = await AmountRequest.countDocuments({
      status: 'REJECTED',
    })

    return {
      labels: ['Pending', 'Approved', 'Rejected'],
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
    const revenue = await AmountRequest.aggregate([
      {
        $match: {
          status: 'APPROVED',
          date: { $gte: new Date(startDate), $lte: new Date(endDate) },
        },
      },
      {
        $group: {
          _id: { $month: '$date' },
          totalAmount: { $sum: '$amount' },
        },
      },
      { $sort: { _id: 1 } },
    ])

    const labels = revenue.map((item) => `Month ${item._id}`)
    const data = revenue.map((item) => item.totalAmount)

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
const getTopUsersByDepositAmount = async () => {
  try {
    const limit = 5
    const topUsers = await Amount.aggregate([
      {
        $project: {
          userId: 1,
          totalAmount: '$total',
        },
      },
      { $sort: { totalAmount: -1 } },
      { $limit: limit },
    ])

    const labels = topUsers.map((user) => user.userId)
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
const getAverageProcessingTime = async () => {
  try {
    const processingTimes = await AmountRequest.aggregate([
      {
        $match: {
          status: { $in: ['APPROVED', 'REJECTED'] },
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
      labels: ['Users With Deposits', 'Total Users'],
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
