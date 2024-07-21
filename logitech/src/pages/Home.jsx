import React from 'react'
import { Button ,Box,Stack} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Posts } from '../components/posts.jsx';
function Home() {
  const navigate = useNavigate();
 if(localStorage.length==0){
  return (
<div style={
  {
    fontSize:'larger'
  }
}>Please Login or Signup
<Stack spacing={2} direction="row">
      <Button variant="contained" onClick={()=>{
             navigate('/signin')
      }}>Login</Button>
      <Button variant="contained" onClick={()=>{
        navigate('/signup')
      }}>SignUp</Button>
    </Stack>
</div>
  );
 }
 else {
    return (
     <div>
      <Posts></Posts>
     </div>
    );
 }
}

export default Home
