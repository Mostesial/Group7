//index.js
//获取应用实例
const AV = require('../../../libs/av-core-min');

const app = getApp()
Page({
  data: {
    open:false,
    focus:false,
    image:'cuIcon-attentionfill',
    username: '',
    password: '',
    animationlogo: {},
    animationpurpleC1:{},
    animationpurpleC2:{},
    animationredC:{},
    animationpinkC:{}
  },
  
  switch(){
    this.setData({
      open:!this.data.open,
    })
    if(this.data.open){
      this.setData({
        image:'cuIcon-attentionforbidfill'
      })
    } else{
      this.setData({
        image:'cuIcon-attentionfill'
      })
    }
  },
  focus(){
    this.setData({
      focus:true
    })
  },
  blur(){
    this.setData({
      focus:false
    })
  },
  inputUsername(e) {
    this.setData({
      username: e.detail.value,
    })
    console.log(app.globalData.user.username)
  },
  inputPassword(e) {
    this.setData({
      password: e.detail.value,
    })
    console.log(app.globalData.user.password)
  },
  register(){
    wx.redirectTo({
      url: '/pages/start/reg/reg',
    })
  },
  getUserProfile(){
    wx.getUserProfile({
    desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    success: (res) => {
      console.log("获取用户信息成功", res)
      let user = res.userInfo;  //我因为需求用了，但实际上不需要
      app.globalData.userInfo = res.userInfo; //同上
      wx.setStorageSync('user', user)  //同上
    },
    fail: res => {
      console.log("获取用户信息失败", res)
    }
   })
  },
  login(){
    const{
      username,
      password,
    } = this.data;
    if(this.data.username==''||this.data.password==''){
      wx.showModal({
        title: '亲爱的用户',
        content: '请输入账号密码，如果还未注册请先注册再登入',
        cancelText: '取消',
        confirmText: '确定',
      }); 
    }
    else{
      this.getUserProfile()
    AV.User.logIn(username,password).then(function(loginedUser){
      wx.switchTab({
        url: '/pages/record/record',
      })
    },function(error){
      wx.showModal({
        title: '亲爱的用户',
        content: '账号密码错误',
        cancelText: '取消',
        confirmText: '确定',
      }); 
    })
    }
  },

  onShow: function(){
    var animation1 = wx.createAnimation({
      duration: 2000,
      timingFunction: 'linear',
    })
    var animation2 = wx.createAnimation({
      duration: 2000,
      timingFunction: 'linear',
    })
    var animation3 = wx.createAnimation({
      duration: 2000,
      timingFunction: 'linear',
    })
    var animation4 = wx.createAnimation({
      duration: 2000,
      timingFunction: 'linear',
    })
    var animation5 = wx.createAnimation({
      duration: 700,
      timingFunction: 'linear',
    })
    this.animation = animation1
    setTimeout(function() {
      animation1.translate(-100,100).step()
      this.setData({
        animationpurpleC1:animation1.export()
      })
    }.bind(this), 200)
    this.animation = animation2
    setTimeout(function() {
      animation2.translate(20,-400).step()
      this.setData({
        animationpurpleC2:animation2.export()
      })
    }.bind(this), 200)
    this.animation = animation3
    setTimeout(function() {
      animation3.translate(-70,0).step()
      this.setData({
        animationredC:animation3.export()
      })
    }.bind(this), 200)
    this.animation = animation4
    setTimeout(function() {
      animation4.translate(-80,-450).step()
      this.setData({
        animationpinkC:animation4.export()
      })
    }.bind(this), 200)
    this.animation = animation5
    setTimeout(function() {
      animation5.scale(0.7,0.7).step()
      this.setData({
        animationlogo:animation5.export()
      })
    }.bind(this), 200)
  },
  onShareAppMessage: function () {}
})

