import { fireEvent, render ,screen } from "@testing-library/react"
import Heading from "../Heading"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"

test("it should test the render of the header component" , ()=>{
    render(
        <Provider store={appStore}>
        <BrowserRouter>
        <Heading/>
        </BrowserRouter>
        </Provider>
    )
})

it("should test these is a login button or not" , ()=>{
    render(
        <Provider store={appStore}>
        <BrowserRouter>
        <Heading/>
        </BrowserRouter>
        </Provider>
    )

    // const loginbutton = screen.getByRole("button")

    //i can get by text also 
    // const loginbutton = screen.getByText("LOGIN")

    //i can write in even more descriptive

    const loginbutton = screen.getByRole("button" , {name : "LOGIN"})

    expect(loginbutton).toBeInTheDocument()
})

it("should test the cart items" , ()=>{
    render(
        <Provider store={appStore}>
        <BrowserRouter>
        <Heading/>
        </BrowserRouter>
        </Provider>
    )

    // const cartItems = screen.getByText("Cart (0) items")

    /*
    what if cart items become 1 or more than 0

    so you can use the regex over here 
    but regex only used in getbytext function
    */

    const cartItems = screen.getByText(/Cart/)

    expect(cartItems).toBeInTheDocument()
})

it("check the behaviour of the login button that it should change to logout when user clicked to it " , ()=>{
    render(
        <Provider store={appStore}>
        <BrowserRouter>
        <Heading/>
        </BrowserRouter>
        </Provider>
    )

    const loginbutton = screen.getByRole("button" , {name:'LOGIN'})

    fireEvent.click(loginbutton)

    const logoutbutton = screen.getByRole("button" , {name:"LOGOUT"})
    expect(logoutbutton).toBeInTheDocument()
})