import React, { useEffect}  from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const ProductList = (props) => {

    const {removeFromDom, productList, setProductList} = props;
    
    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err) =>{
            console.log(err)
        })
    }, [])
    
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then(res => {
            removeFromDom(productId)
        })
        .catch(err => console.log(err))
    }

    const asText = {
        background: "none",
        border: "none",
        margin:0,
        padding:0,

    }


    return (
        <div className="text-center m-5 px-5 bg-secondary w-25 p-5 mx-5 border border-primary">
            <h1>All Products:</h1>
            {
                productList.map((product, index) => {
                    return <div key={index} className="my-3"> 
                    <Link to={`/products/${product._id}`} className="fw-bold  text-dark"> {product.title}</Link> &nbsp; &nbsp;&nbsp;
                    <Link to={`/products/edit/${product._id}`} className="text-dark text-decoration-none">Edit</Link> &nbsp;
                    <button onClick={(e) => {deleteProduct(product._id)}} className="text-danger" style={asText}>Delete</button>
                    </div>
                    
                })
            }
        </div>
    )
}
export default ProductList;