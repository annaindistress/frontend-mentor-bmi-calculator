import Header from "./Header";
import Calculator from "./Calculator";
import Guide from "./Guide";
import Limitations from "./Limitations";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Calculator />
        <Guide />
        <Limitations />
      </main>
    </>
  );
}
