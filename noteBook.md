# DOM 相关单测

## 建议采用 screen 来获取 DOM 的 container 来查询，避免重复的解构

## render 函数需要放在每个独立的 test 中，因为在每个 test 执行完以后， React Testing Library 会调用 cleanup 方法清理环境

## 页面可见
· toBeEmptyDOMElement：标签之间是否有可见内容， 即使是空格也会失败；
· toBeVisible：是否可见，从用户直接观察的角度看能否可见；
· toBeInTheDocument：是否存在在文档中，document.body 是否存在这个元素。

## 表单验证
· toBeDisabled ：检查元素是否通过 disable 属性判断，而不是 aria-disabled；
· toBeEnabled: 是否未被禁用，等同于 .not.toBeDisabled；
· toBeRequired: 元素是否必填；
· toHaveFocus: 元素是否聚焦；
· toBeChecked: checkbox 或者是 radio 是否被选中；
· toHaveFormValues：验证整体表单的值是否和预期值匹配；
· toHaveValue：与 toHaveFormValues 类似，不过不同的是 toHaveValue 验证某个单独的表单元素，而不是全部。

## 属性验证
· toHaveAttribute: 匹配元素是否具备某个值的属性；
· toHaveClass: 匹配元素在类属性中是否包含某个类；
· toHaveStyle: 匹配元素是否具有对应样式，需要注意的是，这个是精准非模糊匹配，例如 display: none 无法匹配 display:none;color:#fff;。

## tips
对于 waitForElementToBeRemoved 需要判断的 DOM 元素，应该使用 queryBy 来查询, queryBy 和getBy 的区别在于 getBy 在未查询到指定元素时，会抛出错误

快照测试适合使用在不轻易改变，不改变的公共逻辑中