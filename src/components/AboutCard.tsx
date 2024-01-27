interface AboutCardProps {
  aboutTitle: string;
  aboutBody: string;
  linkText: string;
}

const AboutCard: React.FC<AboutCardProps> = ({
  aboutTitle,
  aboutBody,
  linkText,
}) => {
  return (
    <>
      <div className='h-[75vh] bg-white px-[10vw] py-16 text-center lg:px-[20vw] lg:py-24 dark:bg-black'>
        <div className='flex h-[100%] flex-col justify-around'>
          <h2 className='text-2xl lg:text-4xl'>{aboutTitle}</h2>
          <h3 className='text-lg text-white lg:text-2xl'>{aboutBody}</h3>
          <a className='text-tertiary text-lg underline lg:text-2xl' href='/'>
            {linkText}
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
