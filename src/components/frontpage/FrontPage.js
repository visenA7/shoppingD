import React, { useEffect, useState } from 'react';
import style from './FrontPage.module.css';
import data from '../../api/data';
import Card from '../../UI/Card';

function FrontPage() {
  const [shopping, setShopping] = useState([]);
  useEffect(() => {
    const datafetch = async () => {
      const response = await data.get('?limit=24');
      setShopping(response.data);
    };
    datafetch();
  }, []);

  const renderedList = shopping.map((product) => {
    return (
      <Card className={style.itemHome} key={product.id} id={product.id}>
        <img
          src={product.image}
          alt={product.title}
          id={`product${product.id}`}
        />
        <div className={style.description}>
          <h4>{product.title}</h4>
          <span>${product.price} </span>
          <a href="#reviews">
            {product.rating.rate} ({product.rating.count})
          </a>
        </div>
      </Card>
    );
  });

  return <main className={style.itemList}>{renderedList}</main>;
}

export default FrontPage;
