import Card from "../Card/Card";

function Category() {
  return (
    <div className="py-14">
      <h1 className="text-4xl text-center font-semibold">Books Categories</h1>
      <div className="grid grid-cols-3 gap-8 py-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Category;
