export const getAllPokemon = (url) => {
  // Promise: 非同期処理を行うための構文。fetchの処理が終わるまで待つ。
  return new Promise((resolve, reject) => {
    // fetchでurlのデータを取得し、json形式に変換してresolveメソッドで成功したことを返す。
    fetch(url).then((res) => res.json()).then((data) => resolve(data));
  })
}

// 引数urlは、各ポケモンの詳細データを取得するためのURL
export const getPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url).then((res) => res.json()).then((data) => {
      console.log(data)
      resolve(data)
    });
  })
};