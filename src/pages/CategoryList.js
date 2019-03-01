import React, { Component } from 'react'
import ThingsLike from '../data/ThingsLike.json'
import { Link } from 'react-router-dom'

class CategoryList extends Component {
  render() {
    return (
    <main>
     {Object.keys(ThingsLike).map((category) => {
       return (
         <div className="thumbimg">
         <Link to={`/${category}`}><h1>{ThingsLike[category].title}</h1></Link>
         <p>{ThingsLike[category].description}</p>
         <Link to={`/${category}`}>
         <img src={ThingsLike[category].photos[0].imageURL} />
         </Link>
         </div>
       )
     })}
     </main>
     )
  }
}

export default CategoryList
