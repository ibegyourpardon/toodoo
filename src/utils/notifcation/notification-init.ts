const initNotification = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('用户同意授权');
      // 随时可以显示通知
    } else if (permission === 'default') {
      console.log('用户关闭授权 可以再次请求授权');
    } else {
      console.log('用户拒绝授权 不能显示通知');
    }
  });
};

export default initNotification;
