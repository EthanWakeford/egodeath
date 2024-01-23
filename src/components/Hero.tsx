interface HeroProps {
  welcomeText: string;
  tagline: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ welcomeText, tagline, backgroundImage }) => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };
  return (
    <div style={heroStyle}>
      <div className='h-screen pl-16 pr-80 pt-96 text-left'>
        <div className="fade-in-up">
          <h2 className='text-2xl'>{welcomeText}</h2>
          <h1 className='mt-20 text-6xl tracking-widest'>{tagline}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
