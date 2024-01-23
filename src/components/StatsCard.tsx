import { useInViewport } from 'react-in-viewport';
import { useRef } from 'react';

interface Props {
  title: string;
  body: string;
}

const StatsCard: React.FC<Props> = ({ body, title }) => {
  const ref = useRef(null);
  const { inViewport } = useInViewport(ref);

  // TODO: make the animation only run one time

  return (
    <div className='h-[80vh] bg-zinc-900 px-32'>
      <div
        ref={ref}
        className={`flex h-full flex-col items-center justify-evenly ${inViewport ? 'fade-in-up' : ''}`}
      >
        <h3 className='text-xl'>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default StatsCard;
