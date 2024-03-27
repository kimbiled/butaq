import { eb, mvd} from "../../assets/partners/index";
export default function Hero() {
    return(
        <>
        <div className="relative" id="home">
    <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-[#4895ef] to-blue-300 "></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-blue-400 to-blue-300"></div>
    </div>
    <div className="max-w-5xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="relative pt-36 mx-auto">
            <div className="lg:w-full text-center mx-auto">
                <h1 className="flex flex-col text-gray-900 font-bold text-5xl md:text-6xl xl:text-7xl">Sheker <span className="text-[#4895ef]">Emes</span></h1>
                <p className="mt-8 text-gray-700">Есірткіге табынуға емес, оны қаштыртуға ұмтыл!</p>
                <div className="mt-16 flex flex-row justify-center gap-y-4 gap-x-6">
                    <a
                      href="#"
                      className="relative flex h-11 w-[150px] items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-[#4895ef] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative font-semibold text-white">Начать</span>
                    </a>
                    <a
                      href="#"
                      className="relative flex h-11 w-[250px] items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 :before:border-gray-700"
                    >
                      <span
                        className="relative text-base font-semibold text-primary "
                        >Узнать больше</span>
                    </a>
                </div>
                <div className="hidden py-4 mt-16 border-y border-gray-100 sm:flex justify-around">
                    <div className="text-center">
                        <h6 className="text-lg font-semibold text-gray-700 ml-8">516</h6>
                        <p className="mt-2 text-gray-500">Незаконное культивирование растений, содержащих наркотические вещества <br></br>(2023-2024)</p>
                    </div>
                    <div className="text-center">
                        <h6 className="text-lg font-semibold text-gray-700 ml-4">3271</h6>
                        <p className="mt-2 text-gray-500">Незаконное изготовление, хранение, сбыт наркотических веществ <br></br>(2023-2024)</p>
                    </div>
                    <div className="text-center">
                        <h6 className="text-lg font-semibold text-gray-700">15</h6>
                        <p className="mt-2 text-gray-500">Организация притонов для потребления наркотических веществ <br></br>(2023-2024)</p>
                    </div>
                </div>
            </div>
            <div className="mt-12 flex flex-col justify-around">
                <h2 className="mb-6 text-3xl text-center font-medium text-gray-800">Наши партнеры</h2>
                {/* <div className="flex flex-row justify-around">
                    <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                        <img src={mvd} className="h-20 w-auto mx-auto" loading="lazy" alt="mvd logo" width="" height="" />
                    </div>
                    <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                        <img src={eb} className="h-20 w-auto mx-auto" loading="lazy" alt="Esirtkisiz Bolashaq" width="" height="" />
                    </div>
                </div> */}
                <div className="flex flex-row justify-between">
                    <a href="#" class="flex flex-col w-[480px] h-48 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Министерство внутренних дел Казахстана</h5>
                            <p class="mb-3 font-normal text-gray-700">Исполнительный орган, осуществляющий руководство системой органов внутренних дел РК в области гражданской обороны.</p>
                        </div>
                        <img class="rounded-t-lg md:w-48 md:rounded-none md:rounded-s-lg w-36 h-36" src={mvd} alt="" />
                    </a>
                    <a href="#" class="flex flex-col w-[480px] h-48 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                        <img class="w-full rounded-t-lg md:w-48 md:rounded-none md:rounded-s-lg w-36 h-36" src={eb} alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">КФ «Будущее без наркотиков»</h5>
                            <p class="mb-3 font-normal text-gray-700">Борется с наркоманией через профилактику, социальную адаптацию и поддержку законодательных инициатив для обеспечения здорового общества.</p>
                        </div>
                    </a>
                </div>

                

            </div>
        </div>
    </div>
</div>
        </>
    )
}