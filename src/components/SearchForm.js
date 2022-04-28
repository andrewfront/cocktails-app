import { useGlobalContext } from "../context"
import { useRef, useEffect } from "react"
const SearchForm = () => {
  const {cocktails, setSearchTerm} = useGlobalContext()
  const searchValue = useRef('')
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  useEffect(() => {
    searchValue.current.focus()
  }, [])
  return (
      <>
          <form className="headertop__form" onSubmit={handleSubmit}>
        <input type="text" className="headertop__input" placeholder="Search your cocktail by name" ref={searchValue} onChange={searchCocktail}/>
    </form>
    {cocktails.length < 1 && <p className="headertop__matches">No Cocktails Matched Your Search</p>}
      </>
  )
}

export default SearchForm