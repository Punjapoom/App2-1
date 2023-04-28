import React from "react"

export default function list(){
    let Colors =['red','black','green','white']
    let list=Colors.map(C => <li>{C}</li>)
    return <ul>{list}</ul>
}