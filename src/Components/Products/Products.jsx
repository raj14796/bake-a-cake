import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'
import { useSelector } from 'react-redux'
import premiumCakes from '../../assets/Premium_Cakes_.avif'

const Products = () => {
    const classes = useStyles();
    const products = useSelector((state) => state.products);
    return (
        <main className={classes.content} >
            <div className={classes.toolbar} />
            <div className={classes.bgCream}></div>
            <div className={classes.products}>
                <div className={classes.productTypes}>
                    <img className={classes.headImage} src={premiumCakes}></img>
                </div>
                <Typography className={classes.title} variant="h4" gutterBottom>NEW PRODUCTS</Typography>
                <Grid container spacing={4} >
                    {products.map((aProduct) => (
                        <Grid item key={aProduct.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={aProduct} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </main>
    )
}

export default Products
