export default function Navbar() {
    return(
        <>
          <nav className="bg-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap">ShekerEmes</span>
              </a>
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                  <li>
                    <a href="#" className=" py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">Главная</a>
                  </li>
                  <li>
                    <a href="#" className=" py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">О нас</a>
                  </li>
                  <li>
                    <a href="#" className=" py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">Сервис</a>
                  </li>
                  <li>
                    <a href="#" className=" py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">О проблеме</a>
                  </li>
                  <li>
                    <a href="#" className=" py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">Контакты</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        </>
        )
}