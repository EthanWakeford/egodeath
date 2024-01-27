import { useState } from 'react';

interface HeaderProps {
  title: string;
  navs: string[];
}

const Header: React.FC<HeaderProps> = ({ title, navs }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className='fixed top-0 z-50 flex w-screen justify-between bg-white px-4 py-2 text-center align-middle lg:grid lg:grid-cols-5 lg:bg-transparent lg:px-0 lg:py-8'>
      <div className='items-center justify-center align-middle lg:col-span-1 lg:flex'>
        <h2 className='text-center text-2xl text-black hover:text-black lg:text-white'>
          <a href='/'>{title}</a>
        </h2>
      </div>
      <nav className='hidden items-center justify-center gap-16 align-middle lg:col-span-3 lg:flex'>
        {navs.map((nav) => (
          <a
            className='text-bold text-xl transition duration-300 ease-in-out hover:text-black'
            href={`/${nav}`}
            key={nav}
          >
            {nav}
          </a>
        ))}
      </nav>
      <i
        className={`fa-solid cursor-pointer text-2xl text-black transition-transform duration-300 lg:hidden ${isNavOpen ? 'fa-xmark rotate-180 opacity-100' : 'fa-bars rotate-0 opacity-50'}`}
        onClick={toggleNav}
      ></i>

      <div
        className={`absolute left-0 top-full z-50 w-full transform bg-white shadow-md lg:hidden ${isNavOpen ? 'scale-y-100' : 'scale-y-0'} origin-top transition-transform duration-300 ease-in-out`}
      >
        <nav className='flex flex-col'>
          {navs.map((nav, index) => (
            <a
              key={index}
              href={`/${nav}`}
              className='px-6 py-2 text-lg text-black hover:bg-gray-100'
              onClick={() => setIsNavOpen(false)}
            >
              {nav}
            </a>
          ))}
        </nav>
      </div>
      <div className='hidden lg:col-span-1 lg:block'>
        <a href='/contact' className=''>
          <button className='transform rounded-xl bg-other px-4  py-2 text-xl transition duration-300 ease-in-out hover:scale-110 hover:bg-tertiary hover:text-black'>
            contact us
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
