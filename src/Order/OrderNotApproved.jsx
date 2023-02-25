import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { XCircleIcon } from '@heroicons/react/20/solid'
export const OrderNotApproved = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const myTimeOut = setTimeout(() => {navigate('/order')}, 3000);
        return () => {clearTimeout(myTimeOut)};
    }, [])
    console.log("???")
    return <div className="mx-10">
        <XCircleIcon className="h-20 w-20 mx-auto my-10 text-rose-500"/>
        <h1 className="text-center font-medium text-xl">Your order was rejected duo to insufficient product in the inventory. Please import the products to process the order.</h1>
    </div>
}