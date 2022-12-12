import React, { useEffect, useState } from 'react'
import "./Searchbar.css"

const Searchbar = () => {
    const [wordEntered,setwordEntered] = useState([])
    const [filterData,setfilterData] = useState("")
    const [post,setPost] =useState([])

    const handlefilter= (event) => {
        const searchWords = event.target.value;
        setwordEntered(searchWords)
        const newfilter =post.filter((value)=>{
            return value.title.toLowerCase().includes(searchWords.toLowerCase())
        });
        if(searchWords==""){
            setfilterData([])
        }else{
            setfilterData(newfilter)
        }
    }
    const getData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((response) => response.json())
        .then((data) =>
         setPost(data))

    }
    useEffect(() => {
        getData()
    })
  return (
    <div>
        <input className="input" type="text" placeholder="Search" value={wordEntered} onChange={handlefilter}/>
        {filterData.length !=0 && (
            <div>
                {filterData.slice(0,15).map((value,key) =>{
                    return (
                        <div className="container" key={value.id}>
                        <div className="title">{value.title}</div>
                        </div>
                    )
                })}
            </div>
        )}
        {/* {filterData.map((el)=>(
            <div>{el.title}</div>
        )) (
            // <div></div>
        )} */}
        {/* {post.map((el)=>(
            <div key={el.id}>
            <h1>{el.title}</h1>
            </div>
        ))} */}
      

    </div>
  )
}

export default Searchbar
