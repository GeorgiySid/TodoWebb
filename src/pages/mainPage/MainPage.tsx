import { TodoProvider } from "../../entities/todo/context/TodoContext";
import TodoWidget from "../../widgets/todoWidget/TodoWidget";
import './MainPage.css'


const MainPage = () => {
    return (
    <TodoProvider>
        <div className="mainPage">
            <TodoWidget/>
        </div>
    </TodoProvider>
    )
}

export default MainPage;