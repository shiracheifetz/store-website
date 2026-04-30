import NavBar from '../NavBar';
import { useParams } from 'react-router-dom';
import { products } from '../products';

function ProductPage() {
    
    const params = useParams();
    const product = products.find(p => String(p.id) === params.id)

    return (
        <>
            <NavBar/>
            <main>
                <h3>{product?.name}</h3>
                <img src={`/${product?.image}`} alt={product?.name}/>
                <p>Description: {product?.description}</p>
                <p>Price: ${product?.price}</p>
            </main>
        </>
  )
}

export default ProductPage;