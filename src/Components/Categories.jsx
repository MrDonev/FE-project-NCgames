import { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { getAllCategories } from "../util/api";

const Categories=()=>{
  let navigate=useNavigate();
const [allCategories, setAllCategories]=useState([]);
const [loading, setLoading]=useState(true);
useEffect(()=>{
    getAllCategories().then(({categories})=>{
      setAllCategories(categories)
      setLoading(false)
      console.log(`use effect`)
    })
},[loading])
return ( (loading) ? <div className="loader">...Loading</div> :
<main className="Main">
    <ul >
  {allCategories.map(category=>{
   return <li key={category.slug} className='ReviewCard'>
    <p>Category: {category.slug}</p>
    <p>Description: {category.description}</p>
   <button onClick={()=>navigate(`/reviews/${category.slug}`)}>Select category</button>
   </li>
  })}
  </ul>
</main>
    )
}

export default Categories;