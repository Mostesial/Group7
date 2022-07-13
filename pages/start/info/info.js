// logs.js
const AV = require('../../../libs/av-core-min');
const Identity = require('../../../model/info');

const app = getApp()
Page({
  data: {
    myidentity:'妈妈',
    babyidentity:'男孩',
    babyweek:'40周',
    sex:['妈妈','爸爸'],
    babysex:['男孩','女孩'],
    babytime:['32周','33周','34周','35周','36周','37周','38周','39周','40周','41周','42周','43周','44周','45周','46周','47周','48周'],
    index1:0,
    index2:0,
    index3:8,
    week:0,
    date:'',
    date2:'',
    day:'',
    animationData1: {},
    animationData2: {},
    animationData3: {},
    animationData4: {},
  },
  // 事件处理函数
  bindPickerChange1(e){
    console.log(e);
    this.setData({
      index1:e.detail.value,
      myidentity:e.detail.value==0?'妈妈':'爸爸',
    })
  },
  bindPickerChange2(e){
    console.log(e);
    this.setData({
      index2:e.detail.value,
      babyidentity:e.detail.value==0?'男孩':'女孩',
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
      index3:e.detail.value,
      babyweek:e.detail.value*1+32+'周',
    })
  },
  enter(e){
    this.getdate()
    if(app.globalData.baby.chushengday<0){
      wx.showModal({
        title: '亲爱的用户',
        content: '宝宝的生日不能是今天之后哦',
        cancelText: '取消',
        confirmText: '确定',
      }); 
    } else{
    new Identity({
      myidentity:this.data.myidentity,
      babyidentity:this.data.babyidentity,
      babybirth:this.data.date,
      babyweek:this.data.babyweek,
    }).save().
    then(() => {
      wx.switchTab({
        url: '/pages/record/record',
      })
    }).catch(error => {
      wx.showToast({
        title:error.message,
        icon:'none'
      })
    });
  }
  },
    getdate(){
      var myDate=new Date()
      var date3=myDate.getFullYear();    //获取完整的年份(4位,1970-????)
      var date4=myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)
      var date5=myDate.getDate();        //获取当前日(1-31)
      var date2=date3+'-'+date4+'-'+date5//组合当前年月日例如2020-12-20
      this.setData({dade2:date2})
       wx.setStorageSync('今天日期', date2)
      var date1=this.data.date//获取生日2020-10-23
      this.checkDate(date1,date2)//计算天数差
      this.save()
    }, 
    checkDate: function(startTime,endTime) {
      //日期格式化
      var start_date = new Date(startTime.replace(/-/g, "/"));
      var end_date = new Date(endTime.replace(/-/g, "/"));
      //转成毫秒数，两个日期相减
      var ms = end_date.getTime() - start_date.getTime();
      //转换成天数
      var day = parseInt(ms / (1000 * 60 * 60 * 24));
      this.setData({
       day:day
      })
      console.log("day = ", this.data.day);
  },
    save(){
    wx.setStorageSync('出生天数', this.data.day)
    wx.setStorageSync('birthday', this.data.date)
    app.globalData.baby.chushengday= this.data.day
  },
  onLoad(options) {
    this.getdate()
    var today=wx.getStorageSync('今天日期')
    this.setData({
      date:today
    })
  },
  onShow: function(){
    var animation1 = wx.createAnimation({
      duration: 1300,
      timingFunction: 'linear',
    })
    var animation2 = wx.createAnimation({
      duration: 1200,
      timingFunction: 'linear',
    })
    var animation3 = wx.createAnimation({
      duration: 1400,
      timingFunction: 'linear',
    })
    var animation4 = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
    })

    this.animation = animation1
    setTimeout(function() {
      animation1.translate(0,500).step()
      this.setData({
        animationData1:animation1.export()
      })
    }.bind(this), 300)
    this.animation = animation2
    setTimeout(function() {
      animation2.translate(0,100).step()
      this.setData({
        animationData2:animation2.export()
      })
    }.bind(this), 400)
    this.animation = animation3
    setTimeout(function() {
      animation3.translate(0,-200).step()
      this.setData({
        animationData3:animation3.export()
      })
    }.bind(this), 600)
    this.animation = animation4
    setTimeout(function() {
      animation4.translate(0,-350).step()
      this.setData({
        animationData4:animation4.export()
      })
    }.bind(this), 200)
  },
  onShareAppMessage: function () {}
})
