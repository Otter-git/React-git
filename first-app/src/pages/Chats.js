import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import Container from "@mui/material/Container";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { teal } from '@mui/material/colors';
import { deepOrange } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: teal,
    secondary: deepOrange,
  }
})


function Chats() {
    const [count, setCount] = useState(0);
    const [messageList, setMessageList] = useState([]);
    const [chatList, setChatList] = useState([]);

    const updateCount = () => {
        setCount(count + 1);
    }

    const updateMessageList = (event) => {
        event.preventDefault();
        if (event.target.author.value != 'BOT') {
            setMessageList([...messageList, {"id": count, "author": event.target.author.value, "text": event.target.text.value}]);
            setChatList([...chatList, {"id": count, "name": event.target.author.value}]);
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
        <ThemeProvider theme={theme}>
            <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box component="form" noValidate onSubmit={updateMessageList} mt={6}>
                    <TextField label="Имя" name="author" sx={{ mb: 2 }}/>
                    <TextField label="Сообщение" name="text" autoFocus={true} sx={{ mb: 2 }}/>
                    <Button variant="outlined" type="submit" endIcon={<SendIcon />} sx={{ mb: 6 }}>Отправить</Button>
                </Box>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {chatList.map((item) => (
                        <ListItem
                            key={item.id}
                            disableGutters
                            secondaryAction={<IconButton aria-label="comment"><CommentIcon />
                            </IconButton>
                            }>
                            <ListItemText primary={`Диалог с ${item.name}`}/>
                        </ListItem>
                    ))}
                </List>
                <div className="mesList">
                    {messageList.map((item) => {
                        return(
                            <div className="mesItem" key={item.id}>
                            <strong>{item.author}:</strong> {item.text}
                            </div>
                        )
                    })}
                </div>
            </Container>
        </ThemeProvider>
    );
}

export default Chats;