const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    index1: null,
    index2:null,
    picker1: ['不提醒', '开始前一小时', '开始前三十分钟','开始前二十分钟','开始前十分钟','开始前五分钟'],
    picker2: ['重复','不重复'],
    picker3: ['妈妈','宝宝','妈妈和宝宝','其他'],
    multiIndex: [0, 0, 0],
    time1: '00:00',
    time2: '24:00',
    date: '2022-07-02',
    region: ['广东省', '广州市', '海珠区'],
    imgList: [],
    modalName: null,
    textareaAValue: '',
    textareaBValue: ''
  },
  PickerChange1(e) {
    console.log(e);
    this.setData({
      index1: e.detail.value
    })
  },
  PickerChange2(e) {
    console.log(e);
    this.setData({
      index2: e.detail.value
    })
  },

  PickerChange3(e) {
    console.log(e);
    this.setData({
      index3: e.detail.value
    })
  },
  
  TimeChange1(e) {
    this.setData({
      time1: e.detail.value
    })
  },
  TimeChange2(e) {
    this.setData({
      time2: e.detail.value
    })
  },

  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  
})