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
      <div className='h-[75vh] bg-neutral-950 px-[25vw] py-48 text-center'>
        <div className='flex h-[100%] flex-col justify-between'>
          <h2 className='mt-8 text-4xl'>{aboutTitle}</h2>
          <h3 className='mt-8 text-2xl text-neutral-400'>{aboutBody}</h3>
          <a className='mt-8 text-2xl text-red-400 underline' href='/'>
            {linkText}
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
