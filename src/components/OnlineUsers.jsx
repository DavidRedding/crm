import useCollection from '../hooks/useCollection';
import Avatar from './Avatar';

const OnlineUsers = () => {
  const { documents, error } = useCollection('users');
  return (
    <div className="w-54 sm:bg-[#fbfbfb] hidden smlaptop:block text-right p-8 space-y-6 mt-2">
      <h2 className="pb-3 mb-8 font-semibold border-b">All Users</h2>
      {error && <div>{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className="flex items-center justify-end space-x-3 text-md">
            {user.online && <div className="w-2 h-2  bg-green-500 rounded-[50%]" />}
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
};

export default OnlineUsers;
