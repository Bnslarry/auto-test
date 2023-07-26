import { render, screen } from "@testing-library/react";
import { DomQuery } from "../components/DomQuery";

describe("DOM查询(上)：页面元素的渲染和行为查询 & DOM查询(下)：页面元素的参照物查询和优先级", () => {
  test("aria-describedby", () => {
    render(<DomQuery />);
    const button = screen.getByRole("button", {
        description: "自定义aria按钮",
      });
    screen.debug(button);
  });
  test("aria-label", () => {
    render(<DomQuery />);
    const note = screen.getByRole("generic", { name: "test_note" });
    screen.debug(note);
  });
});