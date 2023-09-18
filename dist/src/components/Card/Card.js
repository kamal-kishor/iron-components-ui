import React from 'react';
import '../../commonstyle/commonstyle.css';
import './Card.css';
export const Card = (props) => {
    const { className, padding, title = 'Title of Your Card', cardbody = 'This is the Body Section', border, cardheaderimg, height = '150px' } = props;
    const cardHeader = (React.createElement("div", { className: "cardHead", style: { height: height } },
        React.createElement("img", { className: "cardImg", src: cardheaderimg, alt: "Image Cap", style: { height: height } })));
    const cardFooter = React.createElement("div", { className: "cardFooter" }, props.children);
    return (React.createElement("div", { ...props, className: className ? className : `card noBorderCard ` },
        cardheaderimg ? cardHeader : '',
        React.createElement("div", { style: { padding }, className: "cardBody" },
            React.createElement("div", { className: "cardTitle" }, title),
            React.createElement("p", { className: "cardDesc" }, cardbody)),
        cardFooter));
};
//# sourceMappingURL=Card.js.map