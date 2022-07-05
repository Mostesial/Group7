const app = getApp();
Page({
  data: {
    HEIGHT:'',
    WEIGHT:'',
    TOUWEI:'',
    index: null,
    date: '请选择日期',
    imgList: [],
  },
  inputHeight(e) {
    this.setData({
      HEIGHT: e.detail.value,
    })
  },
  inputWeight(e) {
    this.setData({
      WEIGHT: e.detail.value,
    })
  },
  inputTouwei(e) {
    this.setData({
      TOUWEI: e.detail.value,
    })
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  DelImg(e) {
    wx.showModal({
      title: '亲爱的用户',
      content: '确定要删除这张图片？',
      cancelText: '再看看',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  queding(){
    wx.redirectTo({
      url:"/pages/record2/record2",
    })
  },
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },   
})