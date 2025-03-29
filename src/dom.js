const createElement = (type, textNodes = [], attributes = {}) => {
    const element = document.createElement(type);
    for (const text of textNodes) {
        const node = document.createTextNode(text);
        element.append(node);
    }
    for (const attr in attributes) {
        element.setAttribute(attr, attributes[attr]);
    }
    return element;
}

const projectsContainer = document.querySelector(".projects");
const mainContainer = document.querySelector("main");

const createProjectButton = (project) => {
    const button = createElement(
        "button",
        [project.title],
        { class: "project", id: project.id });
    return button;
}

export const appendProjects = (projects) => {
    for (const project of projects) {
        const projectButton = createProjectButton(project);
        projectsContainer.append(projectButton);
    }
}