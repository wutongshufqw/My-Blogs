import bcrypt from 'bcryptjs'
import { RegisterForm } from '~/utils/type.server'
import { prisma } from '~/utils/prisma.erver'

export class UserServer {
  static async createUser(user: RegisterForm) {
    const passwordHash = await bcrypt.hash(user.password, 10)
    const newUser = await prisma.user.create({
      data: {
        name: user.name,
        gender: user.gender,
        birthday: user.birthday,
        password: passwordHash,
        email: {
          create: {
            email: user.email,
            isMain: true
          }
        },
        FriendList: {
          create: {}
        }
      }
    })
    return { id: newUser.id, email: user.email }
  }

  static async validateUser(email: string, password: string) {
    const email_ = await prisma.email.findUnique({
      where: {
        email: email
      },
      select: {
        user: {
          select: {
            id: true,
            password: true
          }
        },
        isMain: true
      }
    })
    if (email_ && email_.isMain && await bcrypt.compare(password, email_.user.password))
      return email_.user
  }

  static async getUserById(id: number) {
    return await prisma.user.findUnique({
      where: {
        id: id
      },
      select: {
        id: true,
        name: true,
        gender: true,
        birthday: true,
        address: true,
        email: {
          select: {
            id: true,
            email: true,
            isMain: true
          },
          orderBy: {
            isMain: 'desc'
          }
        }
      }
    })
  }

  static async updateUser(id: number, name: string, gender: string, birthday: Date, address: string) {
    const user = await prisma.user.update({
      where: { id },
      data: { name, gender, birthday, address }
    })
    if (user)
      return UserServer.getUserById(id)
    else
      return null
  }

  static async updateEmails(id: number, email: any[]) {
    const ids = email.filter((e: any) => e.id).map((e: any) => e.id)
    const functions = []
    functions.push(prisma.email.deleteMany({
      where: {
        id: {
          notIn: ids
        }
      }
    }))
    email.forEach((e: any) => {
      if (e.id)
        functions.push(prisma.email.update({
          where: {
            id: e.id
          },
          data: {
            email: e.email
          }
        }))
      else
        functions.push(prisma.email.create({
          data: {
            email: e.email,
            isMain: false,
            user: {
              connect: {
                id: id
              }
            }
          }
        }))
    })
    //开启事务
    const result = await prisma.$transaction(functions)
    if (result)
      return await UserServer.getUserById(id)
    else
      return null
  }

  static async updatePassword(id: number, password: string) {
    const passwordHash = await bcrypt.hash(password, 10)
    const user = await prisma.user.update({
      where: { id },
      data: { password: passwordHash }
    })
    if (user)
      return UserServer.getUserById(id)
    else
      return null
  }

  static async getExperiences(id: number) {
    const study = await prisma.experience.findMany({
      where: {
        userId: id,
        type: 'study'
      },
      select: {
        id: true,
        rank: true,
        address: true,
        position: true,
        startTime: true,
        endTime: true
      }
    })
    const work = await prisma.experience.findMany({
      where: {
        userId: id,
        type: 'work'
      },
      select: {
        id: true,
        address: true,
        position: true,
        startTime: true,
        endTime: true
      }
    })
    return { study, work }
  }

  static async updateExperiences(id: number, study: any[], work: any[]) {
    const ids = study.filter((e: any) => e.id).map((e: any) => e.id)
    work.filter((e: any) => e.id).forEach((e: any) => {
      ids.push(e.id)
    })
    const functions = []
    functions.push(prisma.experience.deleteMany({
      where: {
        id: {
          notIn: ids
        }
      }
    }))
    study.forEach((e: any) => {
      if (e.id)
        functions.push(prisma.experience.update({
          where: {
            id: e.id
          },
          data: {
            rank: e.rank,
            address: e.address,
            position: e.position,
            startTime: e.startTime,
            endTime: e.endTime,
            type: 'study'
          }
        }))
      else
        functions.push(prisma.experience.create({
          data: {
            rank: e.rank,
            address: e.address,
            position: e.position,
            startTime: e.startTime,
            endTime: e.endTime,
            type: 'study',
            user: {
              connect: {
                id: id
              }
            }
          }
        }))
    })
    work.forEach((e: any) => {
      if (e.id)
        functions.push(prisma.experience.update({
          where: {
            id: e.id
          },
          data: {
            address: e.address,
            position: e.position,
            startTime: e.startTime,
            endTime: e.endTime,
            type: 'work'
          }
        }))
      else
        functions.push(prisma.experience.create({
          data: {
            address: e.address,
            position: e.position,
            startTime: e.startTime,
            endTime: e.endTime,
            type: 'work',
            user: {
              connect: {
                id: id
              }
            }
          }
        }))
    })
    const result = await prisma.$transaction(functions)
    if (result)
      return await UserServer.getExperiences(id)
    else
      return null
  }
}
