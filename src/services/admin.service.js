import Author from '../config/nosql/models/author.model'
import Category from '../config/nosql/models/category.model'
import Major from '../config/nosql/models/major.model'
import Config from '../config/nosql/models/config-library.model'
import AmountRequest from '../config/nosql/models/requestAmount.model'
import Amount from '../config/nosql/models/amount.model'
import BankAccount from '../config/nosql/models/bankAccount.model'
import axios from 'axios'

const createAuthor = async (author) => {
  try {
    const newAuthor = new Author({
      ...author,
    })
    const data = await Author.create(newAuthor)
    return {
      status: 200,
      message: 'Create author success',
      data: data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const updateAuthor = async (author) => {
  try {
    const data = await Author.update(author)
    return {
      status: 200,
      message: 'Update author success',
      data: data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const getAllAuthor = async () => {
  try {
    const data = await Author.find()
    return {
      status: 200,
      message: 'Get all author success',
      data: data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const createCategory = async (category) => {
  try {
    const newCategory = new Category({
      ...category,
    })
    const data = await Category.create(newCategory)
    return {
      status: 200,
      message: 'Create category success',
      data: data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const getAllCategory = async () => {
  try {
    const data = await Category.find()
    return {
      status: 200,
      message: 'Get all category success',
      data: data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const createMajor = async (major) => {
  try {
    const newMajor = new Major({
      ...major,
    })
    const data = await Major.create(newMajor)
    return {
      status: 200,
      message: 'Create major success',
      data: data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const getAllMajor = async () => {
  try {
    const data = await Major.find()
    return {
      status: 200,
      message: 'Get all major success',
      data: data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const createOrUpdateLibraryConfig = async (config) => {
  try {
    let existingConfig = await Config.findOne()

    if (existingConfig) {
      for (const key in config) {
        if (config[key] !== undefined && config[key] !== existingConfig[key]) {
          existingConfig[key] = config[key]
        }
      }
      const updatedConfig = await existingConfig.save()
      return {
        status: 200,
        message: 'Update config success',
        data: updatedConfig,
      }
    } else {
      const newConfig = new Config({
        ...config,
      })
      const createdConfig = await newConfig.save()
      return {
        status: 201,
        message: 'Create config success',
        data: createdConfig,
      }
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const getLibraryConfig = async () => {
  try {
    const config = await Config.findOne().populate('categories')
    if (!config) {
      return {
        status: 404,
        message: 'Config not found',
      }
    }
    return {
      status: 200,
      message: 'Get config success',
      data: config,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const getListAmountRequest = async () => {
  try {
    const data = await AmountRequest.find().populate([
      { path: 'bankConfigId' },
      { path: 'userId' },
    ])
    data.sort((a, b) => b.date - a.date)
    return data
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const acceptAmountRequest = async (userId, requestId) => {
  try {
    const request = await AmountRequest.findById(requestId)
    if (!request) {
      return {
        status: 404,
        message: 'Request not found',
      }
    }
    if (request.status === 'APPROVED') {
      return {
        status: 400,
        message: 'Request has been approved',
      }
    }
    let userAmount = await Amount.findOne({ userId: userId })
    if (!userAmount) {
      userAmount = new Amount({
        userId: userId,
        total: 0,
        history: [],
      })
    }
    userAmount.history.push({
      amount: request.amount,
      description: request.description,
      remain: userAmount.total + request.amount,
      bankConfigId: request.bankConfigId,
      date: request.date,
    })
    userAmount.total += request.amount

    request.status = 'APPROVED'
    await request.save()

    await userAmount.save()

    return {
      status: 200,
      message: 'Accept amount request success',
      data: userAmount,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const findAllBankFromThirdPartyVietQr = async () => {
  try {
    const response = await axios.get('https://api.vietqr.io/v2/banks')
    return {
      status: 200,
      data: response.data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const configBankAccount = async (
  bankId,
  bankName,
  accountNumber,
  accountName
) => {
  try {
    const bankAccount = await BankAccount.findOne({ bankId, accountNumber })
    let data
    if (!bankAccount) {
      const newBankAccount = new BankAccount({
        bankId,
        bankName,
        accountNumber,
        accountName,
      })
      data = await newBankAccount.save()
    } else {
      data = await BankAccount.updateOne(
        { bankId, accountNumber },
        {
          bankName,
          accountName,
        }
      )
    }
    return {
      status: 200,
      message: bankAccount
        ? 'Bank account updated successfully'
        : 'Bank account created successfully',
      data: data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const getBankAccount = async () => {
  try {
    const data = await BankAccount.find()
    return {
      status: 200,
      message: 'Get all bank account success',
      data: data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const rejectAmountRequest = async (requestId) => {
  try {
    const request = await AmountRequest.findById(requestId)
    if (!request) {
      return {
        status: 404,
        message: 'Request not found',
      }
    }
    if (request.status === 'REJECTED') {
      return {
        status: 400,
        message: 'Request has been rejected',
      }
    }
    request.status = 'REJECTED'
    await request.save()
    return {
      status: 200,
      message: 'Reject amount request success',
      data: request,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}

export default {
  createAuthor,
  updateAuthor,
  createCategory,
  createMajor,
  getAllAuthor,
  getAllCategory,
  getAllMajor,
  createOrUpdateLibraryConfig,
  getLibraryConfig,
  getListAmountRequest,
  acceptAmountRequest,
  findAllBankFromThirdPartyVietQr,
  configBankAccount,
  getBankAccount,
  rejectAmountRequest,
}
