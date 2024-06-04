const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://rudraax:Ou0HeAlGJJGLFK0U@cluster0.ms0dys0.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}