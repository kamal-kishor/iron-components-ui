import React, { useState } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { RightArrow } from '../../assets/RightArrow';
import '../../commonstyle/commonstyle.css';
import './Menu.css';
export const Menu = ({ style, menuData, bg, color, onClick }) => {
    const [subItem, setSubItem] = useState(false);
    const [currmenu, setCurrMenu] = useState();
    const [currSubMenu, setCurrSubMenu] = useState();
    const menuStyles = {
        color: color,
        backgroundColor: bg,
        ...style
    };
    const handleSubItem = (key) => {
        setSubItem(!subItem);
        setCurrMenu(key);
        setCurrSubMenu('');
    };
    return (React.createElement(BrowserRouter, null,
        React.createElement("div", { className: "menuContainer", style: menuStyles }, menuData.map((menuItem, index) => (React.createElement(React.Fragment, { key: index },
            menuItem?.icon && menuItem?.label && (React.createElement(NavLink, { to: menuItem.href, className: "menuLink" },
                React.createElement("div", { className: "MenuType" },
                    menuItem?.type !== 'divider' && React.createElement("div", { className: "menuItem_group_title" }, menuItem.type),
                    React.createElement("div", { className: "menuLinkContainer", onClick: () => {
                            handleSubItem(menuItem.key);
                        }, style: menuStyles },
                        React.createElement("div", { className: "menuImage" }, menuItem.icon),
                        React.createElement("div", { className: "menuTitle" },
                            React.createElement("span", { className: "menusText" }, menuItem.label),
                            menuItem.children && menuItem.children?.length > 0 && (React.createElement("div", { className: `menuDropDownIcon ${subItem && currmenu === menuItem.key ? 'rotateNintee' : ''}` }, React.createElement(RightArrow, null)))))))),
            currmenu === menuItem.key && menuItem.children && currmenu && subItem && (React.createElement(React.Fragment, null, menuItem.children.map((mapChild) => (React.createElement(NavLink, { to: mapChild.href, key: mapChild.key, className: "menuLink" },
                React.createElement("div", { className: "menuChild", key: mapChild.key, style: { display: subItem ? 'block' : 'none', color: `${color}` } }, mapChild.label)))))),
            menuItem?.type === 'divider' && React.createElement("div", { className: "menuItem_group_divider", key: index })))))));
};
//# sourceMappingURL=Menu.js.map