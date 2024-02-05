import { useState, useEffect } from 'react';

interface HeaderProps {
  title: string;
  navs: { link: string; name: string }[];
  cta: string;
}

const Header: React.FC<HeaderProps> = ({ title, navs }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const headerHeight = 100; // Adjust as needed

    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > headerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header
      className={`shadow-2xl fixed top-0 z-50 flex w-screen justify-between px-4 py-2 text-center align-middle transition-all duration-1000 lg:grid lg:grid-cols-5 lg:px-0 lg:py-8 ${isScrolled ? 'bg-opacity-100' : 'bg-opacity-50 dark:bg-opacity-50'} bg-ltbg1 dark:bg-dkbg1`}
    >
      <div className='items-center justify-center align-middle lg:col-span-1 lg:flex'>
        <h2 className='text-center text-2xl text-black transition-all duration-300 hover:text-black dark:text-white'>
          <a href='/'>{title}</a>
        </h2>
      </div>
      <nav className='hidden items-center justify-center gap-16 align-middle lg:col-span-3 lg:flex'>
        {navs.map((nav) => (
          <a
            className='text-bold text-base transition duration-300 ease-in-out hover:text-black text-black dark:text-white'
            href={`${nav.link}`}
            key={nav.name}
          >
            {nav.name}
          </a>
        ))}
      </nav>
      <i
        className={`fa-solid cursor-pointer text-2xl text-black transition-transform duration-300 lg:hidden dark:text-white ${isNavOpen ? 'fa-xmark rotate-180 opacity-100' : 'fa-bars rotate-0 opacity-50'}`}
        onClick={toggleNav}
      ></i>

      <div
        className={`absolute left-0 top-full z-50 w-full transform bg-white shadow-md lg:hidden ${isNavOpen ? 'scale-y-100' : 'scale-y-0'} origin-top transition-transform duration-300 ease-in-out`}
      >
        <nav className='flex flex-col hover:bg-dkbg2 dark:bg-dkbg1'>
          {navs.map((nav, index) => (
            <a
              key={index}
              href={`${nav.link}`}
              className='px-6 py-4 text-base text-black dark:bg-dkbg1 dark:text-white'
              onClick={() => setIsNavOpen(false)}
            >
              {nav.name}
            </a>
          ))}
          <a href='/contact' className=''>
            <button className='bg-other my-2 transform rounded-xl bg-tertiary px-4 py-2 text-base transition duration-300 ease-in-out hover:scale-110 hover:bg-accent'>
              CONTACT US
            </button>
          </a>
        </nav>
      </div>
      <div className='hidden lg:col-span-1 lg:block'>
        <a href='/contact' className=''>
          <button className='bg-other transform rounded-xl bg-tertiary px-4 py-2 text-lg transition duration-300 ease-in-out hover:scale-110 hover:bg-accent'>
            CONTACT US
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
