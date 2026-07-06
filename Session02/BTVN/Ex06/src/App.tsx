import { BrowserRouter } from "react-router-dom";
import CourseList from "./CourseList";

export default function App() {
  return (
    <BrowserRouter>
      <CourseList />
    </BrowserRouter>
  );
}
