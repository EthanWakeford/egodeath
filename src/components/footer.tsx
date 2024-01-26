interface Props {
  navs: string[];
  address: string;
  socials: string[];
  phone: string;
  copyright: string;
}

const Footer: React.FC<Props> = ({
  address,
  copyright,
  navs,
  phone,
  socials,
}) => {
  return <div className='px-16 py-8'></div>;
};

export default Footer;
