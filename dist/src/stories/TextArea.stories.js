import React from 'react';
import { TextArea } from '../components/TextArea/TextArea';
export default {
    title: 'ReactComponentLibrary/TextArea',
    component: TextArea
};
const Template = (args) => React.createElement(TextArea, { ...args });
export const Primary = Template.bind({});
Primary.args = {
    onChange: function (e) {
        console.log('onChange', e.target.value);
    },
    error: false
};
//# sourceMappingURL=TextArea.stories.js.map