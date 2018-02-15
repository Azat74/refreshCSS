window.onload = function () {
  try {
    var css = document.querySelector('#mycss');
    var incrementRefreshCSS = 0;
    var myCSS = css.href;
    var refreshBtn = document.createElement('div');
    refreshBtn.classList.add('refresh-btn');
    refreshBtn.innerHTML = 'Обновить';
    document.body.appendChild(refreshBtn);
    refreshBtn.addEventListener('click', function (e) {
      incrementRefreshCSS++;
      css.href = myCSS + '?' + incrementRefreshCSS;
    });
  } catch (e) {
    console.error(e);
  }
};