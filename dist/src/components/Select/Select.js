import React, { useState, useEffect, useRef } from 'react';
import { DownIcon } from '../../assets/DownIcon';
import { MenuItem } from '../MenuItem';
import '../../commonstyle/commonstyle.css';
import './Select.css';
export const Select = ({ placeholder = 'select...', onChange, padding, width, option, ...props }) => {
    const [openSelect, setOpenSelect] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const selectRef = useRef(null);
    const handleSelectOpen = () => {
        setOpenSelect(!openSelect);
    };
    const handleClickOutside = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
            setOpenSelect(false);
        }
    };
    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);
    const handleSelectClick = (value) => {
        setSelectedValue(value);
        setOpenSelect(false);
        if (onChange) {
            onChange(value);
        }
    };
    const containerStyle = {
        padding: padding || '',
        width: placeholder.length > 0 ? `${placeholder.length * 10}px` : ''
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ...props, className: "selectContainer select", style: containerStyle, onClick: handleSelectOpen, ref: selectRef },
            selectedValue ? selectedValue : placeholder,
            React.createElement("span", { className: `selctDownIcon ${openSelect ? 'rotateOneEighty' : ''}` },
                React.createElement(DownIcon, null))),
        openSelect && option && (React.createElement("div", { className: "selectItems select", style: containerStyle }, option.map((selectData) => {
            return (React.createElement(MenuItem, { onClick: () => handleSelectClick(selectData), key: selectData }, selectData));
        })))));
};
//# sourceMappingURL=Select.js.map