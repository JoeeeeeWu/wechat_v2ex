// pages/post/post.js
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    post: {},
    comments: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    wx.request({
      url: `https://www.v2ex.com/api/topics/show.json?id=${options.id}`,
      success(res){
        res.data[0].created = util.formatTime(res.data[0].created);
        that.setData({
          post: res.data[0],
        });
      },
    });
    wx.request({
      url: `https://www.v2ex.com/api/replies/show.json?topic_id=${options.id}`,
      success(res){
        const newRes = res.data.map((item) => {
          item.created = util.formatTime(item.created);
          return item;
        });
        that.setData({
          comments: newRes,
        });
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})