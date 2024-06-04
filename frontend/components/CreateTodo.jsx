import { useState } from "react"

export function CreateTodo(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Title" onChange={function(e){
            setTitle(e.target.value)
        }} />
        
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={function(e){
            setDescription(e.target.value)
        }} />
        
        <button onClick={()=>{
            fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "content-type" : "application/json"
                }
            }).then(async function(res){
                const json = await res.json()
                alert("todo added")
            })

        }}
        
        style={{
            padding: 10,
            margin: 10
        }}>Add a Todo</button>
    </div>
}