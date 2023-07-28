import { FC } from 'react';
interface IProps {}

export const DomSnap: FC<IProps> = () => {
  return (
    <form aria-label="form">
      <input
        type="text"
        name="username"
        disabled
        aria-disabled
        defaultValue="glow"
        aria-label="form_username"
      />
      <input
        type="number"
        name="age"
        defaultValue={26}
        required
        aria-label="form_age"
      />
      <input
        type="radio"
        name="sex"
        value="man"
        defaultChecked
        aria-checked
        aria-label="form_sex"
      />
      <input type="radio" name="sex" value="man" aria-label="form_sex" />
    </form>
  );
};
