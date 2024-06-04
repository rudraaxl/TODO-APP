const express = require("express");
const { createTodo, updateTodo } = require("./types");
const cors = require("cors")
const app = express()
const { todo } = require("./db");

app.use(cors())
app.use(express.json())

app.post("/todos", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)

    if(!parsedPayload.success){
        res.json({
            msg:"wrong inputs"
        })
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg:"Todo is created"
    })
})

app.get("/todos", async function(req,res){
    const allTodos = await todo.find({})
    res.json({allTodos})
})

app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if(!parsedPayload.sucess){
        res.json({
            msg:"wrong inputs"
        })
    }
    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg:"todo marked as completed"
    })
})

app.listen(3000)