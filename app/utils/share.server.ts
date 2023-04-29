import type { ShareForm } from '~/utils/type.server'
import { prisma } from '~/utils/prisma.erver'

export class ShareServer {
  static async createShare(share: ShareForm) {
    return await prisma.share.create({
      data: {
        ...share
      }
    })
  }

  static async getShares(userId: number) {
    const res: any = await prisma.share.findMany({
      orderBy: {
        updateTime: 'desc'
      },
      include: {
        user: {
          select: {
            name: true
          }
        },
        log: {
          include: {
            user: {
              select: {
                name: true
              }
            }
          }
        }
      }
    })
    return res.map((item: any) => {
      item.self = item.userId === userId
      return item
    })
  }

  static async verifyShare(id: number, userId: number) {
    const res: any = await prisma.share.findUnique({
      where: {
        id
      }
    })
    return res?.userId === userId;
  }

  static async getShareById(id: number) {
    return await prisma.share.findUnique({
      where: {
        id
      },
      include: {
        user: {
          select: {
            name: true
          }
        },
        log: {
          include: {
            user: {
              select: {
                name: true
              }
            }
          }
        }
      }
    })
  }

  static async updateShare(id: number, contentStr: string) {
    return await prisma.share.update({
      where: {
        id
      },
      data: {
        content: contentStr
      }
    })
  }

  static async deleteShare(id: number, userId: number) {
    const share = await prisma.share.findUnique({
      where: {
        id
      }
    })
    if (share?.userId === userId) {
      return await prisma.share.delete({
        where: {
          id
        }
      })
    }
  }

  static async getSharesByUserId(userId: number) {
    const share = await prisma.share.findMany({
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
        },
        log: {
          include: {
            user: {
              select: {
                name: true
              }
            }
          }
        }
      }
    })
    return share.map((item: any) => {
      item.self = true
      return item
    })
  }
}
