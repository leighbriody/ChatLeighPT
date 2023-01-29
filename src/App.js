import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Emoji from './Emoji';
import MessageBubble from './MessageBubble';
import SendMessage from './SendMessage';
function App() {
  return (
    <div class="dark:bg-gray-800">
      <Header></Header>
      <Emoji></Emoji>
      <MessageBubble></MessageBubble>
      <SendMessage></SendMessage>
    </div>
  );
}

export default App;
