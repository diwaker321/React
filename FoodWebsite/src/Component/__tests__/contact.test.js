import { render , screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("This should test the functionality of contact component " , ()=>{
    render(<Contact/>)
    const headsection = screen.getByRole("heading")
    expect(headsection).toBeInTheDocument()
})

//to check only one use getByRole
test("this will check if the button is load or not",()=>{
    render(<Contact/>)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
})


// for more that 1 use getAllByRole
test("this will test the inputs of contact which are more than 0 in quantity" , ()=>{
    render(<Contact/>)
    const input = screen.getAllByRole("textbox")
    // expect(input.length).toBeGreaterThan(0)
    expect(input.length).toBe(2)
    
})