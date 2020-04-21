//index.js
const app = getApp();
Page({
  onReady: function (e) {

  },
  data: {
    tempFilePaths: '',
    iphonePhotos:'',
    iphoneCameraPhoto:'',
    panelLock: {
      setOptionLock: false,
      TimeLapseOptionLock: false,
      VoiceOptionLock: false,
      KeyColorOptionLock: false,
      publishOptionLock: false,
      cameraOptionLock: true,
      PlayOptionLock: false,
    },

  },

  onLoad: function () {
  },
  onShow: function () {
    this.onLoad()
  },

  showSetOption: function () {
    this.switchPanel("setOptionLock");
  },

  showTimelapseOption: function () {
    this.switchPanel("TimeLapseOptionLock");

  },

  showSoundOption: function () {
    this.switchPanel("VoiceOptionLock");
  },

  showKeyColorOption: function () {
    this.switchPanel("KeyColorOptionLock");
  },

  showPublishOption: function () {
    this.switchPanel("PublishOptionLock");
  },
// 拍照
  showCameraOption: function () {
    this.switchPanel("cameraOptionLock");
    this.TakePhoto();

  },
  TakePhoto: function () {
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log(res)
        this.setData({
          iphoneCameraPhoto: res.tempImagePath,
        })
        // var iphoneCameraPhoto = res.tempImagePath;
        // for (let i = 0; i < iphoneCameraPhoto.length;i++){
        //   var idValue = Math.random();
        //   app.globalData.photos.push(iphoneCameraPhoto);
        //   console.log(app.globalData);
        // }
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  // 从相册中获取照片
  chooseimage: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择'],
      itemColor: "#cccccc",
      success: function (res) {
        
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      }
    })

  },
  chooseWxImage: function (type) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      // 图片格式：原图，压缩
      sourceType: [type],
      success: function (res) {
        console.log(res);
        that.setData({
          iphonePhotos: res.tempFilePaths[0],
        })
        console.log(iphonePhotos);
      }
    })
  },

  showPlayOption: function () {
    this.switchPanel("PlayOptionLock");
  },


  switchPanel: function (panelName) {
    var panelName = panelName;
    for (var key in this.data.panelLock) {
      if (this.data.panelLock[key] == true && key.toString() != panelName) {
        var lock = "panelLock." + key.toString();
        this.setData({
          [lock]: false
        })
        break;
      }
    }
    var thisLock = "panelLock." + panelName;
    this.setData({
      [thisLock]: true
    })
  },

  
  
})
