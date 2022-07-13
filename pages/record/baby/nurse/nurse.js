// pages/record/baby/nurse/nurse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    howmuch:'',
    WNList:[],
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

  BackToBaby(){
    wx.switchTab({
      url: '/pages/record/record',
    })
  },
  queding(){
    if(this.data.date=='请选择日期'){
      wx.showModal({
        title: '亲爱的用户',
        content: '未选择日期无法保存',
        cancelText: '取消',
        confirmText: '确定',
      }); 
    } else if(this.data.time=='请选择时间'){
      wx.showModal({
        title: '亲爱的用户',
        content: '未选择时间无法保存',
        cancelText: '取消',
        confirmText: '确定',
      }); 
    } else if(this.data.howmuch==''){
      wx.showModal({
        title: '亲爱的用户',
        content: '未输入喂奶量无法保存',
        cancelText: '取消',
        confirmText: '确定',
      }); 
    } else{
    var that = this
    var WNList = that.data.WNList
    WNList.push({
      date:this.data.date,
      time:that.data.time,
      howmuch:that.data.howmuch
    })
    that.setData({
      WNList: this.data.WNList,
      date:"请输入日期",
      time:"请输入时间",
      howmuch:""
    })
    this.save()
    wx.switchTab({
      url: '/pages/record/record',
    })}
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
    var that=this
    this.setData({
      time: e.detail.value
    })
    this.save()
  },
  bindDateChange(e){
    var that=this
    this.setData({
      date: e.detail.value
    })
    this.save()
  },
  bindPickerChange(e){
    console.log(e);
    this.setData({
      index:e.detail.value
    })
  },
  inputhowmuch:function(e){
    var that = this
    that.setData({
      howmuch: e.detail.value
    })
    this.save()
  },

  nodelete: function (e) {
    this.data.WNList.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      WNList: this.data.WNList
    })
    this.save()
  },

  save:function(){
    wx.setStorageSync('WNList', this.data.WNList)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var WNnolist = wx.getStorageSync('WNList')
    if (WNnolist) {
      this.setData({
        WNList: WNnolist
      })
    }
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