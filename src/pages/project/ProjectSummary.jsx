import Avatar from '../../components/Avatar';

const ProjectSummary = ({ doc }) => {
  console.log(doc);
  return (
    <div className="w-[60%] bg-white p-7 rounded">
      <h1 className="mb-2 font-bold">{doc.name}</h1>
      <p className="text-md">Project due by {doc.dueDate.toDate().toDateString()} </p>
      <p className="my-6 text-gray-400">{doc.details}</p>
      <p className="mb-5 font-bold text-gray-400">Project is assigned to:</p>
      <div className="flex space-x-4">
        {doc.assignedUsersList.map((user) => (
          <div key={user.id}>
            <Avatar src={user.photoURL} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSummary;
