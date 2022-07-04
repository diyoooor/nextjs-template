export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <header className="h-20 shadow-sm bg-slate-500 flex justify-center items-center bg-gradient-to-r from-green-900 to-green-700 ">
      <nav className="flex justify-between items-center  w-10/12">
        <div className="block text-3xl text-neutral-50">Logo</div>
        <div className="invisible sm:visible">
          <ul className="flex  items-baseline">
            <li className="mr-6 transition-all">
              <a
                className="text-neutral-50 hover:underline transition-all"
                href="#"
              >
                Link
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-neutral-50 hover:underline transition-all"
                href="#"
              >
                Link
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-neutral-50 hover:underline transition-all"
                href="#"
              >
                Link
              </a>
            </li>
            <li>
              <button className="text-neutral-50 mr-1 bg-green-800 hover:text-green-900 hover:bg-neutral-50 p-1 px-3 rounded-3xl transition-all">
                Sing In
              </button>
              <button className="bg-neutral-50 text-green-900 p-1 px-3 rounded-3xl  active:rounded-3xl transition-all">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
