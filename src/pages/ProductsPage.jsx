import { useState } from "react";
import {
  useGetProductsQuery,
  useUpdateProductMutation,
} from "../api/productsApi";
import ProductCard from "../components/ProductForm";
import "../styles/ProductsPage.css";

const ProductsPage = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const [updateProduct] = useUpdateProductMutation();
  const [editingProduct, setEditingProduct] = useState(null); 

  const handleUpdate = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setEditingProduct(productToEdit); 
  };

  const handleFormSubmit = (productData) => {
    if (editingProduct) {
      updateProduct({ id: editingProduct.id, body: productData })
        .unwrap()
        .then(() => setEditingProduct(null)) 
        .catch((err) => console.error("Yangilashda xatolik yuz berdi:", err));
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Xatolik yuz berdi...</p>;

  return (
    <div className="products-page-container">
      {editingProduct && (
        <ProductForm onSubmit={handleFormSubmit} initialData={editingProduct} />
      )}
      <div className="products-container">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
