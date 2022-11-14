const ChatForm = () => {

// START OF PLACEHOLDER CODE FOR CHAT FORM

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    
    const sendMessage = (e) => {
        e.preventDefault();
        socket.emit("send message", message);
        setMessage("");
    };
    
    useEffect(() => {
        socket.on("receive message", (message) => {
        setMessages([...messages, message]);
        });
    }, [messages]);
    
    return (
        <div>
        <form onSubmit={sendMessage}>
            <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
        <div>
            {messages.map((message) => (
            <div>{message}</div>
            ))}
        </div>
        </div>
    );

    // END OF PLACEHOLDER CODE FOR CHAT FORM
}

export default ChatForm;