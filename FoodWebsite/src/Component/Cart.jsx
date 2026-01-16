    import { useDispatch, useSelector } from "react-redux"
    import RestaurantItems from "./RestaurantItems"
    import { ClearItem } from "../utils/cartSlice"


    const Cart = ()=>{
        const dispatch = useDispatch()

        const cartItems = useSelector((store)=>store.cart.items)
        // console.log(cartItems);
        const handleCartRemove = ()=>{
            dispatch(ClearItem())
            
        }
        
        return (
            <div className="w-full flex justify-center items-center flex-col">
                <h1 className="font-bold text-2xl text-center ">Cart section</h1>
                {cartItems?.length>0 ? 
            <div className="w-8/12  bg-gray-50 shadow-sm rounded-md !p-2">
                <RestaurantItems itemData={cartItems} showAddButton ={false}  />
            </div> : <h1 className="text-xl font-bold">Cart is Empty</h1>
            }
            <div>
                {cartItems?.length>0 &&
                <button className="border rounded-lg !px-3 !mb-8 text-xl cursor-pointer bg-white text-green-800" onClick={handleCartRemove}>Clear Cart</button>
                }
            </div>
            </div>
        )

    }

    export default Cart