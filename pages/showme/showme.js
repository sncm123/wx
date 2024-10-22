Page({
  data: {
    timelineData: [
      {
        date: '2021年9月',
        description: '踏入大学校园，开启人生新篇章。充满好奇与期待，准备迎接未来的挑战。',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      },
      {
        date: '2021年9月 - 2022年9月',
        description: '专注学习专业知识，不断探索和成长。每一天都是新的收获，为未来打下坚实基础。',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      },
      {
        date: '2022年9月 - 2023年9月',
        description: '迈出创新的第一步，开发了人生第一款app。同时，掌握了AE技能，为创意插上翅膀。',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
      },
      {
        date: '2023年9月 - 2024年9月',
        description: '挑战自我，独立完成Unity和UE5游戏开发全流程。梦想在指尖绽放，创意无限可能。',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      }
    ]
  },

  onLoad: function() {
    // 页面加载时的逻辑
  },

  onShareAppMessage: function () {
    return {
      title: '我的成长历程',
      path: '/pages/showme/showme'
    }
  }
});
