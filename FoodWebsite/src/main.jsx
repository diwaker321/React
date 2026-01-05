import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import { createBrowserRouter , RouterProvider } from 'react-router-dom' 
import Applayout from './App.jsx'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'
import Error from './Component/Error.jsx'
import BodySection from './Component/BodySection.jsx'
import FoodDetails from './Component/FoodDetails.jsx'

const appRouter = createBrowserRouter([ // this is for the routing configuration ki konse path se konsa component call hoga 
    {
        path:'/',
        element:<Applayout/>,
        children:[ // this children is load with / route lekin sare nhi render honge . jo path tum doge vo hi component tumhe dikhega
            {
                path:'/',
                element:<BodySection/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/restaurents/:resid',
                element:<FoodDetails/>

            }
        ],
        errorElement:<Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App/>)
root.render(<RouterProvider router={appRouter}  />) // react provider me hum apne approuter ko provide kr dete he for routing our page