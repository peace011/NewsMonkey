import React from 'react'

function NewsItem({title,description,imageUrl,newsUrl,author,date,sourcename}) {
  return (
    <div>
 <div className="card" style={{width: "18rem"}}>
   <img src={imageUrl} className="card-img-top" alt="..."/>
       <div className="card-body">
    <h5 className="card-title">{title}<span className="position-absolute top-0 start-100% translate-middle badge rounded-pill bg-danger" style={{left:'80%'}}>
   {sourcename}
  </span></h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
       </div> 
 
 </div> 


    </div>
  
  )
}

export default NewsItem