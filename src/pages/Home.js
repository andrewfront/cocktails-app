import { Link } from 'react-router-dom'
import React from 'react'
import CocktailList from '../../src/components/CocktailList'
import SearchForm from '../../src/components/SearchForm'
const Home = () => {
  return (
    <div className='wrapper'>
      <main className="main">
        <div className="headertop">
          <div className="container">
          <a href="https://www.thecocktaildb.com/" className="headertop__link" target="_blank">https://www.thecocktaildb.com/</a>
            <SearchForm></SearchForm>
            <CocktailList></CocktailList>
          </div>
        </div>
      </main>
      <footer className="cocktails__copyright">
    made by | andrew
</footer>
    </div>
  )
}

export default Home