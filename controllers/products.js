const {response} = require('express');
const req = require('express/lib/request');
const Product = require('../models/product');

const getProducts = async (req,res) => {

    res.status(200).json({
        msg: 'GET ROUTE'
    });
}

const getProduct = async (req,res) => {

    res.status(200).json({
        msg: 'GET ROUTE'
    });
}

const postProduct = async (req,res) => {

    res.status(200).json({
        msg: 'POST ROUTE'
    })
};

const putProduct = async(req,res ) =>{

    res.status(200).json({
        msg: 'PUT ROUTE'
    });
}

const deleteProduct = async(req,res) => {

    res.status(200).json({
        msg : 'DELETE ROUTE'
    });
}

module.exports = {
    getProducts,
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
};