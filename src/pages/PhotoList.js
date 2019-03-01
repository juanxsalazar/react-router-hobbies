import React, { Component } from 'react';
import ThingsLike from '../data/ThingsLike.json'
import { Link } from 'react-router-dom'



class PhotoList extends Component {
    render() {
      const category = this.props.match.params.category
      const categoryData = ThingsLike[category]
  
      return (
        <ul className="thumbimg">
          {categoryData.photos.map((photo, index) => {
            return (
              <li key={index}>
                <Link to={`/${category}/${index}`}>
                  <p>{photo.title}</p>
  
                  <img src={photo.imageURL} />
                </Link>
              </li>
            )
          })}
        </ul>
      )
    }
  }
  

export default PhotoList;