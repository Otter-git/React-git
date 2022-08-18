import CustomLink from "../components/CustomLink";



function NotFound() {
    return (
        <div>
            <p>Страница не найдена.</p>
            <CustomLink to="/">Вернуться на Главную</CustomLink>
        </div>
    );
}

export default NotFound;
