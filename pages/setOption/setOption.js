// pages/setOption/setOption.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {

    setFps:function(e){
      app.globalData.fps = e.detail.value;
    },

    setTitle:function(e){
      app.globalData.title = e.detail.value;
    },

    setAuthor:function(e){
      app.globalData.author = e.detail.value;
    },

    SwitchCamera:function(){
      if (app.globalData.cameraDirection=="back"){
        app.globalData.cameraDirection="front";
      }else{
        app.globalData.cameraDirection = "back";
      }
    }

  }
})
