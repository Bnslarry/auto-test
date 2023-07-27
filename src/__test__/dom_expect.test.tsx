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
    test('异步自定义匹配器', async () => {
      const toBeBetweenZeroAndTen = async (num: number) => {
        const res = await new Promise<{
          message: () => string;
          pass: boolean;
        }>((resolve) => {
          setTimeout(() => {
            if (num >= 0 && num <= 10) {
              resolve({
                message: () => '',
                pass: true
              });
            } else {
              resolve({
                message: () =>
                  'expected num to be a number between zero and ten',
                pass: false
              });
            }
          }, 1000);
        });
        return (
          res || {
            message: () => 'expected num to be a number between zero and ten',
            pass: false
          }
        );
      };
      expect.extend({
        toBeBetweenZeroAndTen
      });
      await expect(8).toBeBetweenZeroAndTen();
      await expect(11).not.toBeBetweenZeroAndTen();
    });
  });