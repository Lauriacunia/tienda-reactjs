import "./Tarjeta.scss";
import Rating from "./Rating";

const Tarjeta = ({ title, type, price, img, rating, isAvailable, onSale }) => {
  console.log(
    `props de Tarjeta titulo:${title} tipo:${type}  precio:${price} imgURL: ${img} disponible: ${isAvailable} oferta:${onSale}`
  );

  const mostrarTitulo = true;

  return (
    <article className="tarjeta">
      { isAvailable|| <div className="overlay"></div> }
      <img src={img} />
      <h1> {title} {onSale && <span>  ON SALE!</span>}</h1>
      <h3>{type}</h3>
      <h3>{price}</h3>
      {/*<Rating value={rating} /> */}
    </article>
  );
};

export default Tarjeta;
