Page({
  data: {
    TabCur: 0,
    scrollLeft:0,
  },

  gotoszjl() { wx.redirectTo({
    url:"/pages/record1/record1",
  })},
  gotown() { wx.redirectTo({
    url:"/pages/record1/record1",
  })},
  gotoszjl() { wx.redirectTo({
    url:"/pages/record1/record1",
  })},  
  gotobb() { wx.redirectTo({
    url:"/pages/record2/record",
  })},
  tabSelect(e) {
    const{
      TabCur,
    }=this.data
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60,
    })
    if(TabCur=='1')
    { wx.redirectTo({
      url:"/pages/test2/test2",
    })}
    else wx.redirectTo({
      url:"/pages/test2/test2",
    })
  },

  
})