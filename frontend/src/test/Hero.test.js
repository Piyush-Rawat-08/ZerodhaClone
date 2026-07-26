import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders Hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });

  test("renders SignUp button", () => {
    render(<Hero />);
    const signUpButton = screen.getByText(/Sign up for free/i);
    expect(signUpButton).toBeInTheDocument();
    expect(signUpButton).toHaveClass("btn-primary");
  });
});
