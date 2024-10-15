import overviewService from '../services/overview.service.js'

const getTransactionOverview = async (req, res) => {
  try {
    const { startDate, endDate } = req.query
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

export default {
  getTransactionOverview,
  getRevenueOverTime,
  getTopUsersByDepositAmount,
  getAverageProcessingTime,
  getUserDepositRate,
}
