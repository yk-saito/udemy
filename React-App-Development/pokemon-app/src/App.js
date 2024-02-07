import { useEffect, useState } from 'react';
import './App.css';

import { getAllPokemon, getPokemon } from './utils/pokemon';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState('');

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);

      // 各ポケモンの詳細なデータを取得
      loadPokemon(res.results)
      // console.log(res)
      setNextURL(res.next);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    // Promise.all: 配列に格納されたPromiseオブジェクトが全て成功したときにthenメソッドが実行される。
    // ここでは、全てのポケモンの詳細データを取得する
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        console.log(pokemon.url)
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    )
    setPokemonData(_pokemonData);
  }
  // console.log(pokemonData)

  const handlePrevPage = () => { }

  const handleNextPage = async () => {
    setLoading(true);

    // 次に表示するポケモンデータを取得
    let data = await getAllPokemon(nextURL);
    // console.log(data);
    await loadPokemon(data.results);
    setLoading(false);
  }

  return (
    <>
      <Navbar />
      <div className="App">
        {loading ? (
          <h1>ロード中...</h1>
        ) : (
          <>
            <div className='pokemonCardContainer'>
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon}></Card>
              }
              )}
            </div>
            <div className='btn'>
              <button onClick={handlePrevPage}>前へ</button>
              <button onClick={handleNextPage}>次へ</button>
            </div>
          </>
        )
        }
      </div >
    </>
  );
}

export default App;
