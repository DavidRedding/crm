import { useState } from 'react';
import { auth, timestamp } from '../../firebase/config';

const ProjectComments = () => {
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

    console.log(commentToAdd);
  };
  return (
    <form onSubmit={handleSubmit} className="w-4/12 ">
      <h4 className="mb-6 font-bold">Project Comments</h4>

      <label>
        <p>Add new comment:</p>
        <textarea
          required
          onChange={(e) => setNewComment(e.target.value)}
          value={newComment}
          className="w-full p-1 my-2 border"
        />
      </label>

      <button className="px-2 block p-1  bg-white border rounded-[.25rem] text-var-prim border-var-prim hover:text-white hover:bg-var-prim">
        Add Comment
      </button>
    </form>
  );
};

export default ProjectComments;
