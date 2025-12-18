/**
 * in this we learn about how can we nest the elements
 * <div id='parent'>
 *      <div id='child'>
 *      <h1>hello world</h1>
 *      </div>
 * </div>
 */

// const root = ReactDOM.createRoot(document.getElementById('root'))
// const element = React.createElement('div',{id:'parent'},
//     React.createElement('div',{id:'child'},
//     React.createElement('h1' , {id:'heading'},'hello world'))) // this is how we nested the elements

// root.render(element) 




/**
 * in this we learn about how can we nest the siblings
 * <div id='parent1'>
 *      <div id='child1'>
 *      <h1>Two</h1>
 *      <h1>Three</h1>
 *      </div>
 * </div>
 */

// const parent = ReactDOM.createRoot(document.getElementById('root'))
// const child = React.createElement('div', { id: 'parent1' }, React.createElement('div', { id: 'child1' }, 
//     [React.createElement('h1', {}, 'Two'), React.createElement('h1', {}, 'Three')])) // for more then one children you have to make array of childrens
// parent.render(child)





/**
 * create this structure
 * <div id='parent'>
 * 
 *      <div id='child1'>
 *      <h1>Two</h1>
 *      <h1>Three</h1>
 *      </div>
 * 
 *      <div id='child2'>
 *      <h1>Two</h1>
 *      <h1>Three</h1>
 *      </div>
 * 
 * </div>
 * 
 */

// const root = ReactDOM.createRoot(document.getElementById('root'))
// const element = React.createElement('div',{id:'parent'},[React.createElement('div', { id: 'child1' }, 
//     [React.createElement('h1', {}, 'Two'), React.createElement('h1', {}, 'Three')]),React.createElement('div', { id: 'child2' }, 
//     [React.createElement('h1', {}, 'Two'), React.createElement('h1', {}, 'Three')])])
// root.render(element)            //this code look so bad and complex too thats why we need JSX 



