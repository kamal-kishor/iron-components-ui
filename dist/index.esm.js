import React$1, { ComponentType, PropsWithChildren } from 'react';
import styleInject from '/home/technogetic/Components/componentsss/iron-components-ui/node_modules/style-inject/dist/style-inject.es.js';

interface AlertProps {
    message: string;
    type?: 'failure' | 'warning' | 'success';
    timeout?: number;
    isClosable?: boolean;
    className?: string;
}
interface AuthProps {
    isAuthenticated: boolean;
}
interface AvatarProps {
    name?: string;
    src?: string;
    alt?: string;
    size?: number;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
interface BadgeProps {
    label?: number;
    type?: 'primary' | 'success' | 'warning' | 'danger';
    max?: number;
    className?: string;
}
interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    bg?: string;
    color?: string;
    variant?: 'borderLess' | 'contained' | 'outline';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    className?: string;
    type?: string;
    multiple?: boolean;
    startIcon?: string;
    endIcon?: string;
    children?: string | number;
}
interface CardProps {
    className?: string;
    padding?: string;
    title?: string;
    cardbody?: string;
    border?: string;
    children?: React.ReactNode;
    cardheaderimg?: string;
    height?: string;
}
interface DrawerProps {
    align?: string;
    width?: string;
    bg?: string;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    isOpen?: boolean;
    children?: React.ReactNode;
}
interface IconButtonProps {
    className?: string;
    multiple?: boolean;
    children?: React.ReactNode;
    type?: string;
    onClick?: () => void;
}
interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    required?: boolean;
    placeholder?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    type?: 'email' | 'password' | 'text';
    className?: string;
    adornment?: string;
    ornament?: string;
    error?: boolean;
}
interface subMenuInterface {
    label?: string;
    key?: string | number;
    icon?: string;
    type?: string;
    href?: string;
}
interface MenuProps {
    label?: string;
    key?: string | number;
    icon?: string;
    children?: subMenuInterface[];
    type?: string;
    href?: string;
}
interface MenuItem$1 {
    menuData?: MenuProps[];
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    bg?: string;
    color?: string;
    style?: React.CSSProperties;
}
interface MenuItemProps {
    autofocus?: boolean;
    children?: string;
    className?: string;
    disableGutters?: boolean;
    onClick?: (children: React.ReactNode) => void;
    value?: string;
}
interface NavBarProps {
    width?: string;
    bg?: string;
    color?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
interface SelectProps {
    option?: string[];
    placeholder?: string;
    padding?: string;
    width?: string;
    onChange?: (selectedValue: string | number) => void;
}
interface StackProps {
    align?: 'start' | 'center' | 'end';
    direction?: 'row' | 'column';
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
    isInline?: boolean;
    spacing?: number;
    wrap?: boolean;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
interface SwitchProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    name?: string;
    checked?: boolean;
}
interface TableProps {
    children?: React.ReactNode;
    className?: string;
}
interface TableBodyProps {
    children?: React.ReactNode;
}
interface TableCellProps {
    align?: 'center' | 'start' | 'end';
    children?: React.ReactNode;
    className?: string;
}
interface TableHeadProps {
    children?: React.ReactNode;
    className?: string;
}
interface TableHeaderProps {
    children?: React.ReactNode;
}
interface TableRowProps {
    children?: React.ReactNode;
    className?: string;
}
interface TextAreaInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    cols?: number;
    className?: string;
    error?: boolean;
}
interface TooltipProps {
    text?: string;
}

var css_248z$j = "*{font-family:Open Sans;font-size:16px;font-weight:400;line-height:22px}";
styleInject(css_248z$j,{"insertAt":"top"});

var css_248z$i = ".avatarContainer,img.avatarImage{border-radius:50%;cursor:pointer;height:50px;object-fit:cover;width:50px}span.avatarInitials{align-items:center;background-color:#0094da;border-radius:50%;color:#f1f1f1;display:flex;height:50px;justify-content:center;width:50px}";
styleInject(css_248z$i,{"insertAt":"top"});

declare const Avatar: React$1.FC<AvatarProps>;

declare const AuthHOC: (WrappedComponent: ComponentType<AuthProps>) => (props: AuthProps) => JSX.Element;

var css_248z$h = ".alert{border-radius:5px;display:flex;justify-content:space-between;padding:10px}span.AlertSpan{align-self:center}.alert-success{background-color:#d1ffcd;border:2px solid #78d178}.alert-failure{background-color:#ffcdcd;border:2px solid #d17878}.alert-warning{background-color:#faf4c7;border:2px solid #ecdd68}.closeIcon{cursor:pointer}";
styleInject(css_248z$h,{"insertAt":"top"});

