import React from "react";


export default function Newscards (props){
    
         let {title,Discription,imageUrl,Url,author,source,date}=props
       return(
            <>
                    <div className="card" style={{width: "18rem"}}>
                    <span className="position-absolute  translate-middle badge rounded-pill bg-warning"> {source}</span>
                            <img className="card-img-top" src={!imageUrl?"https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg":imageUrl} alt="Card pic cap" / >
                            
                            <div className="card-body">
                                
                                <h5 className="card-title">{title} </h5> 
                                <p className="card-text">{Discription}</p>
                                <small className="text-right font-italic">by-{!author?"unknown":author} on {new Date(date).toGMTString()}</small><br/>
                                <small className="text-right ">Source-{source}</small><br/>
                                <a href={Url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary mt-2 ">Read More</a>
                              
                            </div>
                    </div>
            </>
        )
        
    
}
