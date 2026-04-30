import NavBar from '../NavBar';
import { products } from '../products'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { Product } from '../products';


function HomePage() {

    const navigateTo = useNavigate();

    const navigateToPage  = (productId: string) => {
        navigateTo(`/products/${productId}`)
    }

    const [productList, setProductList] = useState<Product[]>([]);
    useEffect(() => {
        setProductList(products);
    }, []);

    return (
        <>
            <NavBar/>
            <main>
                {productList.map((product) => (
                    <div key={product.id}>
                        <img src={`/${product.image}`} alt="product image"/>
                        <button onClick={() => navigateToPage(product.id)}>View Details</button>
                        <p>{product.name}</p>
                    </div>
                ))}
            </main>
        </>
    )
}

export default HomePage;