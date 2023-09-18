import React from 'react';
import { MenuItem } from '../components/MenuItem/MenuItem';
export default {
    title: 'ReactComponentLibrary/MenuItem',
    component: MenuItem
};
const Template = (args) => React.createElement(MenuItem, { ...args });
export const Primary = Template.bind({});
Primary.args = {
    // value: 'This is MenuItem Line-2',
    children: 'This is MenuItem Line-2'
};
//# sourceMappingURL=MenuItem.stories.js.map