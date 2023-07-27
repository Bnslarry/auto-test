import { FC } from 'react';
import { Form } from '@douyinfe/semi-ui';

interface IProps {}

export const DomExpect: FC<IProps> = () => {
  return (
    <div>
      <div aria-label="empty_note"></div>
      <div
        role="note"
        style={{ display: 'none' }}
        className="test hidden"
        aria-hidden
      >
        1234
      </div>
      <div role="note">8459</div>
      {/* 表单验证 */}
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
      {/* semi 表单验证 */}
      <Form
        initValues={{ username: 'glow', age: 26, sex: 'man', hobby: 'code' }}
        aria-label="semi-form"
      >
        <Form.Input field="username" disabled name="username" />
        <Form.InputNumber field="age" required name="age" />
        <Form.RadioGroup field="sex" name="sex">
          <Form.Radio value="man" />
          <Form.Radio value="woman" />
        </Form.RadioGroup>
        <Form.Select field="hobby" name="hobby">
          <Form.Select.Option value="code">code</Form.Select.Option>
          <Form.Select.Option value="read">read</Form.Select.Option>
        </Form.Select>
      </Form>
    </div>
  );
};
