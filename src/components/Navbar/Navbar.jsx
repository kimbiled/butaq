import { animateScroll as scroll} from 'react-scroll';
export default function Navbar() {
  const scrollToContacts = () => {
		scroll.scrollTo(4110);
	  };
      const scrollToUs = () => {
		scroll.scrollTo(1150);
	  };
    const scrollToProblems = () => {
      scroll.scrollTo(850);
      };
        const scrollToSolution = () => {
      scroll.scrollTo(1150);
      };
    return(
        <>
          <nav className="bg-slate-100">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap">Butaq</span>
              </a>
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-slate-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                  <li>
                    <a href="#" className=" py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
                  </li>
                  <li>
                    <a href="#" className=" py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0" onClick={scrollToProblems}>Problems</a>
                  </li>
                  <li>
                    <a href="#" className=" py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0" onClick={scrollToSolution}>Solution</a>
                  </li>
                  <li>
                    <a href="#" className=" py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0" onClick={scrollToUs}>About us</a>
                  </li>
                  <li>
                    <a href="#" className=" py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0" onClick={scrollToContacts}>Contacts</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        </>
        )
}