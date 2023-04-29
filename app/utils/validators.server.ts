import { prisma } from '~/utils/prisma.erver'
import bcrypt from 'bcryptjs'

export class UserValidator {
  static async validateEmail(
    email: string, register: boolean = false, edit: boolean = false, id: number = 0
  ): Promise<string | undefined> {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!email.length || !validRegex.test(email)) {
      return '请输入正确的邮箱地址'
    } else if (register) {
      const exists = await prisma.email.count({ where: { email: email } })
      if (exists) {
        return '该邮箱已被注册过'
      }
    } else if (edit) {
      const exists = await prisma.email.count({ where: { email: email, userId: { not: id } } })
      if (exists) {
        return '该邮箱已被注册过'
      }
    }
    return undefined
  }

  static validateName = (name: string): string | undefined => {
    if (!name.length) {
      return '姓名不能为空'
    } else {
      const reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g')
      if (!reg.test(name)) {
        return '姓名必须为中文'
      }
    }
  }

  static validateGender = (gender: string): string | undefined => {
    if (!gender.length)
      return '性别不能为空'
  }

  static validateBirthday = (birthday: string): string | undefined => {
    if (!birthday.length)
      return '生日不能为空'
  }

  static validatePassword = async (password: string, edit: boolean = false, id: number = 0): Promise<string | undefined> => {
    if (edit) {
      const user = await prisma.user.findUnique({ where: { id: id } })
      if (user && await bcrypt.compare(password, user.password)) {
        return undefined
      } else {
        return '密码错误'
      }
    } else if (password.length < 8) {
      return '密码长度不能小于8位'
    } else if (password.length >= 8 && password.length < 16 && !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/)) {
      return '密码必须包含大小写字母和数字'
    } else if (password.length >= 16) {
      return '密码长度不能超过16位'
    }
  }
}
