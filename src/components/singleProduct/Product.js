import React, { useContext } from 'react';
import { myContext } from '../../store/shop-contxt';
import style from './product.module.css';
import Card from '../../UI/Card';

function Product() {
  const { shopping, id } = useContext(myContext);

  const product = shopping.find((item) => {
    return id === item.id;
  });
  // console.log(product);

  return product ? (
    <div className={style.singleProduct}>
      <Card className={style.leftC}>
        <span className={style.ctg}>{product.category}</span>
        <img src={product.image} alt="Product" />
        <div>
          <button>WishList</button>
          <button>Buy Now</button>
        </div>
      </Card>
      <Card className={style.rightC}>
        <h4>{product.title}</h4>
        <span>${product.price} </span>
        <a href="#reviews">
          rating: {product.rating.rate} ({product.rating.count})
        </a>
        <p>Description: {product.description}</p>
      </Card>
    </div>
  ) : null;
}

export default Product;
