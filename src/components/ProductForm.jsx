import { useState } from "react";
import "../styles/ProductForm.css";

const ProductForm = ({ onSubmit, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || "");
  const [price, setPrice] = useState(initialData.price || "");
  const [image, setImage] = useState(initialData.image || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !image) {
      alert("Barcha maydonlarni to'ldiring!");
      return;
    }
    const productData = { name, price: parseFloat(price), image };
    onSubmit(productData);
  };

  return (
    <div className="product-form-container">
      <h2>
        {initialData.id ? "Mahsulotni Yangilash" : "Yangi Mahsulot Qo'shish"}
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Mahsulot nomi"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Narx"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Rasm URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button type="submit">
          {initialData.id ? "Yangilash" : "Qo'shish"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
