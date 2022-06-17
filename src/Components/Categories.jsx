import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../util/api";

const Categories=()=>{
const [allCategories, setAllCategories]=useState([]);
const [loading, setLoading]=useState(true);
useEffect(()=>{
    getAllCategories().then(({categories})=>{
      setAllCategories(categories)
      setLoading(false)
    })
},[loading])
return ( (loading) ? <div className="loader">...Loading</div> :
<main className="Main">
    <ul >
  {allCategories.map(category=>{
   return <li key={category.slug} className='categoryCard'>
    <p id='categoryTitle'>Category: {category.slug}</p>
    <p id='categoryDesc'>Description: {category.description}</p>
   <Link to={`/reviews/${category.slug}`}><button>Select category</button></Link>
   </li>
  })}
  </ul>
</main>
    )
}

export default Categories;