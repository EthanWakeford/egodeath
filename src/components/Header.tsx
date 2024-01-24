interface HeaderProps {
  title: string;
  navs: string[];
}

const Header: React.FC<HeaderProps> = ({ title, navs }) => {
  return (
    <header className='absolute top-0 z-50 flex h-32 w-screen flex-row content-between p-2 px-12 pt-12 text-center align-middle'>
      <div className='basis-[20%]'>
        <h2 className='text-left text-2xl hover:text-black'>
          <a href='/'>{title}</a>
        </h2>
      </div>
      <nav className='flex w-auto basis-[60%]  justify-around gap-4 px-32 align-middle'>
        {navs.map((nav) => (
          <span className=''>
            <a className='hover:text-black' href={`/${nav}`} key={nav}>
              {nav}
            </a>
          </span>
        ))}
      </nav>
      <a href='/contact' className='basis-[20%]'>
        <button className='bg-other rounded-xl px-2 text-2xl hover:text-black'>
          contact us
        </button>
      </a>
    </header>
  );
};

export default Header;
