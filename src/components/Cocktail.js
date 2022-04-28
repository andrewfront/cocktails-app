import { Link } from "react-router-dom"
const Cocktail = ({id, image, name, info, glass}) => {
  return (
    <div className="products__item">
    <div className="products__img-container">
        <img src={image} alt={name} className="products__img"/>
    </div>
    <div className="products__info">
        <div className="products__name">{name}</div>
        <div className="products__category">{glass}</div>
        <div className="products__type">{info}</div>
        <Link className='products__btn' to={`/cocktail/${id}`}>more details</Link>
    </div>
</div>
  )
}

export default Cocktail