import React from 'react';
import style from './AdminPage.module.css';
import data from '../../api/data';

function AddProduct() {
  const submitHandler = async (event) => {
    event.preventDefault();
    // console.log(event.target[0].value);
    console.log('Submit');
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <label htmlFor="title">Titel</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="price">Price</label>
      <input type="number" name="price" id="price" />
      <label htmlFor="description">Description</label>
      <input type="text" name="description" id="description" />
      <div className={style.control}>
        <label htmlFor="category">Category</label>
        <select name="category" id="category">
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Mens</option>
          <option value="women's clothing">Women</option>
        </select>
        <label htmlFor="imageU"> Image:</label>
        <input type="file" name="imageFile" id="imageU" />
      </div>
      <button>Add Product</button>
    </form>
  );
}

export default AddProduct;
