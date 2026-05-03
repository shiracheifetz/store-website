import NavBar from '../NavBar';
import { useParams, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../products';
import styles from './ProductPage.module.css'
import type { Product } from '../products'

function ProductPage() {
    const navigateTo = useNavigate();
    const params = useParams();

    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        setProduct(products.find(p => String(p.id) === params.id));
    }, [params.id]);

    return (
        <>
            <NavBar/>
            <main>
                <div className={styles.pageContainer}>
                    <div className={styles.productDetailsContainer}>
                        <img src={`/store-website/${product?.image}`} alt={product?.name}/>
                        <div className={styles.productDetails}>
                            <h3 className={styles.productName}>{product?.name}</h3>
                            <p className={styles.description}>{product?.description}</p>
                            <p className={styles.price}>Price: ${product?.price} USD</p>
                        </div>
                    </div>
                    <button className={styles.homeButton} onClick={() => navigateTo('/')}>Back to Home Page</button>
                </div>
            </main>
        </>
  )
}

export default ProductPage;

