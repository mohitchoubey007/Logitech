import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Card} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import { BASE_URL } from "../config.js"
function AddPost() {
    const [vehicle, setvehicle] = useState("");
    const [from, setfrom] = useState("");
    const [to,setto]=useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [contact ,setcontact]=useState("");

    return <div style={{display: "flex", justifyContent: "center", minHeight: "80vh", flexDirection: "column"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card varint={"outlined"} style={{width: 400, padding: 20, marginTop: 30, height: "100%"}}>
                <TextField
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setvehicle(e.target.value)
                    }}
                    fullWidth={true}
                    label="vehicle"
                    variant="outlined"
                />

                <TextField
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setfrom(e.target.value)
                    }}
                    fullWidth={true}
                    label="from"
                    variant="outlined"
                />
                 <TextField
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setto(e.target.value)
                    }}
                    fullWidth={true}
                    label="to"
                    variant="outlined"
                />

                <TextField
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setImage(e.target.value)
                    }}
                    fullWidth={true}
                    label="Image link"
                    variant="outlined"
                />

                <TextField
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }}
                    fullWidth={true}
                    label="Price"
                    variant="outlined"
                />
               
               <TextField
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setcontact(e.target.value)
                    }}
                    fullWidth={true}
                    label="contact"
                    variant="outlined"
                />
                <Button
                    size={"large"}
                    variant="contained"
                    onClick={async () => {
                        await axios.post(`${BASE_URL}/user/posts`, {
                                vehicle: vehicle,
                                from: from,
                                to:to,
                                image:image,
                                price:price,
                                contact:contact
                        }, {
                            headers: {
                                "Authorization": "Bearer " + localStorage.getItem("token")
                            }
                        });
                        alert("Post Added !");
                    }}
                > Add Post</Button>
            </Card>
        </div>
    </div>
}

export default AddPost;