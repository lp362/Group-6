import React from "react";
import data from "../components/assets/data";

export const coursecontext = createcourse(null);
const getdefaultcart=()=>{
    let cart={};
    for (let index=0; index<all_product.length+1;index++){
        cart[index]=0;
    }
    return cart;
}
const coursecontextProvider = (props) => {

    const[cartitem,setcartitems]=useState(getdefaultcart());
        
        
        const addtocart=(itemId)=>{
            setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            console.log(cartitems);
        }

         const removefromcart=(itemId)=>{
             setcartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        }
    }
    const gettotalcartamount=()=>{
        let tottalamount=0;
        for(const item in cartitems)
        {
            if(cartitems[item]>0)
            {
                let iteminfo=data.find((product)=>product.id===item)
                totalamount+=iteminfo+cartitems[item];
            }
            return totalamount;
        }
    }
        const gettotalcartitems=()=>{
            let totalitem=0;
            for(const item in cartitems)
            {
                if(cartitems[item]>0)
                {
                    totalitem+=cartitems[item];
                }
            }
            return totalitem;
        }
            const contextvalue={gettotalcartitems,gettotalcartamount,data,cartitems,addtocart,removefromcart};
        return(

            <coursecontext.provider value={contextvalue}>
                {props.unity}
            </coursecontext.provider>
        )


export default coursecontextProvider;