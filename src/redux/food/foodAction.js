import { BUY_SANDEWICH } from "./foodType"



export const buysandewich = (count)=>{
    return{
        type: BUY_SANDEWICH,
        payload: count
    }
}