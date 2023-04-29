import { prisma } from '~/utils/prisma.erver'
import { FriendServer } from '~/utils/friend.server'

export class ReplyServer {
  static async createReply(userId: number, type: string, target: number, reply: boolean, content: string) {
    return await prisma.reply.create({
      data: {
        userId,
        type,
        logId: type === 'log' ? target : null,
        replyId: type === 'reply' ? target : null,
        content,
        canReply: reply
      }
    })
  }

  static async getReplyByLogId(logId: number, userId: number) {
    const res: any = await prisma.reply.findMany({
      where: {
        logId,
        type: 'log'
      },
      include: {
        other_reply: true,
        user: {
          select: {
            id: true,
            name: true
          }
        }
      }
    })
    const friends = await FriendServer.getAllFriends(userId)
    for (const item of res) {
      if (item.other_reply.length) {
        for (const reply of item.other_reply) {
          await ReplyServer.getChildReply(reply, friends, userId)
        }
      }
      item.reply = item.canReply || item.userId === userId || friends.some((friend: any) => friend.id === item.userId)
      item.self = item.userId === userId
    }
    return res
  }

  static async getChildReply(reply: any, friends: { id: number, name: string }[], userId: number) {
    const temp = await prisma.reply.findUnique({
      where: {
        id: reply.id
      },
      include: {
        other_reply: true,
        user: {
          select: {
            id: true,
            name: true
          }
        }
      }
    })
    reply.user = temp!.user
    if (temp!.other_reply.length) {
      reply.other_reply = temp!.other_reply
      for (const item of reply.other_reply) {
        await ReplyServer.getChildReply(item, friends, userId)
      }
    }
    reply.reply = reply.canReply || reply.userId === userId || friends.some((item: any) => item.id === reply.userId)
    reply.self = reply.userId === userId
  }

  static async verifyReply(id: number, userId: number, edit: boolean = false) {
    const reply = await prisma.reply.findUnique({
      where: {
        id
      }
    })
    const friends = await FriendServer.getAllFriends(userId)
    if (edit) {
      if(reply && reply.userId === userId)
        return reply
      else
        return false
    }
    else
      return reply && (reply.canReply || reply.userId === userId || friends.some((item: any) => item.id === reply.userId))
  }

  static async deleteReply(id: number, userId: number) {
    const reply = await prisma.reply.findUnique({
      where: {
        id
      }
    })
    if (reply && (reply.userId === userId || reply.canReply)) {
      await prisma.reply.delete({
        where: {
          id
        }
      })
      return true
    }
    return false
  }

  static async updateReply(id: number, userId: number, replyBool: boolean, contentStr: string) {
    const reply = await prisma.reply.findUnique({
      where: {
        id
      }
    })
    if (reply && reply.userId === userId) {
      return await prisma.reply.update({
        where: {
          id
        },
        data: {
          canReply: replyBool,
          content: contentStr
        }
      })
    }
  }
}
