function customRender(reactElement, mainContainer) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href); // Fixed typo: 'herf' to 'href'
    domElement.setAttribute('target', reactElement.props.target);

    mainContainer.appendChild(domElement);
    */

    const domElement = document.createElement()
    }

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com', // Corrected attribute name
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);
