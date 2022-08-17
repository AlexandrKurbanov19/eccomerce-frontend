import { Card, Image } from "antd";
const { Meta } = Card;

const CardProduct = ({ src, alt, title, description, price }) => {
  return (
    <Card
      hoverable
      size="small"
      cover={
        <Image
          width={200}
          src={src}
          placeholder={<Image preview={false} src={src} width={200} />}
        />
      }
    >
      <Meta title={title} description={description} />
      <small>{price}</small>
    </Card>
  );
};
export default CardProduct;
