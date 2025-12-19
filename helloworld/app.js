const root = ReactDOM.createRoot(document.getElementById('root')) // this is must because react need a root from where vo code suru kr ske
const element = React.createElement('h1',{class:'heading'},"hello codersz") // this makes the element in react 

root.render(element) // now we simply just add the element into render