import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import Container from "@mui/material/Container";
import List from '@mui/material/List';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { teal } from '@mui/material/colors';
import { deepOrange } from '@mui/material/colors';
import ListItem from '@mui/material/ListItem'; 
import ListItemText from '@mui/material/ListItemText'; 
import CommentIcon from '@mui/icons-material/Comment'; 
import IconButton from '@mui/material/IconButton'; 

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: deepOrange,
  }
})


function Chats() {
    const [count, setCount] = useState(0);
    const [chats, setChats] = useState({
        id1: {
            name: "Chat1",
            messages: [],
            },
        id2: {
            name: "Chat2",
            messages: [],
            },
    });
    const { chatId } = useParams();

    const showWrongParam = () => {
        if (!(chatId in chats)) {
            window.location.href = "/notfound";
        }
    }
    
    const updateCount = () => {
        setCount(count + 1);
    }

    const updateChatList = (event) => {
        event.preventDefault();
        if (event.target.author.value != 'BOT' && event.target.author.value != '') {
            setChats({...chats, [chatId]: {...chats[chatId],
                messages: [...chats[chatId].messages, {"id": count, "author": event.target.author.value, "text": event.target.text.value}]
            }});
            updateCount();
            event.target.text.focus();
        } else {
            alert('Недопустимое имя');
        };
    };

    useMemo(() => {
        showWrongParam();
    });

    useEffect(() => {
        setTimeout (() => {
            if (chats[chatId].messages.length != 0 && chats[chatId].messages.slice(-1)[0].author != 'BOT'){
                setChats({...chats, [chatId]: {...chats[chatId],
                    messages: [...chats[chatId].messages, {"id": count, "author": "BOT", "text": "Ваше обращение принято"}]
                }});
            updateCount();
            }
        }, 2000);
    }, [chats[chatId].messages]);

    return (
        <ThemeProvider theme={theme}>
            <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'teal' }}>
                        <ListItem 
                            disableGutters 
                            secondaryAction={<IconButton aria-label="comment"><CommentIcon /> 
                            </IconButton> 
                            }> 
                            <ListItemText primary={`Вы находитесь в ${chats[chatId].name}`}/> 
                        </ListItem>
                </List>
                <Box component="form" noValidate onSubmit={updateChatList} mt={6}>
                    <TextField label="Имя" name="author" sx={{ mb: 2 }}/>
                    <TextField label="Сообщение" name="text" autoFocus={true} sx={{ mb: 2 }}/>
                    <Button variant="outlined" type="submit" endIcon={<SendIcon />} sx={{ mb: 6 }}>Отправить</Button>
                </Box>
                <div className="mesList">
                    {chats[chatId].messages.map((item) => {
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