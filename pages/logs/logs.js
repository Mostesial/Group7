// pages/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex:['妈妈','爸爸'],
    babysex:['男孩','女孩'],
    babytime:['32周','33周','34周','35周','36周','37周','38周','39周','40周','41周','42周','43周','44周','45周','46周','47周','48周'],
    index1:0,
    index2:0,
    index3:8,
    date:2022
  },
  // 事件处理函数
  bindPickerChange1(e){
    console.log(e);
    this.setData({
      index1:e.detail.value
    })
  },
  bindPickerChange2(e){
    console.log(e);
    this.setData({
      index2:e.detail.value
    })
  },
  bindDateChange(e){
    console.log(e);
    this.setData({
      date:e.detail.value
    })
  },
  bindPickerChange3(e){
    console.log(e);
    this.setData({
      index3:e.detail.value
    })
  }
})
