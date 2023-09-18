import React from 'react';
import { Switch } from '../components/Switch';
export default {
    title: 'ReactComponentLibrary/Switch',
    component: Switch
};
const Template = (args) => React.createElement(Switch, { ...args });
export const Primary = Template.bind({});
Primary.args = {
    checked: true
};
//# sourceMappingURL=Switch.stories.js.map