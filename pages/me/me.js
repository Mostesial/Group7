Page({

  /**
   * 页面的初始数据
   */
  data: {
    PageCur:'me',
    avatarUrl:"https://s1.ax1x.com/2022/07/06/jaJ6M9.png",
    nickName:'还未授权头像昵称',
  },

  NavChange1(e) {
    wx.switchTab({
      url: '/pages/record/record',
    })
  },
  NavChange2(e) {
    wx.switchTab({
      url: '/pages/remind/remind',
    })
  },
  NavChange3(e) {
    wx.switchTab({
      url: '/pages/knowledge/knowledge',
    })
  },
  NavChange4(e) {
    wx.switchTab({
      url: '/pages/me/me',
    })
  },

 gotoidea() { wx.redirectTo({
    url:"/pages/me/idea/idea"
  })},
  gotocollect() { 
    wx.redirectTo({
    url:"/pages/me/collect/collect"
  })},
  gotoname() { 
    wx.redirectTo({
  url:"/pages/me/name/name" 
  })},
  
  gototeaching() { 
    wx.redirectTo({
    url:"/pages/me/teaching/teaching" 
  })},
  gotosetting() { 
    wx.redirectTo({
    url:"/pages/me/setting/setting" 
  })},
  // 事件处理函数
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
 
  
  onLoad(option) {
    var user=wx.getStorageSync('user')
    console.log(user)
    var nickName =user.nickName 
    var avatarUrl =user.avatarUrl
      this.setData({
        nickName: nickName
      })
      this.setData({
        avatarUrl: avatarUrl
      })
},
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage() {

  }
})