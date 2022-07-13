// pages/record/baby/excrete/excrete.js
const app = getApp();
Page({
  data: {
    time: '请选择时间',
    date: '请选择日期',
    TabCur: 0,
    TabCur1:0,
    scrollLeft:0,
    BBList:[],
    showcolor:'棕黄色',
    showstate:'水样',
    neirong0:'宝宝的便便颜色偶有变化属于正常情况，家长不用特别担心。',
    neirong:" 宝宝便便水样要注意，可能是受凉了，也有可能吃了脏东西;母乳喂养的宝宝,妈妈若吃了冰冷的东西,辛辣或是刺激性食物!甚至有些妈妈吃了海产品,也可能出现这种情况"
  },

  onLoad: function (options) {
    var bbnolist = wx.getStorageSync('BBList')
    if (bbnolist) {
      this.setData({
        BBList: bbnolist
      })
    }
  },

  TimeChange(e) {
    var that=this
    this.setData({
      time: e.detail.value
    })
    this.save()
  },
  DateChange(e) {
    var that=this
    this.setData({
      date: e.detail.value
    })
    this.save()
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60,
    })
    var that = this
    if(e.currentTarget.dataset.id==0){
      this.setData({
        showcolor:'棕黄色',
        neirong0:'宝宝的便便颜色偶有变化属于正常情况，家长不用特别担心。',
      })
      this.save()
    }
    else if(e.currentTarget.dataset.id==1){
      this.setData({
        showcolor:'黄色',
        neirong0:'宝宝的便便颜色偶有变化属于正常情况，家长不用特别担心。',
      })
      this.save()
    }
    else if(e.currentTarget.dataset.id==2){
      this.setData({
        showcolor:'黑色',
        neirong0:'宝宝的便便颜色偶有变化属于正常情况，家长不用特别担心。',
      })
      this.save()
    }
    else if(e.currentTarget.dataset.id==3){
      this.setData({
        showcolor:'灰白色',
        neirong0:'便便颜色呈灰色，如果伴随呕吐、腹胀、黄疸、发热等不适情况，需带宝宝到医院儿科就诊。'
      })
      this.save()
    }
    else if(e.currentTarget.dataset.id==4){
      this.setData({
        showcolor:'墨绿色',
        neirong0:'性状正常的绿色大便大多是正常的，是由于肠道蠕动加快，肠道胆绿素来不及作用即随大便排出而造成的。宝宝若无呕吐、腹泻等不适症状，则不需要特别处理。'
      })
      this.save()
    }
    else if(e.currentTarget.dataset.id==5){
      this.setData({
        showcolor:'红色',
        neirong0:'红色便便需警惕，可能吃了较多含红色素的食物（如红心火龙果）。如排除食物色素影响，反复血便，则需去医院就诊。'
      })
      this.save()
    }
  },
  tabSelect1(e) {
    this.setData({
      TabCur1: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60,
    })
    var that = this
    if(e.currentTarget.dataset.id==0){
      this.setData({
        showstate:'水样',
        neirong:'宝宝便便水样要注意，可能是受凉了，也有可能吃了脏东西；母乳喂养的宝宝，妈妈若吃了冰冷的东西，辛辣或是刺激性食物！甚至有些妈妈吃了海产品，也可能出现这种情况。'
      })
      this.save()
    }
    else if(e.currentTarget.dataset.id==1){
      this.setData({
        showstate:'很稀',
        neirong:'宝宝的便便质地偶有变化属于正常情况，家长不用特别担心。',
      })
      this.save()
    }
    else if(e.currentTarget.dataset.id==2){
      this.setData({
        showstate:'粘稠',
        neirong:'宝宝的便便质地偶有变化属于正常情况，家长不用特别担心。',
      })
      this.save()
    }
    else if(e.currentTarget.dataset.id==3){
      this.setData({
        showstate:'一般',
        neirong:'宝宝的便便质地偶有变化属于正常情况，家长不用特别担心。'
      })
      this.save()
    }
    else if(e.currentTarget.dataset.id==4){
      this.setData({
        showstate:'较干',
        neirong:'宝宝的便便质地偶有变化属于正常情况，家长不用特别担心。'
      })
      this.save()
    }
    else if(e.currentTarget.dataset.id==5){
      this.setData({
        showstate:'干硬',
        neirong:'宝宝便便干硬，大多与纤维素类食物及水分摄入过少相关，家长可以多给宝宝摄入苹果、梨、麦片、蔬菜等纤维素丰富的食物和水果，同时每日多饮水来帮助促进排便。'
      })
      this.save()
    }
  },
  nodelete: function (e) {
    this.data.BBList.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      BBList: this.data.BBList
    })
    this.save()
  },
  save:function(){
    wx.setStorageSync('BBList', this.data.BBList)
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
    } else{
    var that = this
    var BBList = that.data.BBList
    BBList.push({
      date:that.data.date,
      time:that.data.time,
      showcolor:that.data.showcolor,
      showstate:that.data.showstate
    })
    that.setData({
      BBList: this.data.BBList,
      date:"",
      time:"",
      showcolor:"",
      showstate:""
    })
    this.save()
    wx.switchTab({
      url: '/pages/record/record',
    })}
  },
  onShareAppMessage() {

  }
})