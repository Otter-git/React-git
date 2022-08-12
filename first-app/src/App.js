import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import Message from './Message';
import './App.css';

function App() {
  const newText = 'and something from App';

  const [messageList, setMessageList] = useState([]);
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  }

  const updateMessageList = (event) => {
    event.preventDefault();
    if (event.target.author.value != 'BOT') {
      setMessageList([...messageList, {"id": count, "author": event.target.author.value, "text": event.target.text.value}]);
      updateCount();
      event.target.text.focus();
    } else {
      alert('Недопустимое имя');
    };
  };

  useEffect(() => {
    setTimeout (() => {
      if (messageList.length != 0 && messageList.slice(-1)[0].author != 'BOT'){
        setMessageList([...messageList, {"id": count, "author": "BOT", "text": "Ваше обращение принято"}]);
        updateCount();
      }
    }, 2000);
    }, [messageList]);

  return (
    <>
        <Message addition={newText} />
        <Box component="form" noValidate onSubmit={updateMessageList} mt={6}>
          <TextField label="Имя" name="author" sx={{ mb: 2 }}/>
          <TextField label="Сообщение" name="text" autoFocus={true} sx={{ mb: 2 }}/>
          <Button variant="outlined" type="submit" endIcon={<SendIcon />} sx={{ mb: 6 }}>Отправить</Button>
        </Box>
        <div>
          {messageList.map((item) => {
            return(
              <div key={item.id}>
                <strong>{item.author}:</strong> {item.text}
              </div>
            )
          })}
        </div>
    </>
  );
}

export default App;
