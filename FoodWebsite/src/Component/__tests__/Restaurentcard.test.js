import { render , screen } from "@testing-library/react"
import DynamicFoodCard from "../DynamicFoodCard"
import MOCK_DATA from "../../utils/mockData.json"
import "@testing-library/jest-dom"

// you have to pass here as a mock data for testing the props

test("should test the render of restaurent cards in body section" , ()=>{
    render(
        <DynamicFoodCard resObj = {MOCK_DATA}/>
    )

    const foodName = screen.getByText("Pizza Hut") // it will only check the data of mock data which comes from mockdata.json
    expect(foodName).toBeInTheDocument()
})