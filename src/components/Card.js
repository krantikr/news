import React from 'react';
var moment = require('moment');

const Card = (props)=>{
    return(
        <a href={props.story.url} target="_blank">
            <div className="card">
                <img className="card-img-top" src={props.story.urlToImage} alt={props.story.urlToImage}/>
                <div className="card-body">
                    <h5 className="card-title">{props.story.title}</h5>
                    <p className="card-text">{props.story.description}</p>
                    <p className="card-text">
                        <small className="text-muted">Published at: {moment(props.story.publishedAt).fromNow()}</small>
                    </p>
                </div>
                <div className="card-hover"><span>Read More...</span></div>
            </div>
        </a>
    )
};
export default Card;