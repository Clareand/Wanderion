import React from 'react';
import { Card } from "antd"; 
function CardFeature({
    bordered,text1,title,image,className,hoverable,text2
}) 
{
    return (
        <Card style={{ width: 300 }}
            hoverable={hoverable}
            className={className}
            bordered={bordered}
            title={title}
            cover={
                className = { className },
                <img
                    alt="example"
                    src={image}
                    />}
        >
            <p className="-title">{text1}</p>
            <p className="-text">{text2}</p>
        </Card>
    );
}

export default CardFeature
