import Collections from "../components/Home/Collections";
import HeroBanner from "../components/Home/HeroBanner";
import ItemCategory from "../components/Home/ItemCategory";

function Home({ itemNum }) {
  return (
    <div>
      <HeroBanner />
      <Collections />
      <ItemCategory itemNum={itemNum} />
    </div>
  );
}

export default Home;
