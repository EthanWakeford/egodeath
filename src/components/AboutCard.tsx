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
      <div className='h-[75vh] bg-ltbg1 px-[10vw] py-16 text-center lg:px-[20vw] lg:py-24 dark:bg-dkbg1'>
        <div className='flex h-[100%] flex-col justify-around'>
          <h2 className='text-2xl text-black lg:text-4xl dark:text-white'>
            {aboutTitle}
          </h2>
          <h3 className='text-lg text-black lg:text-2xl dark:text-white'>
            {aboutBody}
          </h3>
          <a className='text-lg text-tertiary underline lg:text-2xl' href='/'>
            {linkText}
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
