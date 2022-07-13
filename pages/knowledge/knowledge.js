// pages/knowledge/knowledge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    PageCur:'knowledge',
    number:[1478,588,678,1324,576,1799,588,1478],
    like:[{click:true},{click:true},{click:true},{click:true},{click:true},{click:true},{click:true},{click:true}],
    round:[{click:true},{click:true},{click:true},{click:true},{click:true},{click:true},{click:true},{click:true}],
    // PageCur: 'basics',
    tabs:[
      {
        id:0,
        name:"疾病预防",
        isActive:false
      },
      {
        id:1,
        name:"心理治疗",
        isActive:false
      },
      {
        id:2,
        name:"好物推荐",
        isActive:true
      },
      {
        id:3,
        name:"餐食安排",
        isActive:false
      },
      {
        id:4,
        name:"产后恢复",
        isActive:false
      }
    ]
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

  // NavChange(e) {
  //   this.setData({
  //     PageCur: e.currentTarget.dataset.cur
  //   })
  // },
  likecolorchange1(e){
    let value=this.data.like[0].click;
    let num=this.data.number[0]
    this.setData({
      'like[0].click':!value,
      'number[0]':num+2*value-1
    }),
    console.log(value)
  },
  likecolorchange2(e){
    let value=this.data.like[1].click;
    let num=this.data.number[1]
    this.setData({
      'like[1].click':!value,
      'number[1]':num+2*value-1
    }),
    console.log(value)
  },
  likecolorchange3(e){
    let value=this.data.like[2].click;
    let num=this.data.number[2]
    this.setData({
      'like[2].click':!value,
      'number[2]':num+2*value-1
    }),
    console.log(value)
  }, 
  likecolorchange4(e){
    let value=this.data.like[3].click;
    let num=this.data.number[3]
    this.setData({
      'like[3].click':!value,
      'number[3]':num+2*value-1
    }),
    console.log(value)
  }, 
  likecolorchange5(e){
    let value=this.data.like[4].click;
    let num=this.data.number[4]
    this.setData({
      'like[4].click':!value,
      'number[4]':num+2*value-1
    }),
    console.log(value)
  }, 
  likecolorchange6(e){
    let value=this.data.like[5].click;
    let num=this.data.number[5]
    this.setData({
      'like[5].click':!value,
      'number[5]':num+2*value-1
    }),
    console.log(value)
  }, 
  likecolorchange7(e){
    let value=this.data.like[6].click;
    let num=this.data.number[6]
    this.setData({
      'like[6].click':!value,
      'number[6]':num+2*value-1
    }),
    console.log(value)
  },
  likecolorchange8(e){
    let value=this.data.like[7].click;
    let num=this.data.number[7]
    this.setData({
      'like[7].click':!value,
      'number[7]':num+2*value-1
    }),
    console.log(value)
  },
  colorchange1(e){
    let value=this.data.round[0].click;
    this.setData({
      'round[0].click':!value
    })
    console.log(value)
  },
  colorchange2(e){
    let value=this.data.round[1].click;
    this.setData({
      'round[1].click':!value
    })
    console.log(value)
  },  
  colorchange3(e){
    let value=this.data.round[2].click;
    this.setData({
      'round[2].click':!value
    })
    console.log(value)
  },  
  colorchange4(e){
    let value=this.data.round[3].click;
    this.setData({
      'round[3].click':!value
    })
    console.log(value)
  },  
  colorchange5(e){
    let value=this.data.round[4].click;
    this.setData({
      'round[4].click':!value
    })
    console.log(value)
  },  
  colorchange6(e){
    let value=this.data.round[5].click;
    this.setData({
      'round[5].click':!value
    })
    console.log(value)
  },  
  colorchange7(e){
    let value=this.data.round[6].click;
    this.setData({
      'round[6].click':!value
    })
    console.log(value)
  },  
 colorchange8(e){
    let value=this.data.round[7].click;
    this.setData({
      'round[7].click':!value
    })
    console.log(value)
  },
  ItemChange(e){
    const{index}=e.detail;
    let{tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
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