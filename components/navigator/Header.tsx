export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <header className="h-20 shadow-sm bg-slate-500 flex justify-center items-center bg-gradient-to-r from-slate-700 to-slate-800 ">
      <nav className="flex justify-between items-center  w-10/12">
        <div className="block text-3xl text-neutral-50">Diyoor</div>
        <div className="invisible sm:visible">
          <ul className="flex  items-baseline">
            <li className="mr-6 transition-all">
              <a
                className="text-neutral-50 hover:text-slate-400 transition-all"
                href="#"
              >
                Game
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-neutral-50 hover:text-slate-400 transition-all"
                href="#"
              >
                Coffee
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-neutral-50 hover:text-slate-400 transition-all"
                href="#"
              >
                Alcohol
              </a>
            </li>
            <li>
              <button className="text-slate-900 mr-1 bg-slate-50 hover:text-slate-50 hover:bg-slate-500 p-1 px-3 rounded-3xl transition-all">
                Sing In
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
