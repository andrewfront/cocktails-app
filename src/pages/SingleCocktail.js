import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from '../../src/components/Loading'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const SingleCocktail = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)
  useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    getCocktail()
  }, [id])
  if (loading) {
    return <Loading></Loading>
  }
  if (!cocktail) {
    return <h4>no cocktail to display</h4>
  }
  const {name, image, category, info, glass, instructions, ingredients} = cocktail
  return (
    <div className="wrapper">
      <main className="main">
        <div className="product">
        <div className="container">
          <div className="product__inner">
            <div className="product__item">
            <img src={image} alt={name} className='product__image'/>
            <div className="product__info">
              <p>name:<span>{name}</span></p>
              <p>category:<span>{category}</span></p>
              <p>info:<span>{info}</span></p>
              <p>glass:<span>{glass}</span></p>
              <p>instructons:<span>{instructions}</span></p>
              <p>ingredients: {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null
              })}</p>
            </div>
            </div>
          </div>
          <div className="product__btn-container">
            <Link to='/' className='product__home-btn'>back home</Link>
          </div>
        </div>
        </div>
      </main>
      <footer class="cocktails__copyright">
    made by | andrew
</footer>
    </div>
  )
}

export default SingleCocktail