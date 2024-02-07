import type { DocumentData } from 'firebase/firestore';

interface ProjectGalleryProps {
  projects: DocumentData[];
  galleryHeader: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projects, galleryHeader }) => {


  return (
    <>
      <div className='mb-10'>
        <h2 className='text-4xl text-black dark:text-white bg-ltbg2 dark:bg-dkbg2 py-4 large:py-10 font-bold text-center'>{galleryHeader}</h2>
        <ul className='align-center grid grid-cols-1 text-center sm:grid-cols-2 group-hover:shadow-inner hover:cursor-pointer'>
          {projects.map((project) => (
            <li
              key={project.slug} // Use the slug as a unique key for each project
              className='card-zoom group relative z-10 flex h-64 items-center justify-center bg-cover bg-center'
              onClick={() => window.location.href = `/${project.project_category.toLowerCase()}/${project.slug}`}
            >
              <div
                className='card-zoom-image brightness-75 hover:zoom-in z-0 lg:brightness-100 hover:brightness-50'
                style={{
                  backgroundImage: `url(${project.hero_section.project_hero_photo})`,
                }}
              ></div>
              <span className='z-50 text-xl lg:opacity-0 bg-white text-black dark:text-white dark:bg-black p-2 rounded bg-opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100 scale-110 hover:bg-opacity-100'>
                {project.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectGallery;
