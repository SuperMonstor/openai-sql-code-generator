import "./App.css";
import CodeDisplay from "./Components/CodeDisplay";
import MessagesDisplay from "./Components/MessagesDisplay";

function getQuery() {
	try {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				message: "create a table",
			}),
		};
		fetch("http://localhost:8000/completions", options);
	} catch (error) {
		console.log(error);
	}
}

function App() {
	return (
		<div className="App">
			<MessagesDisplay />

			<input />
			<CodeDisplay />
			<div className="button-container">
				<button id="get-query" onClick={getQuery}>
					Get Query!
				</button>
				<button id="clear-chat">Clear Chat</button>
			</div>
		</div>
	);
}

export default App;
