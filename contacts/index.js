const express = require('express')
const contacts = express.Router();

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

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

//contacts.post('/contacts',(req,res) => {
//    contact1.push(req.body)
 //   res.json("เพิ่มข้อมูลสำเร็จ")
//})

contacts.put('/contacts/:id',(req,res) =>{
    let id= req.params.id
    for(let i=0;i<contact1.length;i++)
    {
        if(id == contact1[i].id)
        {
                        contact1[i]=req.body
        }
    }
    res.json("Success put!!")
})







contacts.get('/contacts',(req,res) => {
    if(req.query.First_Name)
    {
        for(let i = 0; i<contact1.length; i++)
        {
            if(req.query.First_Name == contact1[i].First_Name)
            {
                res.json(contact1[i])
            }
        }
    }
    else{
        res.json(contact1)}
    }
)

contacts.post('/contacts',(req,res) => {
    let list = req.body
    let text = []
    text.push("ใส่ข้อมูลไม่ครบ.")
    if(!isEmptyOrSpaces(list.First_Name) && (!isEmptyOrSpaces(list.email))){
        contact1.push(list)
        res.json("เพิ่มข้อมูลสำเร็จ")
    }
    else{
        res.send(text)
    }
})

contacts.put('/contacts/:id',(req,res) =>{
    let id= req.params.id
    for(let i=0;i<contact1.length;i++)
    {
        if(id == contact1[i].id)
        {
            contact1[i]=req.body
        }
    }
    res.json("Success!!")
})



contacts.delete('/contacts/:id',(req,res) =>{
    let id= req.params.id
    for(let i=0;i<contact1.length;i++)
    {
        if(id == contact1[i].id)
        {
                contact1.splice(i,1)
        }
    }
    res.json("Success delete!!")
})




module.exports = contacts




