import Project from "./Project";

export default class App {
    #projects;
    #currentProject;
    constructor(projects = [new Project("Default")]) {
        this.#projects = projects;
        this.#currentProject = projects.length ? projects[0].id : null;
    }

    get projects() {
        return this.#projects;
    }

    get currentProject() {
        return this.#currentProject;
    }

    set currentProject(id) {
        this.#currentProject = id;
    }

    addProject(title) {
        this.#projects.push(new Project(title));
    }

    removeProject(id) {
        const filtered = this.#projects.filter((project) => project.id !== id);
        this.#projects = filtered;
    }
}