import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useParams} from "react-router-dom";

const ProductUpdate = (props) =>{ 
    const {id} = useParams();
    const [title, setTitle ] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

useEffect(() =>{

    axios.get(`http://localhost:8000/api/products/${id}`)
    .then(res =>{
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
    })
    .catch(err=> console.log(err))
}, [])

const updateProduct = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/products/${id}`, {
        title,
        price,
        description
    })
    .then(res => {
        navigate('/');
    })
    .catch(err => console.log(err))
}

return (
    <div className="bg-dark vh-100 p-5">
        <form className=' mx-auto w-25 p-4 py-5 bg-secondary border border-primary text-center' onSubmit={updateProduct}>
                <h1>Update Product:</h1>

                <div className='bg-secondary m-2 mt-4'>
                    <label className='m-2 bg-secondary  fw-bold'>Title: </label>
                    <input type="text" value={title} name="title" className='form-control' onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className='bg-secondary m-2'>
                    <label className='m-2 fw-bold'>Price: </label>
                    <input type="number" value={price} name="price" className='form-control' onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <div className='bg-secondary m-2'>
                    <label className='m-2 fw-bold'>Description:</label>
                    <textarea className='form-control' name="description" value={description} rows={2} cols={20} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <button className='btn mt-3 btn-primary border-dark text-dark shadow-lg fw-bold' type="submit">Submit</button>
            </form>
    </div>
)

}
export default ProductUpdate






