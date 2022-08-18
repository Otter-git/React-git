import CustomLink from "../components/CustomLink";



function ChatsList() {
    return (
        <div>
            <ul>Выберите чат:
                <li>
                    <CustomLink to="/chats/id1">Chat1</CustomLink>
                </li>
                <li>
                    <CustomLink to="/chats/id2">Chat2</CustomLink>
                </li>
            </ul>
        </div>
    );
}

export default ChatsList;
