import './HomeScreen.css'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

// Components
import Product from '../components/Product'

//Actions
import {getProducts as listProducts} from '../redux/actions/productActions'
import {setUserDeatils} from '../redux/actions/userAction'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const getProducts = useSelector(state => state.getProducts)
  const {products, loading, error} = getProducts

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  useEffect(() => {
    dispatch(setUserDeatils())
  }, [dispatch])

  return (
    <div className="homescreen">
      <div align ="center"><button><h2>Women</h2></button>&ensp;<button><h2>Men</h2></button>&ensp;<button><h2>Electronics</h2></button>&ensp;<button><h2>Furnitures</h2></button></div>
      <br></br>
      <div ><h3 className="homescreen__title"><marquee><i>I think you create your own hipness & happiness by shopping in our cart.</i></marquee></h3></div>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map(product => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default HomeScreen
