//pemanggilan port NPM
const express = require('express')
const app = express()
const port = 3002

// pemanggilan request body parse
const bodyparser = require('body-parser')

// pemanggilan file config.js di indexs.js
const db = require('./config.js')
const response = require('./request.js')
const { error } = require('console')

// penggunaan body parse
app.use(bodyparser.json())

// tambahkan route get kampus
app.get('/mahasiswa', (req,res)=>{
    const sql = 'SELECT * FROM mahasiswa'
    db.query(sql,(error, result)=>{
        response(200,result,'nama',res)
    })
})

// route get data dari mahasiswa dan npm
app.get('/mahasiswa/:id', (req,res)=>{
    const npm = req.params.npm
    const sql = `SELECT * FROM mahasiswa where id ='${id}'`
    db.query(sql, (err, result)=>{
        if(err) throw err
        response(200,result,"get id mahasiswa",res)
    })
})

// route post mahasiswa
app.post('/tb_mahasiswa', (req, res)=>{
    const {id, nama, npm, jenis_kelamin, tanggal_lahir, alamat}=req.body
    const sql = `INSERT INTO tb_mahasiswa (id, nama, npm, jenis_kelamin, tanggal_lahir, alamat) values ('${id}','${nama}','${npm}','${jenis_kelamin}','${tanggal_lahir}','${alamat}');`

    db.query(sql,(error, fields)=>{
        if(error) response(500, 'invalid', `${id} dengan npm ${nama} sudah ditambahkan`, res)
        if(fields?.affectedRows){
            const data ={
                isSucces: fields.affectedRows,
                id:fields.insertId,
            }
            response(200,data,"Data berhasil di simpan",res)
        }
    })
})


app.listen(port, () => {
    console.log(`Runing in port ${port}`)
})