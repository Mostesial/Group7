// pages/Milk/Milk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:"09:21",
    date:"2022-11-08",
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
  }
})