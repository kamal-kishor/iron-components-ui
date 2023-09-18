import React from 'react';
import { EnterIcon } from '../assets/EnterIcon';
import { IconButton } from '../components/IconButton/IconButton';
export default {
    title: 'ReactComponentLibrary/IconButton',
    component: IconButton
};
const Template = (args) => React.createElement(IconButton, { ...args });
export const Primary = Template.bind({});
Primary.args = {
    children: React.createElement(EnterIcon, null)
};
export const UploadBtn = Template.bind({});
UploadBtn.args = {
    type: 'file'
};
//# sourceMappingURL=IconButton.stories.js.map