import { Injectable } from '@angular/core';

@Injectable()
export class apiUrl {
  _baseUrl = '';
  protected auth = {
    login: this._baseUrl + 'api/Auth/login',
    sendSms: this._baseUrl + 'api/Auth/sendSmsForLogin',
    loginWithMobile: this._baseUrl + '/api/Auth/loginWithMobile',
    registerWithMobile: this._baseUrl + '/api/Auth/registerWithMobile',
    updateUserInf: this._baseUrl + '/api/User/updateCurrentUser',
    forgotPass: this._baseUrl + '/api/Auth/ForgetPassword',
    updatePassword: this._baseUrl + '/api/User/updatePassword',
    ChangeUserActive: this._baseUrl + '/api/User/ChangeUserActive'
  }

  protected user = {
    getUserInfo: this._baseUrl +'api/User/getUserInfo'
  }

  protected factor = {
    getFactorCurrentUserByUserId: this._baseUrl + 'api/Factor/getFactorCurrentUserByUserId'
  }

  protected admin = {
    panelList: this._baseUrl + '/api/Panel/getAllPanel',
    addPanel: this._baseUrl + '/api/Panel/setPanel',
    editPanel: this._baseUrl + '/api/Panel/editePanel',
    removePanel: this._baseUrl + '/api/Panel/deletePanel',
    getPanelById: this._baseUrl + "/api/Panel/getPanelById",
    allUserList: this._baseUrl + "/api/Auth/getAllUser",
    removeUser: this._baseUrl + "/api/User/removeUser",
    boxList: this._baseUrl + "/api/Box/getAllBoxByUserId",
    boxQuery: this._baseUrl + "/api/Box/getBoxQuery",
    messages: this._baseUrl + '/api/Message/getMessageForAdmin',
  }
  protected panel = {
    panelList: this._baseUrl + '/api/Panel/getPanelsUser',
    setPanel: this._baseUrl + '/api/Panel/setPanelForUser',
    activePanel: this._baseUrl + '/api/Panel/getPanelActiveUser',
    timePanelUsed: this._baseUrl + '/api/Panel/getSelectUsedPanelRelationByUserID',
    timePanelUsedAdmin: this._baseUrl + '/api/Panel/getSelectUsedPanelRelationByUserIDByAdmin',
     getPanelActiveUserByUserId: '/api/Panel/getPanelActiveUserByUserId',
 getLastPanelUsed:'/api/Panel/getLastPanelUsed'
  }

  protected bankPortal = {
    buy: this._baseUrl + '/api/BankPortal/BuyPanel'
  }

  protected box = {
    setBox: this._baseUrl + '/api/Box/setBox',
    getAllBox: this._baseUrl + '/api/Box/getBox',
    removeBox: this._baseUrl + '/api/Box/removeBox',
    getBoxWithId: this._baseUrl + '/api/Box/getBoxById',
    updateBox: this._baseUrl + '/api/Box/updateBox',
    getAllBoxCurrentUser: this._baseUrl + '/api/Box/getAllBoxCurrentUser',
  }
    
  protected messages = {
    messages: this._baseUrl + '/api/Message/getMessage',
    messagesHistory: this._baseUrl + '/api/Message/getMessageHistory',
    favoritMessage: this._baseUrl + '/api/Message/getFavoritMessage',
    setFavoritMsg: this._baseUrl + '/api/Message/SetFavoritMessage',
    updateFavoritMsg: this._baseUrl + '/api/Message/UpdateFavoritMessage',
    chartSocialnetwork: this._baseUrl + '/api/Message/getChartSocialnetwork',
    getMessageCountOnPlatformTypeANDDate: this._baseUrl + '/api/Message/getMessageCountOnPlatformTypeANDDate',
    getDashboardMessageCountOnPlatformTypeANDDate: this._baseUrl + '/api/Message/getDashboardMessageCountOnPlatformTypeANDDate',
    getMessageCountOnPlatformType: this._baseUrl + '/api/Message/getMessageCountOnPlatformType',
    getReportMessageCountOnPlatformType: this._baseUrl + '/api/Message/getRepostMessageCountOnPlatformType',
    activeMostPost: this._baseUrl + '/api/Message/getActiveMostPost',
    getTopUsers: this._baseUrl + "/api/Message/getTopUsers",
    getRemainMessageCount: this._baseUrl + "/api/Message/getRemainMessageCount",
    crowlData: this._baseUrl + "/api/Message/manageCrwlingKeyWords",

  }

  protected trend = {
    SelectWordTrendEvery6HourForTelegram: this._baseUrl + '/api/Trend/SelectWordTrendEvery6HourForTelegram',
    SelectWordTrendEvery6HourForInstagram: this._baseUrl + '/api/Trend/SelectWordTrendEvery6HourForInstagram',
    SelectWordTrendEvery6HourForTwitter: this._baseUrl + '/api/Trend/SelectWordTrendEvery6HourForTwitter',
    SelectCountMessageByPlatformCurrentUser: this._baseUrl + '/api/Trend/SelectCountMessageByPlatformCurrentUser',
    SelectCountMessageByPlatform: this._baseUrl + '/api/Trend/SelectCountMessageByPlatform',
    SelectWordTrendEvery6HourForAllPlatform: this._baseUrl + '/api/Trend/SelectWordTrendEvery6HourForAllPlatform'
  }

}
