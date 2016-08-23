import React from "react"
import AddTodoContainer from "./containers/AddTodoContainer"
import TodoListContainer from "./containers/TodoListContainer"
import Footer from "./Footer"

export default class App extends React.Component {
    render() {
        return (
            <div>
                <AddTodoContainer />
                <TodoListContainer />
                <Footer />
            </div>
        );
    }
}
