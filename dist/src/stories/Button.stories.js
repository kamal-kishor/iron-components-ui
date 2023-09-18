import React from 'react';
import { Button } from '../components/Button/Button';
import { DeleteIcon } from '../assets/DeleteIcon';
import { EnterIcon } from '../assets/EnterIcon';
export default {
    onClick: function (e) {
        console.log('onClick', e.target.value);
    },
    title: 'ReactComponentLibrary/Button',
    component: Button
};
const Template = (args) => React.createElement(Button, { ...args });
export const Primary = Template.bind({});
Primary.args = {
    label: 'Techno Button'
};
export const Contained = Template.bind({});
Contained.args = {
    variant: 'contained',
    disabled: false
};
export const Outline = Template.bind({});
Outline.args = {
    variant: 'outline'
};
export const Upload = Template.bind({});
Upload.args = {
    variant: 'contained',
    type: 'file'
};
export const startIcon = Template.bind({});
startIcon.args = {
    variant: 'contained',
    label: 'Start Icon',
    startIcon: React.createElement(DeleteIcon, null)
};
export const endIcon = Template.bind({});
endIcon.args = {
    variant: 'contained',
    label: 'End Icon',
    endIcon: React.createElement(EnterIcon, null)
};
//# sourceMappingURL=Button.stories.js.map