import Todo from "./Todo";

export default class Project {
    #title
    #todos
    #id
    constructor(title) {
        this.#title = title;
        this.#todos = [];
        this.#id = crypto.randomUUID();
    }

    get title() {
        return this.#title;
    }

    get todos() {
        return this.#todos;
    }

    get id() {
        return this.#id;
    }

    addTodo(todo) {
        this.#todos.push(new Todo(
            todo.title,
            todo.description,
            todo.dueDate,
            todo.priority));
    }

    removeTodo(id) {
        const filtered = this.#todos.filter((todo) => todo.id !== id);
        this.#todos = filtered;
    }
}