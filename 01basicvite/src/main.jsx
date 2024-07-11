import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/*const reactElement = {
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"click me to visit google"
} */

//This is what react expects
const aReactElement = React.createElement(   //creating element using react language
    'a',
    { href:'https://google.com',target:'_blank'},  //order is also important here ***
    "click to visit google"
    //second one is always an object {}
    //all the attributes we want to inject we can write them here.
)

ReactDOM.createRoot(document.getElementById('root')).render(
    
    // <App />,
    aReactElement

)
