import "./App.css";
import { Casino } from "./Components/Casino";
import { EllosEligieron } from "./Components/EllosEligieron";
import { Mas } from "./Components/Mas";
import { Lanza } from "./Components/Lanza";
import { Myfooter } from "./Components/Myfooter";
import { Myheader } from "./Components/Myheader";
import { NuestrosAtributos } from "./Components/NuestrosAtributos";
import { ParaElegirnos } from "./Components/ParaElegirnos";
import { Poker } from "./Components/Poker";
import { Potenciando } from "./Components/Potenciando";
import BackToTop from "./Components/BackToTop";
// import { Preloader } from "./Components/Preloader";

function App() {
  return (
    <div className=" bg-[#00141b]  overflow-hidden">
      {/* <Preloader/> */}
      <BackToTop />
      <Myheader />
      <Poker />
      <NuestrosAtributos />
      <Potenciando />
      <Casino />
      <ParaElegirnos />
      <EllosEligieron />
      <Mas />
      <Lanza />
      <Myfooter />
    </div>
  );
}

export default App;
