import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";
import { ClerkProvider } from "@clerk/nextjs";
import { vi } from "vitest";

describe("Header", () => {
  it("renders correctly", () => {
    render(
      <>
        <ClerkProvider>
          <Header />
        </ClerkProvider>
      </>
    );
    expect(screen.getByText("Hello there")).toBeInTheDocument();
  });
});
