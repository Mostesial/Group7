// pages/Memore/name/name.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    babysex:['男孩','女孩'],
    index:0,
    date:"请输入宝宝出生日期",
    time:"请输入具体出生时间",
  },

  bindPickerChange(e){
    console.log(e);
    this.setData({
      index1:e.detail.value
    })
  },
  bindDateChange(e){
    console.log(e);
    this.setData({
      date:e.detail.value
    })
  },
  bindTimeChange(e){
    console.log(e);
    this.setData({
      time:e.detail.value
    })
  },


  ClickButton:function(e){
    wx.redirectTo({
      url: '../zhaohui/zhaohui',
    })
  },

  BackToMe(){
    wx.switchTab({
      url: '/pages/me/me',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})