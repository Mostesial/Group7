const AV = require('../../../libs/av-core-min');

const app = getApp();
Page({
  data: {
    open:false,
    focus:false,
    image:'cuIcon-attentionfill',
    location: ['中国大陆', '香港', '澳门','中国台湾'],
    username: '',
    password: '',
    minname: '',
    gouxuan:'',
    animationData1: {},
    animationData2: {},
    animationData3: {},
    animationData4: {}
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
  agreement(e){
    wx.redirectTo({
      url:"/pages/start/agr/agr"
    }) 
  },
  checkboxChange:function(e){
    this.setData({
      gouxuan:e.detail.value,
    })
  },
  PickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  inputUsername(e) {
    this.setData({
      username: e.detail.value,
    })
    console.log(app.globalData.user.username)
    app.globalData.user.username=e.detail.value
    
  },
  inputPassword(e) {
    this.setData({
      password: e.detail.value,
     
    }) 
    console.log(app.globalData.user.password)
    app.globalData.user.password=e.detail.value
  },
  inputMinname(e) {
    this.setData({
      minname: e.detail.value,
    })
    console.log(app.globalData.user.minname)
    app.globalData.user.minname=e.detail.value
  },
  register(){
    const {
      username,
      password,
      minname,
      gouxuan,
    } = this.data;
    if(username=="") {
      wx.showModal({
        title: '亲爱的用户',
        content: '用户名不能为空',
        cancelText: '取消',
        confirmText: '确定',
      });  
    }
    else if(password=="") {
      wx.showModal({
        title: '亲爱的用户',
        content: '密码不能为空',
        cancelText: '取消',
        confirmText: '确定',
      });  
    }
    else if(minname=="") {
      wx.showModal({
        title: '亲爱的用户',
        content: '昵称不能为空',
        cancelText: '取消',
        confirmText: '确定',
      }); 
    } 
    else if(gouxuan=="") {
      wx.showModal({
        title: '亲爱的用户',
        content: '请勾选用户协议',
        cancelText: '取消',
        confirmText: '确定',
      }); 
    } 
    else {
      AV.User.logIn(username,password).then(function(loginedUser){
        wx.showModal({
          title: '亲爱的用户',
          content: '该账号已注册',
          cancelText: '取消',
          confirmText: '确定',
        }); 
      },function(error){
        const user = new AV.User();
      if(username) user.set({username});
      if(password) user.set({password});
      if(minname) user.set({minname});
      user.save().then(() => {
      wx.redirectTo({
        url: '/pages/start/info/info',
      })
      }).catch(error => {
        wx.showToast({
        title:error.message,
        icon:'none'
        })
      });
      })

      
    }   
  },

  onShow: function(){
    var animation1 = wx.createAnimation({
      duration: 1300,
      timingFunction: 'linear',
    })
    var animation2 = wx.createAnimation({
      duration: 1200,
      timingFunction: 'linear',
    })
    var animation3 = wx.createAnimation({
      duration: 1400,
      timingFunction: 'linear',
    })
    var animation4 = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
    })

    this.animation = animation1
    setTimeout(function() {
      animation1.translate(0,500).step()
      this.setData({
        animationData1:animation1.export()
      })
    }.bind(this), 300)
    this.animation = animation2
    setTimeout(function() {
      animation2.translate(0,100).step()
      this.setData({
        animationData2:animation2.export()
      })
    }.bind(this), 400)
    this.animation = animation3
    setTimeout(function() {
      animation3.translate(0,-200).step()
      this.setData({
        animationData3:animation3.export()
      })
    }.bind(this), 600)
    this.animation = animation4
    setTimeout(function() {
      animation4.translate(0,-350).step()
      this.setData({
        animationData4:animation4.export()
      })
    }.bind(this), 200)
  },
  onShareAppMessage: function () {}
})