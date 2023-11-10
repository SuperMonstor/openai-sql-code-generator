import { useState } from "react";
import "./App.css";
import CodeDisplay from "./Components/CodeDisplay";
import MessagesDisplay from "./Components/MessagesDisplay";

function App() {
	interface ChatData {
		role: string;
		content: string;
	}

	const [value, setValue] = useState<string>("");
	const [chat, setChat] = useState<ChatData[]>([]);

	async function getQuery() {
		try {
			const options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					message: value,
				}),
			};
			const response = await fetch(
				"http://localhost:8000/completions",
				options
			);
			const data = await response.json();
			console.log(data);
			const userMessage = {
				role: "user",
				content: value,
			};
			setChat((oldChat) => [...oldChat, data, userMessage]);
		} catch (error) {
			console.log(error);
		}
	}

	function clearChat() {
		setValue("");
		setChat([]);
	}

	const filteredUserMessages = chat.filter(
		(message) => message.role === "user"
	);

	const latestCode = chat
		.filter((message) => message.role === "assistant")
		.pop();

	return (
		<div className="App">
			<MessagesDisplay userMessages={filteredUserMessages} />

			<input value={value} onChange={(e) => setValue(e.target.value)} />
			<CodeDisplay text={latestCode?.content || ""} />
			<div className="button-container">
				<button id="get-query" onClick={getQuery}>
					Get Query!
				</button>
				<button id="clear-chat" onClick={clearChat}>
					Clear Chat
				</button>
			</div>
		</div>
	);
}

export default App;
