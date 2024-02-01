import { loadAllProducts } from "../../core/redux/slices/allProductsSlice";
import { loadProductByCategory } from "../../core/redux/slices/productsByCatSlice";
import { loadSingleProduct } from "../../core/redux/slices/singleProdSlice";
import { serverLink } from "./server";

export const getAllProducts = () => {
    return (dispatch) => {
    fetch(`${serverLink}/products/all`)
    .then(res => res.json())
.then(json=> dispatch(loadAllProducts(json)))
    }
}


export const getProductsByCategory = id => {
    return (dispatch) => {
        fetch(`${serverLink}/categories/${id}`)
        .then(res=>res.json())
        .then(json => dispatch(loadProductByCategory(json)))
    }
}

export const getSingleProduct = id => {
    return dispatch => {
        fetch(`${serverLink}/products/${id}`)
        .then(res=>res.json())
        .then(json => dispatch(loadSingleProduct(json[0])))
    }
}


export const adNewProduct =(newProduct)=>{
    fetch(`${serverLink}/sale/send`,{
        method:'POST',
        body:JSON.stringify(newProduct)
    })
    .then(res=>res.json())
    .then(json=> console.log(json,'You got 5% discount on your next purchase'))
}