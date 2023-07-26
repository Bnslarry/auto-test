import { FC } from "react";

interface IProps {}

export const DomQuery: FC<IProps> = () => {
  return (
    <div>
      <div>test1</div>
      <div>test2</div>
      <button aria-describedby="description">
          <div id="description">自定义aria按钮</div>
      </button>
      <div aria-label="test_note">1234</div>
    </div>
  );
};