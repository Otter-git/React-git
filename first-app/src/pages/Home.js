import CustomLink from "../components/CustomLink";


function Home() {
    return(
        <ul>
            <li>
                <CustomLink to="/profile">Профиль</CustomLink>
            </li>
            <li>
                <CustomLink to="/chats">Список чатов</CustomLink>
            </li>
        </ul>
    )
}

export default Home;