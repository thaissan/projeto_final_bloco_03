import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-slate-700  text-white font-bold text-2xl">
        Categoria
      </header>
      <p className="p-8 text-3xl bg-white h-full">{categoria.tipo}</p>
      <div className="flex">
        {/* <Link to={`/editarcategoria/${categoria.id}`} */}
        <div
          className="w-full text-slate-100 bg-teal-400 hover:bg-teal-700 
                        flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </div>
        {/* </Link> */}

        {/* <Link to={`/deletarcategoria/${categoria.id}`} */}
        <div
          className="text-slate-100 bg-customRed hover:bg-red-700 w-full 
                        flex items-center justify-center"
        >
          <button>Deletar</button>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default CardCategorias;