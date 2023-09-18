import React, { useState } from 'react';
import { Drawer } from '../components/Drawer/Drawer';
import { MenuItem } from '../components/MenuItem/MenuItem';
import { Button } from '../components/Button/Button';
export default {
    title: 'ReactComponentLibrary/Drawer',
    component: Drawer
};
const Template = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { onClick: handleClick }, "Toggle Drawer"),
        React.createElement(Drawer, { ...args, isOpen: isOpen },
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
                    } }, "Item-5")))));
};
export const Primary = Template.bind({});
Primary.args = {
    align: 'left'
};
export const right = Template.bind({});
right.args = {
    align: 'right'
};
//# sourceMappingURL=Drawer.stories.js.map