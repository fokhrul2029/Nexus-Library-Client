 
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";

function Category() { 

  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios
      .get("https://b9-a11-jwt-battlefield-backend.vercel.app/books-categories")
      .then((res) => setCategories(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="py-14">
      <h1 className="text-4xl text-center font-semibold">Books Categories</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {categories?.map((category) => (
          <Card key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Category;
