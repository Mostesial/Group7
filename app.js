// app.js
const AV = require('./libs/av-core-min');
const adapters =require('./libs/leancloud-adapters-weapp');

AV.setAdapters(adapters);
AV.init({
  appId:'PJrrQIu27LlQXAmuMj76zXjA-gzGzoHsz',
  appKey:'QlfeNVE1JUwAyQTuCd7RFc89',
  serverURLs:'https://pjrrqiu2.lc-cn-n1-shared.com',
});

App({
  today:'',
  globalData:{
    user:{
    username: '',
    password: '',
    minname: '',
  },
  baby:{
    HEIGHT:[],
    WEIGHT:[],
    TOUWEI:[],
    date:[],
    smdate:[],
    smtime1:[],
    smtime2:[],
    smlongtime:'',
    smtimes:'',
    smtotaltime:'',
    birthday:'',
    wndate:[],
    wntime:[],
    wnmuch:[],
    wnliang:'',
    wnliangmore:100
    },
  mom:{
    smdate:[],
    smtime:[],
    WEIGHT:[],
    date:[],
    mood:'',
    },
}})