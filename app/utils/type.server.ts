export type RegisterForm = {//注册表单
  email: string,
  name: string,
  gender: string,
  birthday: Date,
  password: string,
};

export type LoginForm = {//登录表单
  email: string,
  password: string,
};

export type LogForm = {//日志表单
  userId: number,
  reply: boolean,
  share: boolean,
  content: string
};

export type ShareForm = {//分享表单
  userId: number,
  logId: number,
  content: string
};
