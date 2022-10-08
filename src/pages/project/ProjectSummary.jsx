import { useHistory } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import { auth } from '../../firebase/config';
import useDb from '../../hooks/useDb';

const ProjectSummary = ({ project, id }) => {
  const { deleteDocument, res } = useDb('projects');
  let history = useHistory();

  const handleClick = () => {
    deleteDocument(id);

    if (!res.error) {
      history.push('/');
    }
  };
  return (
    <div className="laptop:col-span-3">
      <div className="p-5 bg-white rounded">
        <h1 className="font-bold ">{project.name}</h1>
        <p className="mb-1 text-md">By {project.createdBy.displayName} </p>
        <p className="text-md">Project due by {project.dueDate.toDate().toDateString()} </p>
        <p className="my-6 text-[#777]">{project.details}</p>
        <p className="mb-4 font-bold text-[#777]">Project is assigned to:</p>

        <div className="flex space-x-4">
          {project.assignedUsersList.map((user) => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
      </div>

      {project.createdBy.id === auth.currentUser.uid && (
        <button
          onClick={handleClick}
          className="p-2 mt-4 bg-white border rounded-md text-md border-var-prim text-var-prim hover:text-white hover:bg-var-prim"
        >
          Delete Project
        </button>
      )}
    </div>
  );
};

export default ProjectSummary;
