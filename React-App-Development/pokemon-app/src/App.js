import { useEffect, useState } from 'react';
import './App.css';

import { getAllPokemon, getPokemon } from './utils/pokemon';
import Card from './components/Card/Card';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);

      // 各ポケモンの詳細なデータを取得
      loadPokemon(res.results)
      // console.log(res)
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
  console.log(pokemonData)

  return (
    <div className="App">
      {loading ? (
        <h1>ロード中...</h1>
      ) : (
        <div className='pokemonCardContainer'>
          {pokemonData.map((pokemon, i) => {
            return <Card key={i} pokemon={pokemon}></Card>
          }
          )}
        </div>
      )
      }
    </div >
  );
}

export default App;
