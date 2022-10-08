import { useState } from 'react';
import { auth, timestamp } from '../../firebase/config';
import useDb from '../../hooks/useDb';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const ProjectComments = ({ id, doc }) => {
  const { updateDocument, res } = useDb('projects');

  const [newComment, setNewComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: auth.currentUser.displayName,
      photoURL: auth.currentUser.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    await updateDocument(id, { comments: [...doc.comments, commentToAdd] });

    if (!res.error) {
      setNewComment('');
    }
  };

  return (
    <div className="laptop:col-span-2">
      <h4 className="mb-6 font-bold">Project Comments</h4>

      <ul className="flex flex-col gap-4">
        {doc.comments.length > 0 &&
          doc.comments.map((comment) => (
            <li key={comment.id} className="p-3 bg-white rounded-md shadow-md">
              <div className="flex items-center gap-2">
                <img className="w-8 h-8 rounded-[50%]" src={comment.photoURL} />
                <p>{comment.displayName}</p>
              </div>
              <p className="my-2 text-[#777]">
                {formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true })}{' '}
              </p>
              <p className="text-[#777]">{comment.content}</p>
            </li>
          ))}
      </ul>

      <form onSubmit={handleSubmit} className="w-full mt-6 ">
        <label>
          <p>Add new comment:</p>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
            className="w-full p-1 my-2 border"
          />
        </label>

        <button className="px-2 text-sm block p-1 bg-white border rounded-[.25rem] text-var-prim border-var-prim hover:text-white hover:bg-var-prim">
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default ProjectComments;
