import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  title: string;
  navs: { link: string; name: string }[];
  cta: string;
}

const Header: React.FC<HeaderProps> = ({ title, navs }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  console.log(`Step 1: ${isNavOpen}`);

  useEffect(() => {
    const headerHeight = 500; // Adjust as needed

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
    console.log(isNavOpen);
    setIsScrolled(isNavOpen ? false : true);
    console.log(`IsScrolled: ${isScrolled}`)
  };

  return (
    <header
      className={`fixed top-0 z-40 flex w-screen justify-between px-4 py-2 text-center align-middle shadow-2xl transition-all duration-1000 lg:grid lg:grid-cols-5 lg:px-0 lg:py-8 ${isScrolled ? 'bg-opacity-100' : 'bg-opacity-50 dark:bg-opacity-50'} bg-ltbg1 lg:hover:bg-opacity-100 dark:bg-dkbg1`}
    >
      <div className='items-center justify-center align-middle lg:col-span-1 lg:flex'>
        <h2 className='text-center text-2xl text-black transition-all duration-300 hover:text-accent dark:text-white'>
          <a href='/'>{title}</a>
        </h2>
      </div>
      <nav className='hidden items-center justify-center gap-16 align-middle lg:col-span-3 lg:flex'>
        {navs.map((nav) => (
          <a
            className='text-bold text-base text-black transition duration-300 ease-in-out hover:text-accent dark:text-white'
            href={`${nav.link}`}
            key={nav.name}
          >
            {nav.name}
          </a>
        ))}
      </nav>
      <div onClick={toggleNav} className='z-50 w-10 cursor-pointer text-2xl text-black transition-transform duration-300 lg:hidden dark:text-white'>
        {isNavOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
      </div>

      <div
        className={`absolute left-0 top-full z-50 w-full transform bg-white shadow-md lg:hidden ${isNavOpen ? 'scale-y-100' : 'scale-y-0'} origin-top transition-transform duration-300 ease-in-out`}
      >
        <nav className='flex flex-col hover:bg-dkbg2 dark:bg-dkbg1'>
          {navs.map((nav, index) => (
            <a
              key={index}
              href={`${nav.link}`}
              className='px-6 py-4 text-base text-black dark:bg-dkbg1 dark:text-white'
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
