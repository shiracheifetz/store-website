import NavBar from '../NavBar';
import { products } from '../products'
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { Product } from '../products';
import styles from './HomePage.module.css';


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
                <div className={styles.productsContainer}>
                    {productList.map((product) => (
                        <div key={product.id} className={styles.product}>
                            <Link to={`/products/${product.id}`}>
                            <img src={`/store-website/${product.image}`} alt="product image"/>
                            </Link>
                            <p className={styles.productName}>{product.name}</p>
                            <p className={styles.productPrice}>${product.price}</p>
                            <button onClick={() => navigateToPage(product.id)}>View Details</button>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default HomePage;