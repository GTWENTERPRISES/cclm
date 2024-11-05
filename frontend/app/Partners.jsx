const Partners = () => {
    return (
        <>
            <div className="w-full bg-blue-900 text-gray-300 pt-20 pb-16 md:pt-24 md:pb-20">
                <div className="mx-auto max-w-screen-lg px-8">
                    <div className="flex flex-wrap mb-10">
                        <div className="w-full max-w-full flex-shrink-0 lg:mt-2 lg:w-1/3 lg:flex-none">
                            <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-yellow-400 xl:text-base">Nuestros Clientes</h2>
                            <h3 className="mb-3 font-bold text-white sm:text-2xl xl:text-4xl">Confiado por más de 300 clientes</h3>
                            <p className="text-yellow-400">Brindamos soluciones para hacer la vida más fácil a nuestros clientes.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-4">
                        <div className="flex flex-col justify-center items-center">
                            <img src="/logs1.png" alt="Logo del Cliente" className="max-h-36 mb-2" />
                            <span className="text-gray-300 text-lg font-bold">Nombre Empresa 1</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src="/logs1.png" alt="Logo del Cliente" className="max-h-36 mb-2" />
                            <span className="text-gray-300 text-lg font-bold">Nombre Empresa 2</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src="/logs1.png" alt="Logo del Cliente" className="max-h-36 mb-2" />
                            <span className="text-gray-300 text-lg font-bold">Nombre Empresa 3</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src="/logs1.png" alt="Logo del Cliente" className="max-h-36 mb-2" />
                            <span className="text-gray-300 text-lg font-bold">Nombre Empresa 4</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src="/logs1.png" alt="Logo del Cliente" className="max-h-36 mb-2" />
                            <span className="text-gray-300 text-lg font-bold">Nombre Empresa 5</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src="/logs1.png" alt="Logo del Cliente" className="max-h-36 mb-2" />
                            <span className="text-gray-300 text-lg font-bold">Nombre Empresa 6</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src="/logs1.png" alt="Logo del Cliente" className="max-h-36 mb-2" />
                            <span className="text-gray-300 text-lg font-bold">Nombre Empresa 7</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src="/logs1.png" alt="Logo del Cliente" className="max-h-36 mb-2" />
                            <span className="text-gray-300 text-lg font-bold">Nombre Empresa 8</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Partners;
