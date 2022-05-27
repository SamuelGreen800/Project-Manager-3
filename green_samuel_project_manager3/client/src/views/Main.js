import React, { useState } from 'react'


import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const Main = (props) => {
    
    const [productList, setProductList] = useState([]);
    const removeFromDom = productId => {
        setProductList(productList.filter(product =>product._id !== productId));

    }
    
    return (
        <div className='text-center bg-dark'>
            <h1 className='text-primary fw-bolder pt-3 text-decoration-underline'>StuffTracker 5000!!!</h1>
            <div className='d-flex justify-content-around bg-dark'>

                <ProductForm productList={productList} setProductList={setProductList} />
                <ProductList productList={productList} setProductList={setProductList} removeFromDom={removeFromDom} />
            </div>
        </div>
    )
}
export default Main;
