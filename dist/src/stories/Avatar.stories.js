import React from 'react';
import { Avatar } from '../components/Avatar/Avatar';
export default {
    title: 'ReactComponentLibrary/Avatar',
    component: Avatar
};
const Template = (args) => React.createElement(Avatar, { ...args });
export const Primary = Template.bind({});
Primary.args = {
    src: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-512.png'
};
export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
    name: 'kamal Joshi'
};
//# sourceMappingURL=Avatar.stories.js.map