import { products } from "./data/data";
import { Card } from "./components/card";
import { Header } from "./components/header";
import { useSelector } from "react-redux";
import { Card2 } from "./components/card2";

function App() {
  const { productList } = useSelector((state) => state.product);
  return (
    <div className="container mx-auto bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 min-h-screen py-8">
      <Header />
      <div className="flex mt-8">
        <div className="flex flex-wrap w-full gap-4">
          {products.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
        <div className="border border-blue-500 h-screen w-[500px] overflow-y-scroll p-5 bg-white shadow-xl rounded-lg ml-4">
          {productList.map((item) => (
            <Card2 key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;