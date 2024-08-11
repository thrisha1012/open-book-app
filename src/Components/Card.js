import React from "react";
const Card=({book})=>{
    console.log(book)
    return(
        <>
        {
            book.map((item)=>{
               return(
                <div className="card">
                    <img src={item.volumeInfo.imageLinks.smallThumbnail}alt=""/>
                    
                    <div className="bottom">
                        <h3 className="bottom">{item.volumeInfo.title}</h3>
                        <p className="amount">&#8377;3290</p>
                    </div>
                </div>
               ) 
            })
        }
        </>
    )
}
export default Card;
