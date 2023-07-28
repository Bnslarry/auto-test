import { FC } from 'react';
import useCount from './useCount';

interface IProps {}

export const RenderHook: FC<IProps> = () => {
  const { num, increase } = useCount();

  return (
    <div>
      <span role="note">{num}</span>
      <button onClick={increase}>增加</button>
    </div>
  );
};
