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