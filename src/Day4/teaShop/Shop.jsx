import { useState } from "react"; //
import TeaMenu from "./TeaMenu"; //
import TeaNavbar from "./TeaNavbar";
import TeaCart from "./TeaCart";

export const name = "Shreeraam";

export const menu = [
  {
    title: "Tea",
    varients: [
      {
        name: "Lemon Tea",
        price: 20,
      },
      {
        name: "Ginger Tea",
        price: 15,
      },
    ],
  },
  {
    title: "Coffee",
    varients: [
      {
        name: "Cold Coffee",
        price: 50,
      },
      {
        name: "Chocolate Coffee",
        price: 60,
      },
    ],
  },
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleChangeCategory = (category) => {
    setActiveCategory(category);
  };

  const handleAddToCart = (item) => {
    setTotalPrice(totalPrice + item.price);
    setProducts([item, ...products]);
  };

  return (
    <div>
      <TeaNavbar handleChangeCategory={handleChangeCategory} />
      <TeaMenu
        activeCategory={activeCategory}
        menu={menu}
        handleAddToCart={handleAddToCart}
      />
      <TeaCart totalPrice={totalPrice} products={products} />
    </div>
  );
};

export default Shop;
