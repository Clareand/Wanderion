import React from "react";
import { Card, Radio } from "antd";
const { Meta } = Card;
function CardImg({
  bordered,
  text1,
  title,
  image,
  className,
  hoverable,
  text2,
  alt,
  content,

}) {
  return (
    <Card
      hoverable
      className={className}
      style={{ width: 330 }}
      cover={
        <img
          alt={alt}
          src={image}
        />
      }
    >
      <Meta title={title} description={text1} />
      <di>{content}</di>
    </Card>
  );
}

export default CardImg;
