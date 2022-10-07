import { useParams } from 'react-router-dom';
import useDocument from '../../hooks/useDocument';

const Project = () => {
  const params = useParams();
  const { doc, error } = useDocument('projects', params.id);

  return (
    <div>
      {error && <h3>{error}</h3>}
      {doc && <h3>{doc.name}</h3>}
    </div>
  );
};

export default Project;
