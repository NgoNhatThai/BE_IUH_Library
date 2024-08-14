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

export default {
  createAuthor,
  createCategory,
  createMajor,
  getAllAuthor,
  getAllCategory,
  getAllMajor,
  updateAuthor,
}
