import Message from './Message';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Profile from "./pages/Profile";
import CustomLink from "./components/CustomLink";
import ChatsList from "./pages/ChatsList";
import NotFound from './pages/NotFound';


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
        <Route path={'/chats/:chatId'} element={<Chats />} />
        <Route path={'/chats'} element={<ChatsList />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
