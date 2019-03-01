import React, { Component } from 'react';
import ThingsLike from '../data/ThingsLike.json'
import { Link } from 'react-router-dom'


class PhotoDetail extends Component {
    render() {
        const CategoryData = ThingsLike[this.props.match.params.category]
        const PhotoIndex = this.props.match.params.index
        return (
            <>
            <h4>{CategoryData.photos[PhotoIndex].title}</h4>
            {/* <p>{ThingsLike.pandas.description}</p> */}
            <Link to={CategoryData.photos[PhotoIndex].sourceURL}>
            <img className= "large-image" src={CategoryData.photos[PhotoIndex].imageURL}/>
            </Link>
            </>
        );
    }
}

export default PhotoDetail;