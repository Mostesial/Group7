// pages/record/baby/nurse/nurse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:"请选择时间",
    date:"请选择日期",
    tabs:[
      {
        id:0,
        name:"母乳喂养",
        isActive:true
      },
      {
        id:1,
        name:"奶粉喂养",
        isActive:false
      },
      {
        id:2,
        name:"混合喂养",
        isActive:false
      }
    ]    
  },

  ItemChange(e){
    const{index}=e.detail;
    let{tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  },

  bindTimeChange(e){
    console.log(e);
    this.setData({
      time:e.detail.value
    })
  },
  bindDateChange(e){
    console.log(e);
    this.setData({
      date:e.detail.value
    })
  },
  bindPickerChange(e){
    console.log(e);
    this.setData({
      index:e.detail.value
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