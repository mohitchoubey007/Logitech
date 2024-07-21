import { useState } from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInSide from './components/signin';
import DrawerAppBar from './Appbar'
import SignIn from './components/signin';
import SignUp from './components/signup';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AddPost from './components/AddPost';
import PaymentSuccess from './pages/PaymentSuccess';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
 
  return (
   
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
      <DrawerAppBar></DrawerAppBar>
      
       <Routes>
        <Route path={'/signin'} element={<SignIn></SignIn>}></Route>
        <Route path={'/signup'} element={<SignUp></SignUp>}></Route>
        <Route path={'/about'} element={<About></About>}></Route>
        <Route path={'/'} element={<Home></Home>}></Route>
        <Route path={'/contact'} element={<Contact></Contact>}></Route>
        <Route path={'/AddPost'} element={<AddPost></AddPost>}></Route>
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
       </Routes>
      </Router>
      </ThemeProvider>
   
  
  );
}

export default App
