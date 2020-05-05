import React from 'react';
import { Button } from "antd";
// import './style.css';
function ButtonLink({
    type, text, disabled, borderRadius = 25,
    background = '#4D5AF2', textColor = "white", border = 'none',
    margin = '0px', marginLeft, marginRight, marginTop, marginBottom,
    className, onClick,icon,href,htmlType
})
    {
        return (
                <Button
                    type={type}
                    className={className}
                    disabled={disabled}
                    style={{
                        backgroundColor: background,
                        color: textColor,
                        borderRadius: borderRadius,
                        border: border,
                        margin: margin,
                        marginLeft: marginLeft,
                        marginRight: marginRight,
                        marginTop: marginTop,
                        marginBottom: marginBottom,
                    }}
                    onClick={onClick}
                    icon={icon}
                    href={href}
                    htmlType={htmlType}
                >
                    {text}
                </Button>
        );
    }


export default ButtonLink;