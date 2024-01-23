interface HeaderProps {
  title: string;
  navs: string[];
}

const Header: React.FC<HeaderProps> = ({ title, navs }) => {
  return (
    <header className='absolute top-0 z-50 flex h-32 w-screen flex-row content-between p-2 px-12 pt-12 text-center align-middle'>
      <a href='/'>
        <h2 className=' basis-[20%] text-left text-2xl'>{title}</h2>
      </a>
      <nav className='flex w-auto basis-[60%]  justify-around gap-4 px-32 align-middle'>
        {navs.map((nav) => (
          <span className=''>
            <a className='hover:text-zinc-700' href={`/${nav}`}>
              {nav}
            </a>
          </span>
        ))}
      </nav>
      <i className='fa-solid fa-magnifying-glass basis-[20%] text-right align-middle text-2xl hover:text-zinc-700'></i>
    </header>
  );
};

export default Header;
