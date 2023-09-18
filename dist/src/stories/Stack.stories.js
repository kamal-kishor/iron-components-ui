import React from 'react';
import { Stack } from '../components/Stack/Stack';
import { MenuItem } from '../components/MenuItem/MenuItem';
export default {
    title: 'ReactComponentLibrary/Stack',
    component: Stack
};
const Template = (args) => (React.createElement(Stack, { ...args },
    React.createElement(React.Fragment, null,
        React.createElement(MenuItem, { onClick: (e) => {
                console.log(e);
            } }, "Item-1"),
        React.createElement(MenuItem, { onClick: (e) => {
                console.log(e);
            } }, "Item-2"),
        React.createElement(MenuItem, { onClick: (e) => {
                console.log(e);
            } }, "Item-3"),
        React.createElement(MenuItem, { onClick: (e) => {
                console.log(e);
            } }, "Item-4"),
        React.createElement(MenuItem, { onClick: (e) => {
                console.log(e);
            } }, "Item-5"))));
export const Primary = Template.bind({});
Primary.args = {
    align: 'start',
    direction: 'column',
    isInline: false,
    justify: 'center',
    spacing: 2
};
export const Row = Template.bind({});
Row.args = {
    align: 'center',
    direction: 'row',
    isInline: false,
    justify: 'start',
    spacing: 2
};
export const RowReverse = Template.bind({});
RowReverse.args = {
    align: 'end',
    direction: 'row-reverse',
    isInline: false,
    justify: 'end',
    spacing: 2
};
//# sourceMappingURL=Stack.stories.js.map