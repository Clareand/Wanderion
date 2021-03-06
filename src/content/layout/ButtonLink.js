import React from 'react';
import { Button } from "antd";
import { Link } from 'react-router-dom';
// import './style.css';
function ButtonLink({
    type, text, disabled, borderRadius = 25,
    background = '#4D5AF2', textColor = "white", border = 'none',
    margin = '0px', marginLeft, marginRight, marginTop, marginBottom,
    className, onClick,icon,href,htmlType
})
    {
        return (
                <Link to={href}>
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
                        // href={href}
                        htmlType={htmlType}
                    >
                        {text}
                    </Button>
                </Link>
        );
    }


export default ButtonLink;