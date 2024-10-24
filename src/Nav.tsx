import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { colors } from '@precooked/utils';

interface NavItem {
    label: string;
    link: string;
}

interface NavProps {
    styles?: React.CSSProperties;
    items: NavItem[];
    itemStyles?: React.CSSProperties;
    activeItemStyles?: React.CSSProperties; // Prop para estilos del item activo
    className?: string;
}

const Nav: React.FC<NavProps> = ({ styles, itemStyles, activeItemStyles, items, className = 'precooked-nav' }) => {
    const location = useLocation(); // Obtener la ruta actual

    const defaultItemStyle: React.CSSProperties = {
        textDecoration: 'none', // Sin subrayado
        color: colors.text, // Color por defecto
        margin: '0 10px', // Margen entre los items
        padding: '8px 16px', // Padding por defecto
    };

    const defaultActiveItemStyle: React.CSSProperties = {
        backgroundColor: colors.primary, // Fondo de item activo
        color: '#fff', // Texto blanco para item activo
        borderRadius: '20px', // Bordes redondeados (pildora)
    };

    return (
        <nav className={className} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', ...styles }}>
            {items?.map((item, index) => {
                // Verificar si el item es activo comparando el link con la ruta actual
                const isActive = location.pathname === item.link;

                return (
                    <Link
                        key={index}
                        to={item.link} // Navegar a la ruta correspondiente
                        style={isActive ? { ...defaultItemStyle, ...itemStyles, ...defaultActiveItemStyle, ...activeItemStyles } : { ...defaultItemStyle, ...itemStyle }}
                        className={isActive ? "active" : ""}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
