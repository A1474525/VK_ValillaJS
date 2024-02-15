//////////////////////// Авторизация  //////////////////////////////
const btn = document.querySelector('.clicked');
btn.addEventListener('click', () => {
    const redirectUri = 'http://localhost:4400/';
    const clientId = '51476812';
    window.location.href = 'https://oauth.vk.com/authorize?' +
    `client_id=${clientId}&` +
    `redirect_uri=${redirectUri}&` +
    'response_type=token&' +
    'scope=offline';
})