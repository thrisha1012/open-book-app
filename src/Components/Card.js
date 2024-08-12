import React from "react";
const Card=({book})=>{
    console.log(book)
    return(
        <>
        {
            book.map((item)=>{
                let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                if(thumbnail!=undefined && amount!=undefined){
                    return(
                        <div className="card">
                            <img src={thumbnail}alt=""/>
                            
                            <div className="bottom">
                                <h3 className="bottom">{item.volumeInfo.title}</h3>
                                <p className="amount">&#8377;{amount}</p>
                            </div>
                        </div>
                       ) 

                }
               
            })
        }
        </>
    )
}
export default Card;
