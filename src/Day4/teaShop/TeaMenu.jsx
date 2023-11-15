const TeaMenu = ({ activeCategory, menu, handleAddToCart }) => {
  return (
    <table>
      <tbody>
        {menu[activeCategory].varients.map((value, index) => (
          <tr key={index}>
            <td className="">{value.name}</td>
            <td className="">{value.price}</td>
            <td>
              <button onClick={() => handleAddToCart(value)}>
                Add to Cart
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeaMenu;
