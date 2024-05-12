import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

function Category() {
  const categories = useLoaderData();

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