declare const Alert: React$1.FC<AlertProps>;

var css_248z$g = "span.badge{border-radius:50%;height:20px;padding:4px;position:absolute;right:0;text-align:center;top:0;width:20px}span.badge.badge-primary{background-color:#0788dd;color:#fff}span.badge.badge-success{background-color:#78d178;color:#fff}span.badge.badge-danger{background-color:#d17878;color:#fff}span.badge.badge-warning{background-color:#ecdd68;color:#fff}";
styleInject(css_248z$g,{"insertAt":"top"});

declare const Badge: React$1.FC<BadgeProps>;

var css_248z$f = "button,label.button{border-radius:6px;cursor:pointer;padding:10px;text-align:center}.button-borderLess,label.borderLess{background:transparent;border:0;color:#4ab3e9;outline:0}.button-borderLess:hover,label.button-borderLess:hover{background:#e9eaec}.button-contained,label.button-contained{background:#4ab3e9;border:0;color:#fff}.button-contained:hover,label.button-contained:hover{background:#0c8ce9;box-shadow:0 4px 16px rgba(17,17,26,.1),0 8px 32px rgba(17,17,26,.05)}.button-outline,label.button-outline{background-color:transparent;border:.4px solid #4ab3e9;color:#4ab3e9}.button-outline:hover,label.button-outline:hover{background:#0c8ce9;color:#fff}button.button.button-contained.Icon{align-items:center;display:inline-flex}span.start-button-icon{display:inherit;margin-left:-4px;margin-right:8px}span.end-button-icon{display:inherit;margin-left:8px;margin-right:-4px}svg.button-icon-svg{font-size:19px}.button-icon-svg{fill:currentColor;display:inline-block;height:1em;user-select:none;width:1em}";
styleInject(css_248z$f,{"insertAt":"top"});

declare const Button: (props: React$1.PropsWithChildren<ButtonProps>) => JSX.Element;

var css_248z$e = ".card{background-color:#fff;border-radius:4px;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);color:rgba(0,0,0,.87);max-width:345px;overflow:hidden}.noBorderCard{border:none}.cardFooter,.cardHead{align-items:center;justify-content:center;text-align:center}.cardHead{background:#d9d9d9;font-weight:500;margin:0}img.cardImg{background-position:50%;background-repeat:no-repeat;background-size:cover;display:block;object-fit:cover;width:100%}.cardBody{padding:16px}.cardFooter{display:flex;justify-content:start;padding:8px}.cardTitle{font-size:24px;font-weight:600;line-height:2.043;margin:0 0 .35em}.cardFooter,p.cardDesc{color:#858585;margin:0}p.cardDesc{font-size:.875rem;letter-spacing:.01071em;line-height:1.43}";
styleInject(css_248z$e,{"insertAt":"top"});

declare const Card: (props: React$1.PropsWithChildren<CardProps>) => JSX.Element;

var css_248z$d = ".DrawerContainer{background:#e0f5ff;color:#6c747e;display:flex;flex-direction:column;height:100vh;overflow-y:auto;padding:8px;position:absolute;width:257px;z-index:200}@keyframes slide-in-left{0%{transform:translateX(-100%)}to{transform:translateX(0);transition:margin .3s cubic-bezier(.4,0,.6,1) 0ms}}.DrawerContainer-left{animation:slide-in-left .3s ease-in-out forwards;left:0;top:auto}@keyframes slide-in-right{0%{transform:translateX(100%)}to{transform:translateX(0);transition:margin .3s cubic-bezier(.4,0,.6,1) 0ms}}.DrawerContainer-right{animation:slide-in-right .3s ease-in-out forwards;right:0;top:auto}";
styleInject(css_248z$d,{"insertAt":"top"});

declare const Drawer: React$1.FC<DrawerProps>;

var css_248z$c = ".IconButton-Label{border-radius:50%;cursor:pointer}.IconButton-Label:hover{box-shadow:0 4px 16px rgba(17,17,26,.1),0 8px 32px rgba(17,17,26,.05)}.IconButton-Label:hover svg.uploadIcon{fill:#0094da}svg.uploadIcon{fill:#2d3843}.IconButton-Label:hover svg.button-icon-svg{fill:#0094da}";
styleInject(css_248z$c,{"insertAt":"top"});

