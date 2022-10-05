import useCollection from '../hooks/useCollection';
import Avatar from './Avatar';

const OnlineUsers = () => {
  const { documents, error } = useCollection('users');
  return (
    <div className="w-60 bg-[#fbfbfb] text-right p-8 space-y-6">
      <h2 className="pb-3 mb-8 text-2xl font-bold border-b">All Users</h2>
      {error && <div>{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className="flex items-center justify-end space-x-3 text-xl">
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
};

export default OnlineUsers;
