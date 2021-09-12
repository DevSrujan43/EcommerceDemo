import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import {ShoppingCart} from "@material-ui/icons";

const imgSrc = "https://image.pngaaa.com/550/811550-middle.png";

const Navbar = () => {
    return (
        <>
            <AppBar position = 'fixed' className = {classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant = "h6" className = {classes.title} color = 'inherit'>
                        <img src = {imgSrc} alt = "Ecommerce Site" height = "25px" className = {classes.image} />
                        Ecommerce 
                    </Typography>
                    <div className = {classes.grow}/>
                </Toolbar>
            </AppBar>   
        </>
    )
}

export default Navbar
