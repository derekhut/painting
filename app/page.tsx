import Header from "./header";
import Hero from  "./hero";
import Photo from  "./photo";
import { SearchBox } from "./search";
import Result from  "./result";
import Return_page from  "./return_page";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <SearchBox />
      <Photo/>
      <Result/>
      <Return_page/>
    </div>
  );
}