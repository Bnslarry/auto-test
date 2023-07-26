import { FC } from "react";

interface IProps {}

export const DomExpect: FC<IProps> = () => {
  return (
    <div>
      <div aria-label="empty_note"></div>
      <div
        role="note"
        style={{ display: "none" }}
        className="test hidden"
        aria-hidden
      >
        1234
      </div>
      <div role="note">8459</div>
    </div>
  );
};
