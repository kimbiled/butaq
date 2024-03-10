export default function Hero() {
    return(
        <>
        <div className="relative" id="home">
    <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-[#00C738] to-green-200 "></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-green-400 to-green-200"></div>
    </div>
    <div className="max-w-5xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="relative pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
                <h1 className="flex flex-col text-gray-900 font-bold text-5xl md:text-6xl xl:text-7xl">Sheker <span className="text-[#00C738]">Emes</span></h1>
                <p className="mt-8 text-gray-700">Есірткіге табынуға емес, оны қаштыртуға ұмтыл!</p>
                <div className="mt-16 flex flex-row justify-center gap-y-4 gap-x-6">
                    <a
                      href="#"
                      className="relative flex h-11 w-1/2 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-[#00FF29] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                    >
                      <span className="relative font-semibold">Начать</span>
                    </a>
                    <a
                      href="#"
                      className="relative flex h-11 w-1/2 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 :before:border-gray-700"
                    >
                      <span
                        className="relative text-base font-semibold text-primary "
                        >Узнать больше</span>
                    </a>
                </div>
                <div className="hidden py-8 mt-16 border-y border-gray-100 sm:flex justify-between">
                    <div className="text-left">
                        <h6 className="text-lg font-semibold text-gray-700 ">Высокие показатели</h6>
                        <p className="mt-2 text-gray-500">Текст какой то сюда</p>
                    </div>
                    <div className="text-left">
                        <h6 className="text-lg font-semibold text-gray-700">Низкие показатели</h6>
                        <p className="mt-2 text-gray-500">Текст какой то сюда</p>
                    </div>
                    <div className="text-left">
                        <h6 className="text-lg font-semibold text-gray-700">Ну пиздец</h6>
                        <p className="mt-2 text-gray-500">Текст какой то сюда</p>
                    </div>
                </div>
            </div>
            <div className="mt-12 flex flex-row justify-around">
                <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Logo_MVD_KZ.jpg" className="h-20 w-auto mx-auto" loading="lazy" alt="mvd logo" width="" height="" />
                  </div>
                  <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Logo_MVD_KZ.jpg" className="h-20 w-auto mx-auto" loading="lazy" alt="mvd logo" width="" height="" />
                  </div>
              </div>
        </div>
    </div>
</div>
        </>
    )
}