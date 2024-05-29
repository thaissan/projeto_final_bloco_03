import "./App.css";
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategoria";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
  
     <Navbar />
     <div>
      <Home />
     </div>
     {/* <ListarCategorias /> 
     <FormCategoria />
     <DeletarCategoria /> */}
     <Footer />

    </>
  );
}
export default App;
