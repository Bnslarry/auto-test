import { render, screen } from "@testing-library/react";
import { DomExpect } from "../components/DomExpect/index";

describe(" DOM断言:页面元素的断言", () => {
    test("visible validation", () => {
      render(<DomExpect />);
      const emptyNote = screen.getByRole("generic", { name: "empty_note" });
      const [hiddenNote] = screen.getAllByRole("note", { hidden: true });
      const normalNote = screen.getByRole("note");
      expect(emptyNote).toBeEmptyDOMElement();
      expect(hiddenNote).not.toBeVisible();
      expect(emptyNote).toBeInTheDocument();
      expect(hiddenNote).toBeInTheDocument();
      expect(normalNote).toBeInTheDocument();
    });
    test("code validation", () => {
        render(<DomExpect />);
        const [hiddenNote] = screen.getAllByRole("note", { hidden: true });
        expect(hiddenNote).toHaveAttribute("aria-hidden");
        expect(hiddenNote).toHaveClass("hidden");
        expect(hiddenNote).toHaveStyle("display: none");
      });
  });