// pages/camera/camera.js
const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    cameraDirection: app.globalData.cameraDirection,
    fps: app.globalData.fps
  },

  /**
   * 组件的方法列表
   */
  methods: {
    test:function(){
      console.log();
      this.data.fps = app.globalData.fps;
      this.setData({
        fps: app.globalData.fps
      })
    }
  }
})
