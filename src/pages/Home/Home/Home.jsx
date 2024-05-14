import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import NewsLater from "../NewsLater/NewsLater";
import Writers from "../Writers/Writers";

function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <Writers />
      <NewsLater />
    </div>
  );
}

export default Home;
