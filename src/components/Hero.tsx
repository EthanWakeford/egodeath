interface HeroProps {
  welcomeText: string;
  tagline: string;
}

const Hero: React.FC<HeroProps> = ({ welcomeText, tagline }) => {
  return (
    <>
      <div className='h-screen pl-16 pr-80 pt-96 text-left'>
        <div className="fade-in-up" >
          <h2 className='text-2xl'>{welcomeText}</h2>
          <h1 className='mt-20 text-6xl tracking-widest'>{tagline}</h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
