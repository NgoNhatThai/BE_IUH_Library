import overviewService from '../services/overview.service.js'

const getTransactionOverview = async (req, res) => {
  try {
    const { startDate, endDate } = req.query
    if (!startDate || !endDate) {
      return res.status(400).send('Missing required fields: startDate, endDate')
    }
    const data = await overviewService.getTransactionOverview(
      startDate,
      endDate
    )
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const getRevenueOverTime = async (req, res) => {
  try {
    const { startDate, endDate } = req.query
    if (!startDate || !endDate) {
      return res.status(400).send('Missing required fields: startDate, endDate')
    }
    const data = await overviewService.getRevenueOverTime(startDate, endDate)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const getTopUsersByDepositAmount = async (req, res) => {
  try {
    const { startDate, endDate } = req.query
    if (!startDate || !endDate) {
      return res.status(400).send('Missing required fields: startDate, endDate')
    }
    const data = await overviewService.getTopUsersByDepositAmount(
      startDate,
      endDate
    )
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const getAverageProcessingTime = async (req, res) => {
  try {
    const { startDate, endDate } = req.query
    if (!startDate || !endDate) {
      return res.status(400).send('Missing required fields: startDate, endDate')
    }
    const data = await overviewService.getAverageProcessingTime(
      startDate,
      endDate
    )
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const getUserDepositRate = async (req, res) => {
  try {
    const data = await overviewService.getUserDepositRate()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const getTopBooksByViews = async (req, res) => {
  try {
    const { startDate, endDate } = req.query
    if (!startDate || !endDate) {
      return res.status(400).send('Missing required fields: startDate, endDate')
    }
    const data = await overviewService.getTopBooksByViews(startDate, endDate)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const exportExcelFile = async (req, res) => {
  try {
    const { startDate, endDate, type } = req.query
    if (!startDate || !endDate || !type) {
      return res
        .status(400)
        .send('Missing required fields: startDate, endDate or type')
    }

    const buffer = await overviewService.exportExcelFile(
      startDate,
      endDate,
      type
    )

    // Đặt header cho response
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    )
    res.setHeader('Content-Disposition', `attachment; filename=report.xlsx`)

    // Gửi buffer trong phản hồi
    res.status(200).send(buffer)
  } catch (error) {
    res.status(500).send(error.message)
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
}
