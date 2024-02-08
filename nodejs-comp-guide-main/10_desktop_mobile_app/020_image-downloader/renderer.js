/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

// $: DOMを操作する
const $btnGet = document.querySelector('#btn-get');
const $btnSave = document.querySelector('#btn-save');
const $inputUrl = document.querySelector('#input-url');
const $msg = document.querySelector('#msg');
const $result = document.querySelector('#result');

$btnGet.addEventListener('click', () => {
  const targetUrl = $inputUrl.value;

  // ブラウザ→画像のURLの一覧を取得
  const imgUrls = ['http://localhost:3000/villa-1.jpg', 'http://localhost:3000/villa-2.jpg'];

  let imgHtmlStr = '';

  for (const url of imgUrls) {
    imgHtmlStr += `<img src="${url}" />`;
  }

  $result.innerHTML = imgHtmlStr;
});

$btnSave.addEventListener('click', () => {
  // 画像を保存
  const result = 'success';
  const MSGs = {
    'success:': '画像を保存しました',
    'failed': '画像の保存に失敗しました',
    'cancel': '画像の保存をキャンセルしました',
  }
  $msg.textContent = MSGs[result];

  $msg.textContent = '画像を保存しました';
});