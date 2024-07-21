import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
//import { Sendemail } from '../components/email';
import myfirstemail from '../components/email';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  const [sent ,setsent]=useState(false);
 const [detail, setDetail] = useState({
  firstname: "",
  secondname: "",
  subject: "",
  message: "",
  to_email: "",
 });

 const changeDetail = (event) => {
     const { name, value } = event.target;
     setDetail((prevDetails) => ({
       ...prevDetails,
       [name]: value,
     }));
 };

 const handleSendEmail = () => {
  myfirstemail(detail);
     alert("Your message has been delivered")
     //Sendemail(detail);
     setsent(true);

 };

 if(!sent){
     return (
        <div>
          <div style={{
            display: "flex",
            justifyContent: "center",
            marginRight: "20",
            width: "400"
          }}>
            <Card style={{
              height: '600',
              width: "400"
            }} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                  Contact Us / Any complain
                  <br />
                </Typography>
                <TextField
                  id='outlined-required'
                  required
                  label="Enter your First name"
                  name="firstname"
                  value={detail.firstname}
                  onChange={changeDetail}
                />
                <br />
                <br />
                <TextField
                  id='outlined-required'
                  required
                  label="Enter your Second name"
                  name="secondname"
                  value={detail.secondname}
                  onChange={changeDetail}
                />
                <br />
                <br />
                <TextField
                  id='outlined-required'
                  required
                  label="Enter your Email"
                  name="to_email"
                  value={detail.to_email}
                  onChange={changeDetail}
                />
                <br />
                <br />
                <TextField
                  id='outlined-required'
                  required
                  label="subject"
                  name="subject"
                  value={detail.subject}
                  onChange={changeDetail}
                />
                <br />
                <br />
                <TextField
                
                  id='outlined-required'
                  required
                  label="Enter your message"
                  name="message"
                  value={detail.message}
                  onChange={changeDetail}
                />
              </CardContent>
            </Card>
          </div>
          <br />
          <Button
            variant='contained'
            style={{ marginLeft: "20px", marginRight: "30px" }}
            disabled={!detail.to_email || !detail.message}
            onClick={handleSendEmail}
          >
            Send
          </Button>
        </div>
     );

 }
 else if(sent){
  return (
    <div>
      <h1>ThankYou for Your Response ...</h1>
      <br></br>
      <h1>We are Working On it</h1>
    
        </div>
  );

 }
}
