'use strict'
const util = require('util')
const mysql = require('mysql')
const db = require('../db')

module.exports = {
    get:(req,res)=>{
        let sql = "SELECT * from products order by id DESC"
        console.log('get');
        db.query(sql,(err,reqponse)=>{
            if(err){
                throw err                
            }
            res.json(reqponse)
        })
    },
    detail:(req,res) => {
        let sql = "SELECT * from products where id = ? "
        db.query(sql,[req.params.productId],(err,reqponse)=>{
            if(err){
                throw err
            }
            res.json(reqponse[0])
        })
        
    },
    update:(req,res) => {
        let sql = "UPDATE products SET ? where id = ?"
        db.query(sql,[req.body, req.params.productId],(err,reqponse)=>{
            if(err){
                throw err
            }
            res.json({message: 'updated'})
        })
    },
    insert:(req,res) => {
        let sql = "INSERT INTO products SET ?"
        console.log('insert');
        db.query(sql,[req.body],(err,result,reqponse)=>{
            if(err){
                throw err
            }
            res.json({message: 'insert done'})
        })
    },
    delete:(req,res) => {
        let sql = "DELETE from products where id = ?"
        db.query(sql,[req.params.productId],(err,reqponse)=>{
            if(err){
                throw err
            }
            res.json({message: 'deleted'})
        })
    },
}