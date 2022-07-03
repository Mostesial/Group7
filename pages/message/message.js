// pages/message/message.js
Page(
  {
    data:{
      message:''
    },

    onLoad:function(options){
       this.setData({
         message:options.message,
       })
    },
  }
)