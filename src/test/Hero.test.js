import React from 'react';
import{render , screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/HeroSection";


//Test Suite//
describe('Hero Component', () =>{
    test('renders Hero image', ()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src" , "media/images/homeHero.png");
    });

    test('renders signup button', ()=>{
        render(<Hero/>);
        const signupbutton = screen.getByRole("button",{name : "/signup now"});
        expect(signupbutton).toBeInTheDocument();
        expect(signupbutton).toHaveClass("btn-primary");
    });
});