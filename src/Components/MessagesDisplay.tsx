import MessageDisplay from "./MessageDisplay";

interface UserMessage {
	role: string;
	content: string;
}

interface MessagesDisplayProps {
	userMessages: UserMessage[];
}

function MessagesDisplay({ userMessages }: MessagesDisplayProps) {
	return (
		<div className="messages-display">
			{userMessages.map((userMessage, _key) => (
				<MessageDisplay key={_key} message={userMessage} />
			))}
			;
		</div>
	);
}

export default MessagesDisplay;
