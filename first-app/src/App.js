import Message from './Massage';
import './App.css';

function App() {
  const text = 'and something from App';
  return (
    <Message addition={text} />
  );
}

export default App;
