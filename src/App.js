import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Emoji from "./Emoji";
import MessageBubble from "./MessageBubble";
import MessageFromBubble from "./MessageFrombubble";
import SendMessage from "./SendMessage";
import MessageToBubble from "./MessageToBubble";
function App() {
  return (
    <span class="dark:bg-gray-800">
      <Header></Header>
      <Emoji></Emoji>

      
      <MessageFromBubble></MessageFromBubble>
      <MessageToBubble></MessageToBubble>
      <SendMessage></SendMessage>
    </span>
  );
}

export default App;
