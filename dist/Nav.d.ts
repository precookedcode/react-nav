import React from 'react';
interface NavItem {
    label: string;
    link: string;
}
interface NavProps {
    style?: React.CSSProperties;
    items: NavItem[];
    itemStyle?: React.CSSProperties;
    activeItemStyle?: React.CSSProperties;
    className?: string;
}
declare const Nav: React.FC<NavProps>;
export default Nav;
