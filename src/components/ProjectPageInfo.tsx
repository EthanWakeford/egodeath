interface Props {
  title: string;
  description: string;
  company?: string;
  credits?: string[];
}

const ProjectPageInfo: React.FC<Props> = ({
  description,
  title,
  company,
  credits,
}) => {
  return (
    <div className='px-64 py-32'>
      <h1 className='text-center text-2xl'>{title}</h1>
      <h3 className='text-md mt-4 text-center'>{company}</h3>
      <div className='grid grid-cols-4 pt-32'>
        <h2 className='col-span-3 px-4 text-xl'>{description}</h2>
        <div className='col-span-1 px-4 '>
          <h3 className=' text-center text-lg'>Credits</h3>
          <div className='flex flex-wrap justify-center gap-2'>
            {credits &&
              credits.map((credit) => <p className='text-md'>{credit}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageInfo;
