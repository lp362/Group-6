import React from 'react'

const product =() => {
  const {data}=useContext(coursecontext);
  const {productId}=useParams();
  const product=data.find((e)=> e.id===productId)
  return (
    <div>
       <breadcrumb product={product}/> 
       <productdisplay product={product}/>
       <descriptionbox/>
    </div>
  )
}

export default product
