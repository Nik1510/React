function customRender(reactElement, mainContainer) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href); // Fixed typo: 'herf' to 'href'
    domElement.setAttribute('target', reactElement.props.target);

    mainContainer.appendChild(domElement);
    */

     const domElement = document.createElement
     (reactElement .type)
     domElement.innerHTML = reactElement.children
     for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
        }
        mainContainer.appendChild(domElement)
     }

     const reactElement = {
        type: 'a', // The type of element to create (e.g., 'a', 'div')
        props: {
            href: 'https://google.com', // The 'href' attribute of the anchor tag
            target: '_blank' // The 'target' attribute to open the link in a new tab
        },
        children: 'Click me to visit Google' // The inner text/content of the element
    };
    
    const mainContainer = document.querySelector("#root"); // Select the root element from the DOM
    customRender(reactElement, mainContainer); // Call the custom render function
