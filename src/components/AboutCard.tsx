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
      <div className='h-[75vh] bg-neutral-950 dark:bg-white px-[25vw] py-48 text-center'>
        <div className='flex h-[100%] flex-col justify-between'>
          <h2 className='mt-8 text-4xl'>{aboutTitle}</h2>
          <h3 className='mt-8 text-2xl text-white'>{aboutBody}</h3>
          <a className='text-tertiary mt-8 text-2xl underline' href='/'>
            {linkText}
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
