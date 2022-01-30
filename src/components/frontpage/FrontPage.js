import React, { useContext } from 'react';
import style from './FrontPage.module.css';
import Card from '../../UI/Card';
import { myContext } from '../../store/shop-contxt';

function FrontPage() {
  const { shopping, id, setId } = useContext(myContext);
  const renderedList = shopping.map((product) => {
    return (
      <Card className={style.itemHome} key={product.id} id={product.id}>
        <img
          src={product.image}
          alt={product.title}
          id={`product${product.id}`}
        />
        <div
          className={style.description}
          onClick={() => {
            setId(product.id);
          }}
        >
          <h4>{product.title}</h4>
          <span>${product.price} </span>
          <a href="#reviews">
            {product.rating.rate} ({product.rating.count})
          </a>
        </div>
      </Card>
    );
  });

  return id === null ? (
    <main className={style.itemList}>{renderedList}</main>
  ) : null;
}

export default FrontPage;
