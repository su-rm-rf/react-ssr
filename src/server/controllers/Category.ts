import { Category1 } from './../models/Category1'
import { Category2 } from './../models/Category2'
// import { pool } from "../utils/db"

import { AppDataSource } from "../data-source"

export default class CategoryController {
  async list (ctx) {
    const category1Repository = AppDataSource.getRepository(Category1)

    const list = await category1Repository.find({ relations: ['category2s'] })
    console.log(list)
    ctx.body = list
  }
  
  async detail (ctx) {
    const { id } = ctx.params
    const category2Repository = AppDataSource.getRepository(Category2)

    const c2 = new Category2()
  
    const detail = await category2Repository.findOneBy({ id })
    console.log(detail)
    ctx.body = detail
  }

  async add (ctx) {
    
  }

  async update (ctx) {
    
  }

  async delete (ctx) {
    
  }
}