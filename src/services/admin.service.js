import Author from '../config/nosql/models/author.model'
import Category from '../config/nosql/models/category.model'
import Major from '../config/nosql/models/major.model'

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
export default {
  createAuthor,
  updateAuthor,
  createCategory,
  createMajor,
  getAllAuthor,
  getAllCategory,
  getAllMajor,
}
