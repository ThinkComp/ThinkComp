import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cart = () => {
    const [products, setProducts] = useState(null);

    const fetchProducts = async () => {
        await axios.get('/api/v1/cart').then(res => {
            console.log(res.data.products);
        }).catch(error => console.log(error));
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div>Cart</div>
    )
}

export default Cart