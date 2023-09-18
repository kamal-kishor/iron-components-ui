import React from 'react';
import { Card } from '../components/Card/Card';
export default {
    title: 'ReactComponentLibrary/Card',
    component: Card
};
const Template = (args) => React.createElement(Card, { ...args });
export const Primary = Template.bind({});
Primary.args = {
    padding: '10px',
    children: "Hey i am card's children",
    cardheaderimg: 'https://www.w3schools.com/bootstrap4/img_avatar3.png',
    footer: 'This is my footer section',
    height: '200px'
};
export const NoImg = Template.bind({});
NoImg.args = {
    padding: '10px',
    children: "Hey i am card's children",
    footer: 'This is my footer section'
};
//# sourceMappingURL=Card.stories.js.map