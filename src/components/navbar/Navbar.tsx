import {  ShoppingCart } from "@phosphor-icons/react"
// import { Link } from "react-router-dom"

function Navbar() {

    return (

        <div className='
            w-full 
            bg-customGray
            text-customTeal
            flex 
            justify-center 
            py-3
            px-6
        '>
            <div className="
                container 
                flex 
                justify-right
                text-lg
                items-center
                gap-4
                font-medium
            ">
                    <img
                        src="src\assets\logo.png"
                        alt="Logo"
                        className='w-10
                        relative w-30 text-black'
                    />
                    <h1>FarmaVida</h1>
               
                <div className="flex-1 flex justify-right items-center relative w-30">
                    </div>

                <div className='flex gap-4 py-4'>
                    Categorias
                    Cadastrar Categoria
                    {/* <Link to='/categorias' className='hover:underline'>Categorias</Link>
                    <Link to='/cadcategoria' className='hover:underline'>Cadastrar Categoria</Link> */}
                    <ShoppingCart size={32} weight='bold' />
                </div>
            </div>
        </div>
    )
}

export default Navbar