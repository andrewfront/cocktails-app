import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
const CocktailList = () => {
    const {cocktails, loading} = useGlobalContext()
    if (loading) {
        return (
            <Loading></Loading>
        )
    }
  return (
    <div className="products">
        <div className="products__inner">
    {cocktails.map((item) => {
        return <Cocktail key={item.id} {...item}></Cocktail>
    })}
        </div>
    </div>
  )
}

export default CocktailList