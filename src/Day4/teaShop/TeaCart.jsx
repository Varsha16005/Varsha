const TeaCart = ({ totalPrice, products }) => {
  return (
    <>
      <h1>Cart Total: {totalPrice}</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </>
  );
};

export default TeaCart;
