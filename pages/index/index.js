// index.js
// const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    fullText: '其实，我的愿望是世界和平！',
    fullText1: 'HI MY NEW FRIEND!',
    displayText: '',
    displayText1: '',
    src:"",
    isPlaying: false ,// 控制是否正在旋转
    danmuList:
    [{
      text: '欢迎观看',
      color: '#ff0000',
      time: 1
    }, {
      text: '感谢欣赏！',
      color: '#ff00ff',
      time: 3
    }],
    videoSrc: "https://apd-vlive.apdcdn.tc.qq.com/vhot2.qqvideo.tc.qq.com/A7qsdbBCo_JREp6R2sKgsgk8Kd6c23mE99BJ67MsNuB4/B_JxNyiJmktHRgresXhfyMepYPGKqB1W3kYt1jSrWu8M10FFBA-hMAbLTsLJJE_iK2/svp_50069/gzc_1000035_0b53pebwyaadyuaizzxucftjm6odnr4qg3ca.f206310.mp4?sdtfrom=v1104&guid=0df3f77a852fb8a88452b0b2b8feb507&vkey=0BEB9696C46E5F0FBB60350EB9A9B753F3789A5512B418C8E757EFA3064AD760F42C418E745EBCE0A456927F150E4554F27093B2151C96D248E40A1EF4C84BAA1B83DEFF4E0569F43A5566D2ECAA9EE01B84800F33748368F7799315C3753D9971163048B2CA604458469973D01CC4EBC91E45E26FD1300EFA2E3A9A07830E49996F9DBCA07D80192F53D4CE5656DD851DBE68081D1A0135176A3A8D821E8AF13A72DB902259D02725DC30A9C2F61564",
  },

  onLoad: function () {
    this.typeText();
    this.typeText1();
  },

  typeText: function () {
    const fullText = this.data.fullText;
    let currentText = '';
    let i = 0;

    const interval = setInterval(() => {
      if (i < fullText.length) {
        currentText += fullText[i];
        this.setData({
          displayText: currentText
        });
        i++;
      } else {
        clearInterval(interval);
      }
    }, 150); // 每150毫秒显示一个字符
  },

  typeText1: function () {
    const fullText1 = this.data.fullText1;
    let currentText = '';
    let i = 0;

    const interval = setInterval(() => {
      if (i < fullText1.length) {
        currentText += fullText1[i];
        this.setData({
          displayText1: currentText
        });
        i++;
      } else {
        clearInterval(interval);
      }
    }, 150); // 每150毫秒显示一个字符
  },

  dianhua(){
    wx.showToast({
      title: '16602838115',
      icon: 'none',
      // image: 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64b7d2ea5a7e3f0310792892/66e15ae563765d0012a3e1cc/17264783158975396365.png',
      duration: 2000
    })
  },

  togrjl(){
    wx.redirectTo({
      url: '../showme/showme',
    })
  },

  tojianli(){
    wx.redirectTo({
      url: '../jianli/jianli',
    })
  },

  onMusicTap: function () {
    const audioContext = wx.createAudioContext('myAudio'); // 获取音频上下文
    const isPlaying = this.data.isPlaying;
    if (isPlaying) {
      audioContext.pause(); // 如果正在播放，暂停
    } else {
      audioContext.play(); // 如果没有播放，播放音乐
    }
    this.setData({
      isPlaying: !isPlaying // 切换播放状态
    });
  }
  })

