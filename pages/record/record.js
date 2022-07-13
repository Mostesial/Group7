// pages/record/record.js
import * as echarts from '../../ec-canvas/echarts';
const app = getApp()
var baby_donghua1 = 0 ;
let chart = null;
function initlineChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  var option = {
    dataZoom:[{
      type: 'inside' , 
      throttle: '50',
      minValueSpan: 5,
      start: 1,
      end: 40,
      zoomLock: true,}],
    legend: {
      data: ['体重/kg', '身高/cm', '头围/cm',],
      top: 20,
      left: 'center',
      z:10,
      textStyle:{
        color:"#ffcccc"
      }
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      transitionDuration:2000,
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      confine: true,
      snap:true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data:app.globalData.baby.date,
      axisLabel: {
        color: '#ffcccc'
      }
    },
    yAxis: {
      min: 0,
      max: 120,
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color:'#FFFFFF',
        }
      },
      axisLabel: {
        color: '#ffcccc'
      }
      // show: false
    },
    series: [{
      name: '体重/kg',
      type: 'line',
      smooth: true,
      data:app.globalData.baby.WEIGHT,
      color:'#ff3333',
    }, {
      name: '身高/cm',
      type: 'line',
      smooth: true,
      data:app.globalData.baby.HEIGHT,
      color:'#ffffff',
    }, {
      name: '头围/cm',
      type: 'line',
      smooth: true,
      data:app.globalData.baby.TOUWEI,
      color:'#ffcccc',
    }],
};
chart.setOption(option);
return chart;
}

function initpieChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '今日',
      subtext:'喂奶量',
      x: 'center',
      y: '34',
      textStyle: {
        color: '#333366',
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily:"微软黑雅"
      },
      subtextStyle: {
        color: '#333366',
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily:"微软黑雅"
      },
    },
    series: [{
      label: {
        normal: {
          fontSize: 14,
          show:false
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['70%', '85%'],
      data: [{
        value: app.globalData.baby.wnliang,
        itemStyle:{
          color:'#ffffff',
        }
      },{
        value: app.globalData.baby.wnliangmore,
        itemStyle:{
          color:'#333366',
        }
      }, ]
    }]
  };

  chart.setOption(option);
  return chart;
}

function initbarChartmom(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    tooltip: {
      show: true,
      transitionDuration:2000,
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      confine: true,
      snap:true,
    },
 
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    xAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#fffff'
          }
        },
        axisLabel: {
          color: '#ffcccc'
        }
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: { show: false},
        data: app.globalData.mom.smdate,
        axisLine: {
          lineStyle: {
            color:'#ffffff'
          }
        },
        axisLabel: {
          color: '#ffcccc'
        }
      }
    ],
    series: [
      {
        name: '时长/h',
        type: 'bar',
        label: {
          normal: {
            show: false,
            position: 'inside'
          }
        },
        data:app.globalData.mom.smtime,
        itemStyle: {
           color:'#ffcccc',
           emphasis: {
           color: '#ff3333'
           }
        }
      },
    ]
  };

  chart.setOption(option);
  return chart;
}
function initbarChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    tooltip: {
      show: true,
      transitionDuration:2000,
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      confine: true,
      snap:true,
    },
 
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    xAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#fffff'
          }
        },
        axisLabel: {
          color: '#ffcccc'
        }
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: { show: false},
        data: ['总睡眠时长', '睡眠次数', '最长连续睡眠时间', ],
        axisLine: {
          lineStyle: {
            color: '#ffffff'
          }
        },
        axisLabel: {
          color: '#ffcccc'
        }
      }
    ],
    series: [
      {
        name: '时长/h',
        type: 'bar',
        label: {
          normal: {
            show: false,
            position: 'inside'
          }
        },
        data: [app.globalData.baby.smtotaltime,app.globalData.baby.smtimes,app.globalData.baby.smlongtime],
        itemStyle: {
           color:'#ffcccc',
           emphasis: {
           color: '#ff3333'
           }
        }
      },
    ]
  };

  chart.setOption(option);
  return chart;
}

function initradarChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    tooltip:{//显示悬浮框
      confine:true, //是否将 tooltip 框限制在图表的区域内
      borderColor:"#ffffff",  //边框颜色
      showContent:true, //是否显示提示框浮层
      position: 'top' //悬浮框显示在鼠标上方
    },
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    radar: {
      // shape: 'circle',
      indicator: [{
        name: '睡眠时长',
        color:'#ffcccc',
        max: 100
      },
      {
        name: '深睡眠比例',
        color:'#ffcccc',
        max: 100
      },
      {
        name: 'REM睡眠比例',
        color:'#ffcccc',
        max: 100
      },
      {
        name: '深睡眠连续度',
        color:'#ffcccc',
        max: 100
      },
      {
        name: '睡眠质量',
        color:'#ffcccc',
        max: 100
      },
      {
        name: '本周睡眠分数',
        color:'#ffcccc',
        max: 100
      }
      ],
      radius:45,//缩放
      
    },
    series: [{
      name: '睡眠',
      type: 'radar',
      color:'#ff3333',
      data: [{
        value: [80, 50, 30, 80, 80, 88],
      }]
    }]
  };

  chart.setOption(option);
  return chart;
}

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    dataZoom:[{
      type: 'inside' , 
      throttle: '50',
      minValueSpan: 5,
      start: 1,
      end: 40,
      zoomLock: true,}],
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {// 坐标轴指示器，坐标轴触发有效
         type: 'shadow'// 默认为直线，可选为：'line' | 'shadow'
      },
      confine: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: app.globalData.mom.date,
      axisLabel: {
        color: '#333366' //横坐标数字颜色
      }
    },
    yAxis: {
      min: 0,
      max: 150,
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color:'#FFFFFF',
        }
      },
      axisLabel: {
        color: '#333366' //纵坐标数字颜色
      }
      // show: false
    },
    series: [{ //折线
      name: '体重/斤',
      type: 'line',
      smooth: true,
      data:app.globalData.mom.WEIGHT,
      color:'#ff3333',
      label:{ //显示折线上的数字
        show:true,
        //这样写适合柱状图的数字显示在内部
        // position:'inside', 
        color:'#333366',
      },
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'',
    time:'',
    showcolor:'',
    showstate:'',
    yjdate:'',
    wntime:'',
    wnliang:'',
    BSList:[],
    MSList:[],
    BBList:[],
    yuejingList:[],
    WNList:[],
    url:'',
    PageCur:'record',
    tabs:[
      {
        id:0,
        name:"宝宝记录",
        isActive:true
      },
      {
        id:1,
        name:"妈妈记录",
        isActive:false
      }
    ],
    ecbarmom: {
      onInit: initbarChartmom,
    },
    ecbar: {
      onInit: initbarChart
    },
    ecline: {
      onInit: initlineChart
    },
    ecpie: {
      onInit: initpieChart
    },
    ec: {
      onInit: initChart
    },
    ecradar: {
      onInit: initradarChart
    },
    day:'0',
    date2:'',
    yjday:'',
    daysm:'',
    daywn:'',
    timewn:'',
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

  ItemChange(e){
    const{index}=e.detail;
    let{tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  },

  onReady() {
    setTimeout(function () {
      // 获取 chart 实例的方式
      // console.log(chart)
    }, 0);
  },
  sliderChanging(){

  },
  gotoszjl() {
    wx.redirectTo({
    url:"/pages/record/baby/grow/grow",
  })},
  gotown() {
    wx.redirectTo({
    url:"/pages/record/baby/nurse/nurse",
  })},
  gotosm() {
    wx.redirectTo({
    url:"/pages/record/baby/sleep/sleep",
  })},  
  gotobb() {
    wx.redirectTo({
    url:"/pages/record/baby/excrete/excrete",
  })},

  gotojqjl() { wx.redirectTo({
    url:"/pages/record/mom/yuejing/yuejing",
  })},
  gotoxqrj() { wx.redirectTo({
    url:"/pages/record/mom/mood/mood",
  })},
  gotosmm() { wx.redirectTo({
    url:"/pages/record/mom/sleep/sleep",
  })},  
  gototz() { wx.redirectTo({
    url:"/pages/record/mom/weight/weight",
  })},

  getdate(){
    var myDate=new Date()
    var date3=myDate.getFullYear();    //获取完整的年份(4位,1970-????)
    var date4=myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)
    var date5=myDate.getDate();        //获取当前日(1-31)
    var date2=date3+'-'+date4+'-'+date5//组合当前年月日例如2020-12-20
    wx.setStorageSync('今天日期', date2)
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
    wx.setStorageSync('出生天数', this.data.day)
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getdate()
    var birthday= wx.getStorageSync('birthday')
    var date2=wx.getStorageSync('今天日期')
    this.checkDate(birthday,date2)
    var ValueList1 = wx.getStorageSync('ValueList1')
    var ValueList2 = wx.getStorageSync('ValueList2')
    var ValueList3 = wx.getStorageSync('ValueList3')
    var ValueList4 = wx.getStorageSync('ValueList4')
    var ValueList5 = wx.getStorageSync('ValueList5')
    var ValueList6 = wx.getStorageSync('ValueList6')
    var Mood= wx.getStorageSync('Mood')
    var i=0
    var j=0
    while(i<ValueList1.length){
      app.globalData.baby.HEIGHT[i]=ValueList1[i].HEIGHT
      app.globalData.baby.WEIGHT[i]=ValueList2[i].WEIGHT
      app.globalData.baby.TOUWEI[i]=ValueList3[i].TOUWEI
      app.globalData.baby.date[i]=ValueList4[i].date
      i++}
    while(j<ValueList5.length){
      app.globalData.mom.WEIGHT[j]=ValueList5[j].WEIGHT
      app.globalData.mom.date[j]=ValueList6[j].date
      j++}
      app.globalData.mom.mood=Mood
      app.globalData.baby.birthday=birthday
      app.globalData.baby.chushengday=wx.getStorageSync('出生天数')
        console.log('用户宝宝的身高数据为：'+app.globalData.baby.HEIGHT)
        console.log('用户宝宝的体重数据为：'+app.globalData.baby.WEIGHT)
        console.log('用户宝宝的头围数据为：'+app.globalData.baby.TOUWEI)
        console.log('数据的记录时间为：'+app.globalData.baby.date)
        console.log('用户妈妈的体重数据为：'+app.globalData.mom.WEIGHT)
        console.log('数据记录时间为：'+app.globalData.mom.date)
        console.log('用户妈妈的心情是：'+app.globalData.mom.mood)
        console.log('用户宝宝的出生天数：'+app.globalData.baby.chushengday)
    if(app.globalData.mom.mood=='非常棒'){
      this.setData({
        url:'https://s1.ax1x.com/2022/07/06/ja3bq0.png' 
      })}
      else if(app.globalData.mom.mood=='愉悦'){
        this.setData({
          url: "https://s1.ax1x.com/2022/07/06/ja8Cs1.png" ,
      })}
      else if(app.globalData.mom.mood=='平静'){
        this.setData({
          url: "https://s1.ax1x.com/2022/07/06/ja8ViD.png" ,
      })}
      else if(app.globalData.mom.mood=='累'){
        this.setData({
          url: "https://s1.ax1x.com/2022/07/06/ja8mzd.png" ,
      })}
      else if(app.globalData.mom.mood=='忧郁'){
        this.setData({
          url: "https://s1.ax1x.com/2022/07/06/ja8leP.png" ,
      })}
      else if(app.globalData.mom.mood=='困觉'){
        this.setData({
            url: "https://s1.ax1x.com/2022/07/06/ja8GFS.png" ,
      })}
      else if(app.globalData.mom.mood=='快哭了'){
        this.setData({
            url: "https://s1.ax1x.com/2022/07/06/ja8tzj.png" ,
        })}
      else if(app.globalData.mom.mood=='好气哦'){
          this.setData({
            url: "https://s1.ax1x.com/2022/07/06/ja8dLq.png" ,
      })}
      else if(app.globalData.mom.mood=='生气'){
        this.setData({
            url: "https://s1.ax1x.com/2022/07/06/ja8RyR.png" ,
        })}
    //便便记录
    var nolist = wx.getStorageSync('BBList')
    if (nolist) {
      this.setData({
        BBList: nolist
      })
    }
    //月经记录
    var yjnolist = wx.getStorageSync('yuejingList')
    if (yjnolist) {
      this.setData({
        yuejingList: yjnolist,
        yjdate:yjnolist[yjnolist.length-1].date,
      })
      var date1=this.data.yjdate
      this.CountDate(date1)
    }
    //喂奶记录
    var today=wx.getStorageSync('今天日期')
    app.globalData.today=today
    var wnnolist = wx.getStorageSync('WNList')
    if (wnnolist) {
      this.setData({
        WNList:wnnolist,
        wntime:wnnolist[0].time
      })
      var i=0
      var j=0
      var k=0
      while(j<wnnolist.length){
        app.globalData.baby.wndate[j]=wnnolist[j].date
        app.globalData.baby.wntime[j]=wnnolist[j].time
        app.globalData.baby.wnmuch[j]=wnnolist[j].howmuch
        j++
      }
      app.globalData.baby.wnliang=0
      var zongliang = 0
      while(i<wnnolist.length){
        var day1=app.globalData.baby.wndate[i]
        var day2=app.globalData.today
        this.checkDate2(day1,day2)
        if(this.data.daywn==0){
          var zongliang=zongliang*1+app.globalData.baby.wnmuch[i]*1
          this.setData({
            wnliang:zongliang+'ml'
          })
          app.globalData.baby.wnliang=zongliang
          if(app.globalData.baby.chushengday<=60){
            app.globalData.baby.wnliangmore=720-app.globalData.baby.wnliang
          } else if(app.globalData.baby.wnliangmore<=180){
            app.globalData.baby.wnliangmore=1000-app.globalData.baby.wnliang
          } else if(app.globalData.baby.wnliangmore<=270){
            app.globalData.baby.wnliangmore=750-app.globalData.baby.wnliang
          } else if(app.globalData.baby.wnliangmore<=360){
            app.globalData.baby.wnliangmore=500-app.globalData.baby.wnliang
          }
        }
        i++
      }
      var shijian=this.data.wntime
      while(k<wnnolist.length){
        var day1=app.globalData.baby.wndate[k]
        var day2=app.globalData.today
        this.checkDate2(day1,day2)
        if(this.data.daywn==0){
          var time1="2022-7-10 "+shijian
          var time2="2022-7-10 "+app.globalData.baby.wntime[k]
          this.CheckTime(time1,time2)
          if(this.data.timewn>0){
            var shijian=app.globalData.baby.wntime[k]
            this.setData({
              wntime:shijian
            })
          }
        }
        k++
      }
    }
    //宝宝睡眠
    var today=wx.getStorageSync('今天日期')
    app.globalData.today=today
    var bsnolist = wx.getStorageSync('BSList')
    if (bsnolist) {
      this.setData({
        BSList: bsnolist,
      })
      var i=0
      var j=0
      while(j<bsnolist.length){
        app.globalData.baby.smdate[j]=bsnolist[j].date
        app.globalData.baby.smtime1[j]=bsnolist[j].time1
        app.globalData.baby.smtime2[j]=bsnolist[j].time2
        j++
      }
      var cnt=0
      app.globalData.baby.smlongtime=0
      app.globalData.baby.smtotaltime=0
      while(i<bsnolist.length){
        var day1=app.globalData.baby.smdate[i]
        var day2=app.globalData.today
        this.checkDate1(day1,day2)
        if(this.data.daysm==0){
          var cnt=cnt*1+1
          var stime1="2022-7-10 "+app.globalData.baby.smtime1[i]
          var stime2="2022-7-10 "+app.globalData.baby.smtime2[i] 
          let smtime1 = new Date(stime1.replace(/-/g, "/"));
          let smtime2 = new Date(stime2.replace(/-/g, "/"));
          var hour = parseInt((smtime2.getTime() - smtime1.getTime()) / (1000 * 60 * 60 ));
          var longtime=app.globalData.baby.smlongtime
          if(longtime<hour){
            longtime=hour
          }
          app.globalData.baby.smlongtime=longtime
          
          var totaltime=app.globalData.baby.smtotaltime
          var totaltime=totaltime*1+hour*1
          app.globalData.baby.smtotaltime=totaltime
          this.setData({
            smtime:totaltime
           })
        }
        i++
      }
      app.globalData.baby.smtimes=cnt
    }
    
    //妈妈睡眠
    var msnolist = wx.getStorageSync('MSList')
    if (msnolist) {
      this.setData({
        MSList: msnolist
      })
      var i=msnolist.length-1
      app.globalData.mom.smdate[0]=msnolist[i].date
      app.globalData.mom.smtime[0]=msnolist[i].time
      app.globalData.mom.smdate[1]=msnolist[i-1].date
      app.globalData.mom.smtime[1]=msnolist[i-1].time
      app.globalData.mom.smdate[2]=msnolist[i-2].date
      app.globalData.mom.smtime[2]=msnolist[i-2].time
      app.globalData.mom.smdate[3]=msnolist[i-3].date
      app.globalData.mom.smtime[3]=msnolist[i-3].time
    }
  },

  checkDate1: function(startTime,endTime) {
    //日期格式化
    var start_date = new Date(startTime.replace(/-/g, "/"));
    var end_date = new Date(endTime.replace(/-/g, "/"));
    //转成毫秒数，两个日期相减
    var ms = end_date.getTime() - start_date.getTime();
    //转换成天数
    var day = parseInt(ms / (1000 * 60 * 60 * 24));
    this.setData({
     daysm:day
    })
  },
  checkDate2: function(startTime,endTime) {
    //日期格式化
    var start_date = new Date(startTime.replace(/-/g, "/"));
    var end_date = new Date(endTime.replace(/-/g, "/"));
    //转成毫秒数，两个日期相减
    var ms = end_date.getTime() - start_date.getTime();
    //转换成天数
    var day = parseInt(ms / (1000 * 60 * 60 * 24));
    this.setData({
      daywn:day
    })
  },
  CheckTime: function(startTime,endTime) {
    //日期格式化
    var start_date = new Date(startTime.replace(/-/g, "/"));
    var end_date = new Date(endTime.replace(/-/g, "/"));
    //转成毫秒数，两个日期相减
    var ms = end_date.getTime() - start_date.getTime();
    //转换成天数
    var time = parseInt(ms / (1000 * 60 ));
    this.setData({
      timewn:time
    })
  },
  CountDate:function(startTime){
    //日期格式化
    let date = new Date(startTime);
    var year = date.getFullYear()
    var month = date.getMonth()+1
    var day = date.getDate()
    var day1 = day+29
    if((month==2)&&(day1>28)){
      var day2 = day1-28
      var month1 = month+1
    } else if(((month==1)||(month==3)||(month==5)||(month==7)||(month==8)||(month==10)||(month==12))&&(day1>=32)){
      var day2 = day1-31
      var month1 = month+1
    } else if(((month==4)||(month==6)||(month==9)||(month==11))&&(day1>=31)){
      var day2 = day1-30
      var month1 = month+1
    } else{
      var day2 = day1
      var month1 = month
    }
    if(month1>=13){
      var month2 = month1-12
      var year1 = year+1
    } else{
      var month2 = month1
      var year1 = year
    }
    if(month2<=9&&day2>=10){
      var date1 = year1+'-0'+month2+'-'+day2
    } else if(month2>=10&&day2<=9){
      var date1 = year1+'-'+month2+'-0'+day2
    } else if(month2<=9&&day2<=9){
      var date1 = year1+'-0'+month2+'-0'+day2
    } else{
      var date1 = year1+'-'+month2+'-'+day2
    }
    this.setData({
      yjday:date1
    })
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

  },

  //以下是动画
  //===================================================
  baby_donghua1: function(e){
    var flag = this.data.baby_donghua1
    flag = !flag
    this.setData({
      baby_donghua1 : flag
    })
    console.log(flag)
  }
})