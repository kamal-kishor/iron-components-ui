import React from 'react';
import { NavBar } from '../components/NavBar/NavBar';
import { MenuItem } from '../components/MenuItem/MenuItem';
export default {
    title: 'ReactComponentLibrary/NavBar',
    component: NavBar
};
const Template = (args) => React.createElement(NavBar, { ...args });
export const Primary = Template.bind({});
Primary.args = {
    children: (React.createElement(React.Fragment, null,
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
            } }, "Item-5")))
};
//# sourceMappingURL=NavBar.stories.js.map