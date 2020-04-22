import * as actionTypes from './actionTypes';
import axios from 'axios';

export function getProductsSuccess(product) {
    return {
        type: actionTypes.ADD_TABLE,
        payload: product
    }
};


export function getProducts() {
    return function (dispatch) {
        let url = "https://my-json-server.typicode.com/emilfermanli/db/product";
        return axios.get(url)
            .then(res => res.data)
            .then(result => dispatch(getProductsSuccess(result)))
    }
}