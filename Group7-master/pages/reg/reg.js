const app = getApp();
Page({
  data: {
    picker: ['中国大陆', '香港', '澳门','中国台湾'],
    username: '',
    password: '',
    minname: '',
    gouxuan:'',
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
  }
})