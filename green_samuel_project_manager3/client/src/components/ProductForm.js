import React, {  useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

const ProductForm = (props) => {
    const { productList, setProductList } = props;
    
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        e.target.reset();
        axios.post("http://localhost:8000/api/products", {
            title, price, description})
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setProductList([...productList, res.data]);
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch(err=>console.log(err))
        }

        return( 
        
            <form className='m-5 w-25 p-4 py-5 bg-secondary border border-primary text-center' onSubmit={onSubmitHandler}>
                <h1>Create a Product:</h1>

                <div className='bg-secondary m-2 mt-4'>
                    <label className='m-2 bg-secondary  fw-bold'>Title: </label>
                    <input type="text" className='form-control ' onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className='bg-secondary m-2'>
                    <label className='m-2 fw-bold'>Price: </label>
                    <input type="number" className='form-control' onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <div className='bg-secondary m-2'>
                    <label className='m-2 fw-bold'>Description:</label>
                    <textarea className='form-control' rows={2} cols={20} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <button className='btn mt-3 btn-primary border-dark text-dark shadow-lg fw-bold' type="submit">Submit</button>
            </form>
            
        )
    }
    export default ProductForm;

