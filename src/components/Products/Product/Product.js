import React from 'react'
import { Card, CardMedia, CardContent, CardActions,  IconButton } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import useStyles from "./styles";
const Product = ({ product }) => {
    const classes = useStyles();
    return (
        <Card className = {classes.root}>
            <CardMedia className = {classes.media} image = {product.image} title = {product.name} />
            <CardContent>
                <div className = {classes.CardContent}>
                    <Typography variant = "h5">
                        {product.name}
                    </Typography>
                    <Typography variant = "h5">
                        {product.price}
                    </Typography>
                </div>
                <Typography variant = 'body1' color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className = {classes.cardActions}>
                <IconButton aria-label = "Add to Cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
