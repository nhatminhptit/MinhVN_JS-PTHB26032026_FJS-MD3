import "./App.css";
import ToDoList from "./components/ToDoList";
import { Provider } from "react-redux";
import store from "./stores";

function App() {
  return (
    <Provider store={store}>
      <ToDoList></ToDoList>
    </Provider>
  );
}

export default App;
