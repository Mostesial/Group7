const app = getApp();
Page({
  data: {
    picker: ['中国大陆', '香港', '澳门','中国台湾'],
    username: '',
    password: '',
    minname: '',
    gouxuan:'',
    animationData1: {},
    animationData2: {},
    animationData3: {},
    animationData4: {}
  },
  agreement:function(){
    wx.navigateTo({
      url:"/pages/幼鸟指南用户协议/幼鸟指南用户协议"
    }) 
  },
  checkboxChange:function(e){
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.setData({
      gouxuan:e.detail.value,
    })
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  inputUsername(e) {
    this.setData({
      username: e.detail.value,
    })
  },
  inputPassword(e) {
    this.setData({
      password: e.detail.value,
    })
  },
  inputMinname(e) {
    this.setData({
      minname: e.detail.value,
    })
  },
  register(){
    const {
      username,
      password,
      minname,
      gouxuan,
    } = this.data;
    if(username=="") {
      wx.showToast({
        title:"用户名不能为空",
        icon: 'error',
        mask:true,  
      }); 
    }
    else if(password=="") {
      wx.showToast({
        title:"密码不能为空",
        icon: 'error',
      }); 
    }
    else if(minname=="") {
      wx.showToast({
        title:"昵称不能为空",
        icon: 'error',
        mask:true,  
      }); 
    } 
    else if(gouxuan=="") {
      wx.showToast({
        title:"请勾选用户协议",
        icon: 'error',
        mask:true,  
      }); 
    } 
    else {
      wx.showToast({
        title:"注册成功",
        icon: 'success',
        duration:5000,
        mask:true,
      });
      wx.redirectTo({
        url:"/pages/login/login",
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
})