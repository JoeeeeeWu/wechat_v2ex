//index.js
//获取应用实例
const util = require('../../utils/util.js');

var app = getApp()
Page({
  data: {
    latestTopics: [],
    hotTopics: [],
  },
  //事件处理函数
  onTouch(e) {
    console.log(e.currentTarget.id);
    wx.navigateTo({
      url: `/pages/post/post?id=${e.currentTarget.id}`,
    });
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://www.v2ex.com/api/topics/latest.json',
      success(res){
        const newRes = res.data.map((item) => {
          item.created = util.formatTime(item.created);
          return item;
        });
        that.setData({
          latestTopics: newRes,
        });
      },
    });
    wx.request({
      url: 'http://www.v2ex.com/api/topics/hot.json',
      success(res) {
        const newRes = res.data.map((item) => {
          item.created = util.formatTime(item.created);
          return item;
        });
        that.setData({
          hotTopics: newRes,
        });
      },
    });
  }
})
