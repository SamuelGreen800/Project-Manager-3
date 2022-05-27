import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, useNavigate, useParams} from "react-router-dom";


const ProductDetail = (props) => {
    const [oneProduct, setOneProduct  ] = useState({});
    const {id} = useParams(); 
    const navigate = useNavigate();

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then( res => {
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch( err => console.log(err) )
    }, [id])
    return (
        <div className='bg-dark vh-100  '>
            <h1 className='text-primary p-4 text-center fw-bolder text-decoration-underline'>Product Details:</h1>
            <div className='mx-auto container border border-primary p-3 text-start col-6 bg-secondary'>
                <h3 className='my-4'><span className='fw-bold h2'>Title:</span> {oneProduct.title}</h3>
                <h3 className='my-4'><span className='fw-bold h2'>Price:</span> ${oneProduct.price}</h3>
                <h3 className='my-4'><span className='fw-bold h2'>Description:</span> {oneProduct.description}</h3>
            </div>
            <div className='d-flex col-6 mx-auto justify-content-between my-4 '>
            <Link to={'/'} className=" h4 btn btn-primary text-dark fw-bold">Home</Link>
            <Link to={`/products/edit/${id}`} className="btn h4 btn-primary text-dark fw-bold">&nbsp;Edit&nbsp;</Link> 
            <button onClick={deleteProduct} className="btn btn-danger h4 text-dark fw-bold">Delete</button>
            
            </div>
        </div>
    
    )
}
export default ProductDetail;

