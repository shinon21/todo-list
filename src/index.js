import App from "./App";
import { appendProjects } from "./dom";
import "./style.css";

const app = new App();

app.addProject("test 1");
app.addProject("test 2");

appendProjects(app.projects);