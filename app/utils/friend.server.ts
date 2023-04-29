import { prisma } from '~/utils/prisma.erver'

export class FriendServer {
  static async getAllFriends(id: number) {
    const friends = await prisma.friendList.findMany({
      where: {
        userId: id
      },
      include: {
        friendGroup: {
          include: {
            friend: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      }
    })
    const data = friends.map(item => item.friendGroup.map(item => item.friend))
    const res = []
    for (const item of data)
      res.push(...item)
    return res
  }

  static async getFriendsList(id: number) {
    return await prisma.friendList.findMany({
      where: {
        userId: id
      }
    })
  }

  static async getFriendsByListId(id: number, userId: number) {
    const res = await prisma.friendList.findUnique({
      where: {
        id
      },
      include: {
        friendGroup: {
          include: {
            friend: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      }
    })
    if (res?.userId !== userId)
      return null
    return res
  }

  static async getUserList(id: number) {
    const friends = await prisma.friendList.findMany({
      where: {
        userId: id
      },
      include: {
        friendGroup: {
          include: {
            friend: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      }
    })
    const data = friends.map(item => item.friendGroup.map(item => item.friend.id))
    const ids = []
    for (const item of data)
      ids.push(...item)
    ids.push(id)
    return await prisma.user.findMany({
      where: {
        id: {
          notIn: ids
        }
      },
      select: {
        id: true,
        name: true
      }
    })
  }

  static async addFriend(listId: number, userId: number) {
    return await prisma.friendList.update({
      where: {
        id: listId
      },
      data: {
        friendGroup: {
          create: {
            friend: {
              connect: {
                id: userId
              }
            }
          }
        }
      }
    })
  }

  static async deleteFriend(listId: number, userId: number) {
    const group = await prisma.friendGroup.findFirst({
      where: {
        listId: listId,
        friendId: userId
      }
    })
    return await prisma.friendGroup.delete({
      where: {
        id: group!.id
      }
    })
  }

  static async deleteFriendGroup(listId: number) {
    return await prisma.friendList.delete({
      where: {
        id: listId
      }
    })
  }

  static async addFriendGroup(userId: number, name: string) {
    return await prisma.friendList.create({
      data: {
        name,
        userId,
        isGroup: true
      }
    })
  }
}
