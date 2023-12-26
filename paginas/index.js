const express = require('express')
const router = express.Router()

const path  = require('path')

const basePath = path.join(__dirname, '../templates')




router.get('/', (req, res)=>    {
    res.sendFile(`${basePath}/index.html`)
})

router.get('/ondeEstamos', (req,res)=>{
    res.sendFile(`${basePath}/ondeEstamos.html`)
})

router.get('/produtos', (req,res)=>{
    res.sendFile(`${basePath}/produtos.html`)
})

router.get('/quemSomos', (req,res)=>{
    res.sendFile(`${basePath}/quemSomos.html`)
})

router.use(function(req,res,next){
    res.status(404).sendFile(`${basePath}/404.html`)
})

module.exports = router
