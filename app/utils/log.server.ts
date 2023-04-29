import { LogForm } from '~/utils/type.server'
import { prisma } from '~/utils/prisma.erver'
import { FriendServer } from '~/utils/friend.server'

export class LogServer {
  static async createLog(log: LogForm) {
    return await prisma.log.create({
      data: {
        canReply: log.reply,
        canShare: log.share,
        content: log.content,
        user: {
          connect: {
            id: log.userId
          }
        }
      }
    })
  }

  static async updateLog(id: number, log: LogForm) {
    return await prisma.log.update({
      where: {
        id
      },
      data: {
        canReply: log.reply,
        canShare: log.share,
        content: log.content
      }
    })
  }

  static async getLogs(userId: number) {
    const res: any = await prisma.log.findMany({
      orderBy: {
        updateTime: 'desc'
      },
      include: {
        user: {
          select: {
            name: true
          }
        }
      }
    })
    const friends = await FriendServer.getAllFriends(userId)
    return res.map((item: any) => {
      item.share = item.canShare || item.userId === userId || friends.some((friend: any) => friend.id === item.userId)
      return item
    })
  }

  static async getLogsByUserId(userId: number) {
    return await prisma.log.findMany({
      where: {
        userId
      },
      orderBy: {
        updateTime: 'desc'
      },
      include: {
        user: {
          select: {
            name: true
          }
        }
      }
    })
  }

  static async getLogById(id: number, verify: boolean = false, userId: number = -1) {
    const res: any = await prisma.log.findUnique({
      where: {
        id
      },
      include: {
        user: {
          select: {
            name: true
          }
        }
      }
    })
    if (!res || (verify && res.userId !== userId))
      return null

    const friends = await FriendServer.getAllFriends(userId)
    res.reply = res.canReply || res.userId === userId || friends.some((item: any) => item.id === res.userId)
    res.share = res.canShare || res.userId === userId || friends.some((item: any) => item.id === res.userId)
    return res
  }

  static async deleteLogById(id: number, userId: number) {
    const res = await prisma.log.findUnique({
      where: {
        id
      },
      select: {
        userId: true
      }
    })
    if (res?.userId !== userId)
      return null
    return await prisma.log.delete({
      where: {
        id
      }
    })
  }

  static async verifyReply(id: number, userId: number) {
    const log = await prisma.log.findUnique({
      where: {
        id
      }
    })
    const friends = await FriendServer.getAllFriends(userId)
    return log && (log.canReply || log.userId === userId || friends.some((item: any) => item.id === log.userId))
  }

  static async verifyShare(id: number, userId: number) {
    const log = await prisma.log.findUnique({
      where: {
        id
      }
    })
    const friends = await FriendServer.getAllFriends(userId)
    return log && (log.canShare || log.userId === userId || friends.some((item: any) => item.id === log.userId))
  }
}
