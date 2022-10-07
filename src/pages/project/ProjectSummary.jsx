import Avatar from '../../components/Avatar';

const ProjectSummary = ({ doc }) => (
  <div className="laptop:col-span-3">
    <div className="p-5 bg-white rounded">
      <h1 className="mb-2 font-bold ">{doc.name}</h1>
      <p className="text-md">Project due by {doc.dueDate.toDate().toDateString()} </p>
      <p className="my-6 text-[#777]">{doc.details}</p>
      <p className="mb-4 font-bold text-[#777]">Project is assigned to:</p>
      <div className="flex space-x-4">
        {doc.assignedUsersList.map((user) => (
          <div key={user.id}>
            <Avatar src={user.photoURL} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectSummary;
