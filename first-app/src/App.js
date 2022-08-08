import { useState, useEffect } from "react";
import Message from './Message';
import './App.css';

function App() {
  const newText = 'and something from App';

  const [messageList, setMessageList] = useState([]);

  const updateMessageList = (event) => {
    event.preventDefault();
    setMessageList([...messageList, {"author": event.target.author.value, "text": event.target.text.value}]);
  }

  return (
    <>
        <Message addition={newText} />
        <div>
          {messageList.map((item) => {
            return(
              <div key={item.author}>
                {item.text}
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
