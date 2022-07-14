// import the necessary functions to the test file 
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

// ensures that after each test we wont have any leftover memory data that could give us false results
afterEach(cleanup);

describe('About component', () => {
    // renders About test

    // first test - baseline to verify that the component is rendering
    it('renders', () => {
        render(<About />);
    });

    // second test -- 'test case' compare snapshots of versions of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();

    })
})