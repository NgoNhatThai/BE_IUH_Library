import adminService from '../services/admin.service.js'
const createAuthor = async (req, res) => {
  try {
    const author = req.body
    const data = await adminService.createAuthor(author)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const updateAuthor = async (req, res) => {
  try {
    const author = req.body
    const data = await adminService.updateAuthor(author)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const getAllAuthor = async (req, res) => {
  try {
    const data = await adminService.getAllAuthor()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const createCategory = async (req, res) => {
  try {
    const category = req.body
    const data = await adminService.createCategory(category)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const getAllCategory = async (req, res) => {
  try {
    const data = await adminService.getAllCategory()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const createMajor = async (req, res) => {
  try {
    const major = req.body
    const data = await adminService.createMajor(major)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const getAllMajor = async (req, res) => {
  try {
    const data = await adminService.getAllMajor()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const createLibraryConfig = async (req, res) => {
  try {
    const config = req.body
    const data = await adminService.createOrUpdateLibraryConfig(config)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const getLibraryConfig = async (req, res) => {
  try {
    const data = await adminService.getLibraryConfig()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const getListAmountRequest = async (req, res) => {
  try {
    const data = await adminService.getListAmountRequest()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const acceptAmountRequest = async (req, res) => {
  try {
    const { userId, requestId } = req.body
    if (!userId || !requestId) {
      return res.status(400).send('User id and request id are required')
    }
    const data = await adminService.acceptAmountRequest(userId, requestId)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const findAllBankFromThirdPartyVietQr = async (req, res) => {
  try {
    const data = await adminService.findAllBankFromThirdPartyVietQr()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const configBankAccount = async (req, res) => {
  try {
    const { bankId, bankName, accountNumber, accountName } = req.body
    if (!bankId || !bankName || !accountNumber || !accountName) {
      return res
        .status(400)
        .send('Bank id, bank name, account number, account name are required')
    }
    const result = await adminService.configBankAccount(
      bankId,
      bankName,
      accountNumber,
      accountName
    )
    res.status(200).json(result)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const getBankAccount = async (req, res) => {
  try {
    const data = await adminService.getBankAccount()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export default {
  createAuthor,
  createCategory,
  createMajor,
  getAllAuthor,
  getAllCategory,
  getAllMajor,
  updateAuthor,
  createLibraryConfig,
  getLibraryConfig,
  getListAmountRequest,
  acceptAmountRequest,
  findAllBankFromThirdPartyVietQr,
  configBankAccount,
  getBankAccount,
}
