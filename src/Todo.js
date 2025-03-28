
class Todo {
    #title;
    #description;
    #dueDate;
    #priority;
    #id;
    constructor(title, description, dueDate, priority) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#id = crypto.randomUUID();
    }

    get title() {
        return this.#title;
    }

    set title(newTitle) {
        this.#title = newTitle;
    }

    get description() {
        return this.#description;
    }

    set description(newDescription) {
        this.#description = newDescription;
    }

    get dueDate() {
        return this.#dueDate;
    }

    set dueDate(newDate) {
        this.#dueDate = newDate;
    }

    get priority() {
        return this.#priority;
    }

    set priority(newPriority) {
        this.#priority = newPriority;
    }

    get id() {
        return this.#id;
    }
}