import Card from "../Card/Card";

function CardView() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default CardView;
