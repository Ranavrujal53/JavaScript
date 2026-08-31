import React, { useCallback, useMemo, useState } from "react";
import LikeButton from "./LikeButton";

function ProductList() {
  const [likes, setLikes] = useState(0);

  const [products] = useState(() =>
    Array.from({ length: 1000 }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
      price: (index + 1) * 100,
    }))
  );

  // useCallback
  const handleLike = useCallback(() => {
    setLikes((prev) => prev + 1);
  }, []);

  // useMemo
  const productList = useMemo(() => {
    console.log("Generating Product List");

    return products.map((product) => (
      <div
        key={product.id}
        className="rounded-xl border bg-white p-4 shadow"
      >
        <h3 className="font-bold">{product.name}</h3>

        <p className="text-green-600">
          ₹{product.price}
        </p>

        <LikeButton
          likes={likes}
          onLike={handleLike}
        />
      </div>
    ));
  }, [products, likes, handleLike]);

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Product List
      </h1>

      <div className="grid grid-cols-4 gap-4">
        {productList}
      </div>
    </div>
  );
}

export default ProductList;