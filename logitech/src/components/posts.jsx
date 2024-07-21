import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { BASE_URL } from "../config.js";
import axios from "axios";
export function Posts() {
    const [posts, setPosts] = useState([]);

    const init = async () => {
        const response = await axios.get(`${BASE_URL}/user/posts/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setPosts(response.data. posts);
    }

    useEffect(() => {
        init();
    }, []);

    return <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {posts.map(post => {
            return <Post post={post} />}
        )}
    </div>
}

export function Post({post}) {
    const navigate = useNavigate();
const checkout=async (amount)=>{
    const {data:{key}}=await axios.get('http://localhost:3000/payment/getkey')
    const {data}=await axios.post('http://localhost:3000/payment/checkout',{
     amount
 })
 //console.log(data);
 const options = {
    key, // Enter the Key ID generated from the Dashboard
    amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Mohit Choubey", //your business name
    description: "Test Transaction",
    image: "https://avatars.githubusercontent.com/u/137066863?v=4",
    order_id:data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    callback_url: "http://localhost:3000/payment/verification",
    prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Mohit Choubey", //your customer's name
        email: "mohitjdh2021@gmail.com",
        contact: "8690899796" //Provide the customer's phone number for better conversion rates 
    },
    notes: {
        "address": "Razorpay Corporate Office"
    },
    theme: {
        "color": "#100f10"
    }
};
const razor = new window.Razorpay(options);
    razor.open();
}
    return <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20
    }}>
        <Typography textAlign={"center"} variant="h5"><span>from: </span>{post.from}</Typography>
        <Typography textAlign={"center"} variant="h5"><span>to: </span>{post.to}</Typography>
        <img src={post.image} style={{width: 300}} ></img>
        <Typography textAlign={"center"} variant="subtitle1"><span>Price: </span>{post.price}</Typography>
        <Typography textAlign={"center"} variant="subtitle1"><span>Contact: </span>{post.contact}</Typography>
        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
            <Button variant="contained" size="large" onClick={() => {
                checkout(post.price)
            }}>Book Now</Button>
        </div>
    </Card>

}
export default Posts;