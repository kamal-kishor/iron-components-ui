import React from 'react';
import { Select } from '../components/Select/Select';
export default {
    title: 'ReactComponentLibrary/Select',
    component: Select
};
const Template = (args) => React.createElement(Select, { ...args });
export const Primary = Template.bind({});
{
    Primary.args = {
        option: ['orange', 'apple', 'mango'],
        onChange: function (value) {
            console.log(value);
        }
    };
}
//# sourceMappingURL=Select.stories.js.map