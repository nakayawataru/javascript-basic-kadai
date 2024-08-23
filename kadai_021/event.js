const btn1 = document.getElementById('btn');

btn1.addEventListener('click' , () => {

setTimeout(() => {

  const change = document.querySelector('h2');

  change.textContent = 'ボタンをクリックしました';

}, 2000);

} );