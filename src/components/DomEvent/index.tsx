import { FC } from 'react';

interface IProps {
  onClick: () => void;
}

export const DomEvent: FC<IProps> = ({ onClick }) => {
  return (
    <div role="note" onClick={onClick}>
      点我试试
    </div>
  );
};
