interface HeaderProps {
  title: string;
  navs: string[];
}

const Header: React.FC<HeaderProps> = ({ title, navs }) => {
  return (
    <header className='absolute top-0 z-50 mt-2 flex w-screen justify-between px-4 text-center align-middle lg:mt-4 lg:grid lg:grid-cols-5 lg:px-0'>
      <div className='lg:col-span-1'>
        <h2 className='text-center text-2xl hover:text-black'>
          <a href='/'>{title}</a>
        </h2>
      </div>
      <nav className='hidden items-center justify-center gap-16 align-middle lg:col-span-3 lg:flex'>
        {navs.map((nav) => (
          <span className=''>
            <a className='hover:text-black' href={`/${nav}`} key={nav}>
              {nav}
            </a>
          </span>
        ))}
      </nav>
      <div className='hidden lg:col-span-1 lg:block'>
        <a href='/contact' className=''>
          <button className='rounded-xl bg-other px-4 py-2  text-xl hover:text-black'>
            contact us
          </button>
        </a>
      </div>
      <i className='fa-solid fa-bars cursor-pointer text-2xl hover:text-black lg:hidden'></i>
    </header>
  );
};

export default Header;
