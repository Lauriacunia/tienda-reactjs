import './Tarjeta.scss';
import Rating from './Rating';

const Tarjeta = ({title, type, price, img, rating }) => {
  console.log(`props de Tarjeta ${title} ${type} ${price} ${img} `);

  const mostrarTitulo = true;

  return (
    <article className="tarjeta"> 

      <img src={img} />
      <h1> {title}</h1>
      <h3>{type}</h3>
      <h3>{price}</h3>
      <Rating value={rating} />

    </article>
  );
};

export default Tarjeta;
