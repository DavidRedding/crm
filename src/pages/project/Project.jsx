import { useParams } from 'react-router-dom';
import useDocument from '../../hooks/useDocument';
import ReactLoading from 'react-loading';
import ProjectSummary from './ProjectSummary';
import ProjectComments from './ProjectComments';

const Project = () => {
  const { id } = useParams();
  const { doc, error } = useDocument('projects', id);

  if (error) {
    return <h3>{error}</h3>;
  }
  if (!doc) {
    return (
      <div className="flex items-center justify-center space-x-2">
        <h3 className="text-lg">Loading</h3>
        <ReactLoading height="5%" width="5%" color="#8d69f1" />
      </div>
    );
  }

  return (
    <div className="pb-6 laptop:grid-cols-5 laptop:grid laptop:gap-16 ">
      <ProjectSummary project={doc} id={id} />
      <ProjectComments id={id} doc={doc} />
    </div>
  );
};

export default Project;
