import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { teal } from '@mui/material/colors';
import { deepOrange } from '@mui/material/colors';
import Message from './Message';
import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Profile from "./pages/Profile";
import CustomLink from "./components/CustomLink";

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: deepOrange,
  }
})

function App() {
  const newText = 'and something from App';

  return(
    <>
      <Message addition={newText} />
      <header>
        <CustomLink to="/">Главная</CustomLink>
      </header>

      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/chats'} element={<Chats />} />
      </Routes>
    </>
  )
}

export default App;