declare const IconButton: (props: React$1.PropsWithChildren<IconButtonProps>) => JSX.Element;

var css_248z$b = ".commonInputDiv{border-radius:6px;padding:8px;user-select:none}.combinedInputField{display:flex}.adornmentContent,.oranmentContent{padding:7.5px}.adornInputField,.adornmentContent,.commonInputDiv,.oranInputField,.oranmentContent{background:transparent;border:.4px solid hsla(31,15%,50%,.25)}.adornmentContent{border-radius:6px 0 0 6px;border-right:0}.adornInputField,.oranInputField{align-items:start;align-items:center;display:flex;justify-content:space-between;padding:8px;user-select:none;width:100%}.adornInputField,.oranmentContent{border-radius:0 6px 6px 0}.oranInputField{border-radius:6px 0 0 6px}.oranmentContent{border-left:0}.commonInputDiv input:focus,input.InputAddOn-field:focus{background:transparent;border:none;outline:none}.combinedInputField:focus-within,.commonInputDiv:focus-within,.error.combinedInputField,.error.commonInputDiv{background:transparent;border-radius:6px}.combinedInputField:focus-within,.commonInputDiv:focus-within{border:.4px solid #0094da}.combinedInputField:focus-within .adornInputField,.combinedInputField:focus-within .adornmentContent,.combinedInputField:focus-within .oranInputField,.combinedInputField:focus-within .oranmentContent{border:0;outline:none}.combinedInputField:focus-within .adornmentContent{border-right:.4px solid hsla(31,15%,50%,.25)}.combinedInputField:focus-within .oranmentContent{border-left:.4px solid hsla(31,15%,50%,.25)}.error.combinedInputField,.error.commonInputDiv{border:.4px solid red}input{background:transparent;border:0;width:100%}span.InputAddOn-item{padding:0 4px}.InputAddOn-item{color:#666}";
styleInject(css_248z$b,{"insertAt":"top"});

declare const Input: React$1.FunctionComponent<InputProps>;

var css_248z$a = ".NavBarContainer-top{background:#e0f5ff;color:#6c747e;display:flex;flex-direction:row;padding:8px 0;position:relative;transition:all .5s;width:100%;z-index:1200}";
styleInject(css_248z$a,{"insertAt":"top"});

declare const NavBar: React$1.FC<NavBarProps>;

var css_248z$9 = ".menuContainer{background:transparent;color:#000;width:100%}.MenuType,.menuDropDownIcon,.menuLinkContainer{transition:all .5s}.menuLinkContainer{align-items:center;gap:15px;padding:8px 8px 8px 16px;place-content:start}.menuChild,.menuLinkContainer{color:#6c747d;cursor:pointer;display:flex}.menuLinkContainer:hover,span.menusText:hover{background:transparent;border-radius:8px;color:#0094da}svg.greyColor{fill:#6c757d}.menuLinkContainer:hover .greyColor path,.menuLinkContainer:hover .svg-icon path{fill:#0094da}a.menuLink,a.menuLink.active{color:#000;text-decoration:none}.MenuType{margin:4px 4px 8px}.menuItem_group_title{color:rgba(0,0,0,.45);padding:8px 16px}.menuChild{border:none;margin-left:30px;outline:none;padding:10px 14px;text-decoration:none}.menuChild:hover{background:transparent;border-radius:8px;color:#0094da}.menuDropDownIcon{display:inline-flex;margin-left:5px;padding-left:2px;vertical-align:middle;width:12px}.menuDropDownIcon.rotateNintee{transform:rotateNintee(90deg);transform:rotate(90deg) translateX(1px)}.menuItem_group_divider{border:solid rgba(5,5,5,.06);border-width:2px 0 0;line-height:0;margin-block:2px;margin-block-end:2px;margin-block-start:2px;overflow:hidden;padding:0}";
styleInject(css_248z$9,{"insertAt":"top"});

declare const Menu: React$1.FC<MenuItem$1>;

var css_248z$8 = "span.menuItem-label{-webkit-box-pack:start;-webkit-box-align:center;align-items:center;border:0;border-radius:0;box-sizing:border-box;cursor:pointer;display:flex;justify-content:flex-start;margin:0;min-height:auto;outline:0;text-decoration:none;user-select:none;vertical-align:middle}span.menuItem-label:hover{color:#1e9de3}.selected{background:#eff2fc}.notSelected{background:transparent}.removeGutters{padding:6px 0}.addGutters{padding:6px 16px}";
styleInject(css_248z$8,{"insertAt":"top"});

