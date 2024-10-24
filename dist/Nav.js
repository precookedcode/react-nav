var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { colors } from '@precooked/utils';
var Nav = function (_a) {
    var style = _a.style, itemStyle = _a.itemStyle, activeItemStyle = _a.activeItemStyle, items = _a.items, _b = _a.className, className = _b === void 0 ? 'precooked-nav' : _b;
    var location = useLocation(); // Obtener la ruta actual
    var defaultItemStyle = {
        textDecoration: 'none', // Sin subrayado
        color: colors.text, // Color por defecto
        margin: '0 10px', // Margen entre los items
        padding: '8px 16px', // Padding por defecto
    };
    var defaultActiveItemStyle = {
        backgroundColor: colors.primary, // Fondo de item activo
        color: '#fff', // Texto blanco para item activo
        borderRadius: '20px', // Bordes redondeados (pildora)
    };
    return (React.createElement("nav", { className: className, style: __assign({ display: 'flex', justifyContent: 'center', alignItems: 'center' }, style) }, items === null || items === void 0 ? void 0 : items.map(function (item, index) {
        // Verificar si el item es activo comparando el link con la ruta actual
        var isActive = location.pathname === item.link;
        return (React.createElement(Link, { key: index, to: item.link, style: isActive ? __assign(__assign(__assign(__assign({}, defaultItemStyle), itemStyle), defaultActiveItemStyle), activeItemStyle) : __assign(__assign({}, defaultItemStyle), itemStyle), className: isActive ? "active" : "" }, item.label));
    })));
};
export default Nav;
