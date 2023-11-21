import React, { MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button/Button';
import { ButtonProps } from '../interfaces/CommonInterface';
import { DeleteIcon } from '../assets/DeleteIcon';
import { EnterIcon } from '../assets/EnterIcon';

export default {
    onClick: function (e: MouseEvent<HTMLButtonElement>): void {
        console.log('onClick', (e.target as HTMLButtonElement).value);
    },
    title: 'ReactComponentLibrary/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Techno Button'
} as Partial<ButtonProps>;

export const Contained = Template.bind({});
Contained.args = {
    variant: 'contained',
    disabled: false
} as Partial<ButtonProps>;

export const Outline = Template.bind({});
Outline.args = {
    variant: 'outline'
} as Partial<ButtonProps>;

export const Upload = Template.bind({});
Upload.args = {
    variant: 'contained',
    type: 'file'
} as Partial<ButtonProps>;

export const startIcon = Template.bind({});
startIcon.args = {
    variant: 'contained',
    label: 'Start Icon',
    startIcon: <DeleteIcon />
} as Partial<ButtonProps>;

export const endIcon = Template.bind({});
endIcon.args = {
    variant: 'contained',
    label: 'End Icon',
    endIcon: <EnterIcon />
} as Partial<ButtonProps>;
