import { useEffect, useState } from "react"
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import {add} from "../Store/cartSlice"
import { fetchProducts, STATUSES } from "../Store/productSlice";

export default function Product(){
    let {data,status} = useSelector((state)=>state.products);
    
    let dispatch = useDispatch();

    let handleAdd = (product)=>{
        dispatch(add(product))    
    }

    useEffect(()=>{
        const getProducts = async ()=>{
            dispatch(fetchProducts());
        }
        getProducts();
    },[])

    if(status == STATUSES.LOADING){
        return <h1>...Loading</h1>
    }

    if(status == STATUSES.ERROR){
        return <h1>Something Went Wrong</h1>
    }

    return(
        <div className="productsWrapper">
            {data.map((product)=>{
                return <div key={product.id} className="card">
                            <img src={product.image}/>
                            <h6>{product.title}</h6>
                            <h5>{product.price}$</h5>
                            <button onClick={()=>handleAdd(product)} className="btn">Add to Cart</button>
                        </div>
            })}

        </div>
    )
}