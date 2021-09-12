import React from "react";
import Product from "./Product/Product";
import Grid from '@material-ui/core/Grid';

const products = [
    {
        id: 1,
        name: "Shoes",
        description: "These shoes lookin' fine ahhh!",
        price: '$5',
        image: 'https://rukminim1.flixcart.com/image/714/857/keekmfk0-0/shoe/b/p/k/bouncer-01cgryorng-6-asian-grey-original-imafv3h4hzjgvw2z.jpeg?q=50',
        
    },
    {
        id: 2,
        name: "macBook",
        description: "Apple MacBook is the best laptop for developers",
        price: '$10',
        image: 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SL1500_.jpg',

    }
]

const Products = () => {
    return (
        <main>
            <Grid container justify = "center" spacing = {4}>
                {products.map((product) => {
                    return (
                        <Grid item key = {product.id} xs = {12} sm = {6} md = {4} lg = {3}>
                            <Product product = {product}/>
                        </Grid> 
                    )
                })}
            </Grid>
        </main>
    )   
}

export default Products;