import { useState, useEffect } from "react";
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
    } else {
      alert('Недопустимое имя');
    };
  };

  useEffect(() => {
    if (messageList.length != 0 && messageList.slice(-1)[0].author != 'BOT'){
      setMessageList([...messageList, {"id": count, "author": "BOT", "text": "Ваше обращение принято"}]);
      updateCount();
    }
  }, [messageList]);

  return (
    <>
        <Message addition={newText} />
        <div>
          {messageList.map((item) => {
            return(
              <div key={item.id}>
                <strong>{item.author}:</strong> {item.text}
              </div>
            )
          })}
        </div>
        <form action="#" onSubmit={updateMessageList}>
          <label>Введите имя</label>
          <input type="text" name="author"/><br/>
          <label>Введите текст сообщения</label>
          <input type="text" name="text"/><br/>
          <input type="submit"/>
        </form>
    </>
  );
}

export default App;
