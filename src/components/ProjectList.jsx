import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-5 phone:grid-cols-2 laptop:grid-cols-3">
      {projects.length === 0 && <p>No projects yet!</p>}

      {projects.map((project) => (
        <Link to={`/project/${project.id}`} key={project.id}>
          <div className="p-3 bg-white rounded-md shadow-md ">
            <h3 className="font-semibold ">{project.name}</h3>
            <p className="text-xs text-gray-400 ">Due by {project.dueDate.toDate().toDateString()} </p>
            <hr className="my-4 " />

            {project.assignedUsersList.map((user) => (
              <div key={user.id} className="inline-block w-8 h-8 mr-2 ">
                <img src={user.photoURL} className="w-full h-full rounded-[50%]" />
              </div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
