// pages/remind/remind.js
Page({
  data: {
    items: [
      {name:'0', value: ' 卡介苗 (第1/1剂)', time:'出生'},
      {name:'1', value: ' 乙肝疫苗 (第1/3剂)', time:'0'},
      {name:'2', value: ' 乙肝疫苗 (第2/3剂)', time:'1月龄'},
      {name:'3', value: ' 脊髓灰质炎疫苗 (第1/4剂)', time:'2月龄'},
      {name:'4', value: ' 脊髓灰质炎疫苗 (第2/4剂)', time:'3月龄'},
      {name:'5', value: ' 百白破疫苗 (第1/4剂)', time:'0'},
      {name:'6', value: ' 脊髓灰质炎疫苗 (第3/4剂)', time:'4月龄'},
      {name:'7', value: ' 百白破疫苗 (第2/4剂)', time:'0'},
      {name:'8', value: ' 百白破疫苗 (第3/4剂)', time:'5月龄'},
      {name:'9', value: ' 乙肝疫苗 (第3/3剂)', time:'6月龄'},
      {name:'10', value: ' A群流脑疫苗 (第1/2剂)', time:'0'},
      {name:'11', value: ' 麻腮风疫苗 (第1/2剂)', time:'8月龄'},
      {name:'12', value: ' 乙脑疫苗 (第1/2剂)', time:'0'},
      {name:'13', value: ' A群流脑疫苗 (第2/2剂)', time:'9月龄'},
      {name:'14', value: ' 百白破疫苗 (第4/4剂)', time:'18月龄'},
      {name:'15', value: ' 麻腮风疫苗 (第2/2剂)', time:'0'},
      {name:'16', value: ' 甲肝疫苗 (第1/1剂)', time:'0'},
      {name:'17', value: ' 乙脑疫苗 (第2/2剂)', time:'2周岁'},
      {name:'18', value: ' A+C群流脑疫苗 (第1/2剂)', time:'3周岁'},
      {name:'19', value: ' 脊髓灰质炎疫苗 (第4/4剂)', time:'4周岁'},
      {name:'20', value: ' A+C群流脑疫苗 (第2/2剂)', time:'6周岁'},
      {name:'21', value: ' 白破疫苗 (第1/1剂)', time:'0'},
    ],
    PageCur:'remind',
    check: 0, //用check表示该事项是否完成，0表示未完成，默认未完成
    date: '',
    when: '', 
    where:'',
    what:'',
    ValueList: [],
    yimiaoList: [],
  },
  
  //完成事件打勾
  done: function(e){
    var index = e.currentTarget.dataset.index
    var ValueList = this.data.ValueList
    this.data.ValueList[index].check = !this.data.ValueList[index].check
    this.setData({
        ValueList: this.data.ValueList
    })
    this.save()
  },

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    var i = 0,j = 0
    for(i=0;i<this.data.items.length;i++){ //注意e.detail.value的值和点击顺序有关，所以要遍历
        for(j=0;j<e.detail.value.length;j++){
            if(i==e.detail.value[j])break
        }
        if(j==e.detail.value.length)this.data.yimiaoList[i]=0
        else this.data.yimiaoList[i]=1
    }
    wx.setStorageSync('yimiaoList',this.data.yimiaoList)
  },

    // 点击删除
    nodelete: function (e) {
        this.data.ValueList.splice(e.currentTarget.dataset.index, 1)
        this.setData({
        ValueList: this.data.ValueList
        })
        this.save()
    },

    //存储
    save:function(){
        wx.setStorageSync('ValueList', this.data.ValueList)
    },

    //初始化
    onLoad: function (options) {
      var nolist = wx.getStorageSync('ValueList')
      var yimiaolist = wx.getStorageSync('yimiaoList')//获取“已接种疫苗”储存数组
    if (nolist) {
      this.setData({
        ValueList: nolist
      })
    }
    if (yimiaolist) {
        this.setData({
          yimiaoList: yimiaolist
        })
      }
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

    //生命周期函数--监听页面初次渲染完成
    onReady: function () {},

    //生命周期函数--监听页面显示
    onShow: function () {},

    //生命周期函数--监听页面隐藏
    onHide: function () {},

    //生命周期函数--监听页面卸载
    onUnload: function () {},

    //页面相关事件处理函数--监听用户下拉动作
    onPullDownRefresh: function () {},

    //页面上拉触底事件的处理函数
    onReachBottom: function () {},

    //用户点击右上角分享
    onShareAppMessage: function () {},
    
    todo(e){
      wx.redirectTo({
        url: '/pages/remind/todo/todo',
      })
    }
})