declare const MenuItem: React$1.FC<MenuItemProps>;

var css_248z$7 = ".selectContainer{align-items:center;border:.4px solid #c4c4c4;display:inline-flex;justify-content:space-between}.selectItems{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 0 1px 0 rgba(0,0,0,.12);margin-top:4px;outline:0;overflow:hidden auto;position:absolute;transition:box-shadow .3s cubic-bezier(.4,0,.2,1) 0ms;transition:all .3s ease-in-out}.selectContainer,.selectItems{background:transparent;border-radius:4px;color:#6c747e;padding:4px 8px}svg.downIcon{fill:rgba(0,0,0,.54);display:flex;height:1em;width:1em}.selctDownIcon,.selectItems{transition:all .5s}.selctDownIcon.rotateOneEighty{transform:rotate(180deg) translateX(0);transition:all .5s}.select{min-width:80px}";
styleInject(css_248z$7,{"insertAt":"top"});

declare const Select: React$1.FC<SelectProps>;

declare const Stack: React$1.FC<StackProps>;

var css_248z$6 = ".switch{display:inline-block;height:30px;position:relative;width:60px}.switch input[type=checkbox]{display:none}.switch label{background-color:gray;border-radius:25px;cursor:pointer;height:100%;left:0;position:absolute;top:0;transition:background-color .3s;width:100%}.switch label:after{background-color:#fff;border-radius:50%;content:\"\";height:20px;left:5px;position:absolute;top:5px;transition:transform .3s;width:20px}.switch input:checked+label{background-color:#0094da}.switch input:checked+label:after{transform:translateX(30px)}p.switchleftTag{padding-left:6px;padding-top:3px}p.switchrightTag{padding-right:9px;padding-top:4px;text-align:end}p.switchleftTag,p.switchrightTag{color:#fff;font-weight:500;margin:0}";
styleInject(css_248z$6,{"insertAt":"top"});

declare const Switch: React$1.FunctionComponent<SwitchProps>;

var css_248z$5 = ".table-container{border:1px solid #ddd;border-radius:8px;overflow:hidden}table.mainTable{border:0;border-collapse:collapse;outline:0;width:100%}table{border-radius:15px}";
styleInject(css_248z$5,{"insertAt":"top"});

declare const Table: ({ children, className }: TableProps) => JSX.Element;

declare const TableBody: ({ children }: TableBodyProps) => JSX.Element;

var css_248z$4 = "td.tableCell{color:grey;padding:8px;text-align:left}";
styleInject(css_248z$4,{"insertAt":"top"});

declare const TableCell: ({ children, className }: TableCellProps) => JSX.Element;

var css_248z$3 = "tr.tableRow:nth-child(odd){background:#f9f9f9}";
styleInject(css_248z$3,{"insertAt":"top"});

declare const TableRow: ({ children, className }: TableRowProps) => JSX.Element;

declare const TableHeader: ({ children }: TableHeaderProps) => JSX.Element;

var css_248z$2 = ".tableHead{background:#f1f1f1;font-weight:600;padding:8px;text-align:left}";
styleInject(css_248z$2,{"insertAt":"top"});

declare const TableHead: ({ children, className }: TableHeadProps) => JSX.Element;

var css_248z$1 = ".tooltipMainDiv{display:inline-block;position:relative}.textContainer{background-color:#313131;border-radius:4px;color:#fff;left:50%;margin-left:-60px;min-width:30px;opacity:.8;padding:5px;position:absolute;text-align:center;top:100%;visibility:visible;z-index:1}";
styleInject(css_248z$1,{"insertAt":"top"});

declare const Tooltip: React$1.FunctionComponent<PropsWithChildren<TooltipProps>>;

var css_248z = "textarea.textAreaInput{background:transparent;border:1px solid hsla(31,15%,50%,.25);border-radius:6px;outline:none;padding:8px}textarea.textAreaInput:focus{border:.5px solid #0094da;outline:none}textarea.error.textAreaInput{border:.5px solid red;outline:none}";
styleInject(css_248z,{"insertAt":"top"});

declare const TextArea: React$1.FunctionComponent<TextAreaInputProps>;

export { Alert, AuthHOC, Avatar, Badge, Button, Card, Drawer, IconButton, Input, Menu, MenuItem, NavBar, Select, Stack, Switch, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TextArea, Tooltip };
//# sourceMappingURL=index.esm.js.map
