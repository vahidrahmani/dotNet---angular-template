export interface NavItem {
  readonly displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  permissionKey?: string;
  index?: number;
  children?: NavItem[];
}
export interface LoginContextInterface {
  phonenumber: string;
  password: string;
  username: string;
}
export interface RegisterContextInterface {
  email: string,
  lastName: string,
  firstName: string,
  phonenumber: string,
  password: string;
  company: string,
  username: string,
  code: number;
}
export interface UserInfoInterface {
  firstName: string;
  userId: number;
  lastName: string;
  permissions: string[];
  phoneNumber: string;
  token: string;
  email: string;
  userName: string;
  company: string;
}

export interface UserInfoUpdatePasswordInterface {
  password: string;
  repassword: number;
  newpassword: number;
}
export class Environment {
  readonly production: boolean;
  readonly baseUrl: string;
}
 
export enum panelType {
  Normal = 1,//عادی
  Period = 2 ,//زمانی
  Volume = 3//حجمی
}
export interface PanelContextInterface {
  type?: panelType;
  panelId?: number;
  boxCount?: number;
  imagePanel?: any;
  description: string;
  name: string;
  socialNetwork: string;
  price: number;
  createDate?: string;
  creator?: any;
  messageCount: number;
  fromDate?: any;
  toDate: any;
  active: boolean;
  countDay: number;
  inboxCount?: number;
}

export interface IreminderMsgPanel{
  allDaysCount: number;
  allMessageCount: number;
}


export interface Inputwords {
  value: string;
}

export interface IboxContext{
  createDate?: string;
  pkBoxId?: number;
  name: string
  description: string
  socialNetwork: string
  keyWords: string
  requiredWords: string
  exceptionalWords: string
}


export interface IsocialNetwork {
  telegram: boolean | 1;
  tweter: boolean | 2;
  instagram :boolean|3
}
export interface CountMessageByPlatform {
  instaCount: number;
  telegramCount: number;
  twitterCount: number;
}

export interface IresponseSetBox {
  status: boolean;
  text: string;
}

export interface RemainMessageCount {

  allMessageCount: number;
  dateDiffTime: number;
  allMessagePanel: number;
  timePanel: number;
}

export interface IMessageConfig {
  queryColor: any;
  boxId: number;
  boxData: IboxContext;
  filters?: any;
}

export interface IFavoritMessageInput {
  boxId: number,
  messageId: string,
  type: number,
  isFavorit:0|1
}
