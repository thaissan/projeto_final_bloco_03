
function Home() {
    return (
        <>
            <div className="
                bg-[#407BFF]
                flex 
                justify-center
                ">
                <div className='
                    container 
                    grid 
                    grid-cols-2 
                    text-white
                    '>
                    <div className="
                        flex 
                        flex-col 
                        gap-4 
                        items-center 
                        justify-center 
                        py-4
                        ">
                        <h2 className='
                            text-5xl 
                            font-bold
                            '>
                            Bem Vinde, a Farmavida!
                        </h2>
                        <p className='text-xl'>Aqui você encontra o melhor para sua saúde e bem-estar!</p>

                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="src\assets\home.svg"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home