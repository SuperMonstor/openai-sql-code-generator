import "./App.css";
import CodeDisplay from "./Components/CodeDisplay";
import MessagesDisplay from "./Components/MessagesDisplay";

function App() {
	return (
		<div className="App">
			<MessagesDisplay />

			<input />
			<CodeDisplay />
			<div className="button-container">
				<button id="get-query">Get Query!</button>
				<button id="clear-chat">Clear Chat</button>
			</div>
		</div>
	);
}

export default App;
