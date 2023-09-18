import React from 'react';
import { Input } from '../components/Input/Input';
export default {
    title: 'ReactComponentLibrary/Input',
    component: Input
};
const Template = (args) => React.createElement(Input, { ...args });
export const Primary = Template.bind({});
Primary.args = {
    onChange: function (e) {
        console.log('onChange', e.target.value);
    },
    placeholder: 'I am a placeholder',
    type: 'password',
    error: false
};
export const TextField = Template.bind({});
TextField.args = {
    onChange: function (e) {
        console.log('onChange', e.target.value);
    },
    placeholder: 'I am a placeholder',
    label: 'Hello, world',
    type: 'text',
    error: false
};
export const Adornment = Template.bind({});
Adornment.args = {
    onChange: function (e) {
        console.log('onChange', e.target.value);
    },
    placeholder: 'I am a placeholder',
    adornment: '₹',
    type: 'email',
    error: false
};
export const ornament = Template.bind({});
ornament.args = {
    onChange: function (e) {
        console.log('onChange', e.target.value);
    },
    placeholder: 'I am a placeholder',
    ornament: '@',
    type: 'text',
    error: false
};
//# sourceMappingURL=Input.stories.js.map