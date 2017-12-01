const express = require('express')
const contacts = express.Router();


var contact1 = [
    {
        id:1,
        First_Name:'Nonthawat',
        Last_Name:'Kwankao',
        email: '58160466@go.buu.ac.th'
    },
    {
        id:2,
        First_Name:'Suratchana',
        Last_Name:'Pinthong',
        email: '58160328@go.buu.ac.th'
    },
    {
        id:3,
        First_Name:'Saranya',
        Last_Name:'Sarakun',
        email: '58160316@go.buu.ac.th'
    }
]
contacts.get('/contacts',(req,res) => res.json(contact1))

contacts.post('/contacts',(req,res) => {
    contact1.push(req.body)
    res.json("เพิ่มข้อมูลสำเร็จ")
})
module.exports = contacts