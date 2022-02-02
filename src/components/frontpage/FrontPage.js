import React, { useContext } from 'react';
import style from './FrontPage.module.css';
import Card from '../../UI/Card';
import { myContext } from '../../store/shop-contxt';
import { Link } from 'react-router-dom';

function FrontPage() {
  const { shopping } = useContext(myContext);
  const renderedList = shopping.map((product) => {
    return (
      <Card className={style.itemHome} key={product.id} id={product.id}>
        <img
          src={product.image}
          alt={product.title}
          id={`product${product.id}`}
        />
        <Link to={`/products/${product.id}`}>
          <div className={style.description}>
            <h4>{product.title}</h4>
            <span>${product.price} </span>
            <i href="#reviews">
              {product.rating.rate} ({product.rating.count})
            </i>
          </div>
        </Link>
      </Card>
    );
  });

  return <main className={style.itemList}>{renderedList}</main>;
}

export default FrontPage;
