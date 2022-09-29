import { useState } from 'react';
// import { useSignup } from '../../hooks/useSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleFileChange = (e) => {
    setThumbnail(null);
    const selected = e.target.files[0];

    if (!selected) {
      setThumbnailError('Please choose a file');
      return;
    }

    if (selected.size > 100000) {
      setThumbnailError('File size may not exceed 100KB');
      return;
    }
    setThumbnailError(null);
    setThumbnail(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName, thumbnail);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-7/12 p-4 mx-auto space-y-5 bg-white border shadow-lg">
      <h2 className="text-xl font-bold">Sign up</h2>
      <label className="space-y-1">
        <span>email:</span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-full p-1 border rounded-sm focus:outline-black"
          type="email"
          required
        />
      </label>

      <label className="space-y-1">
        <span>password:</span>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="w-full p-1 border rounded-sm focus:outline-black"
          type="password"
          required
        />
      </label>

      <label className="space-y-1">
        <h1>display name:</h1>
        <input
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          className="w-full p-1 border rounded-sm focus:outline-black"
          type="text"
          required
        />
      </label>

      <label className="space-y-1">
        <h1>profile thumbnail:</h1>
        <input
          onChange={handleFileChange}
          type="file"
          accept="image/*"
          className="w-full p-1 text-gray-500 border rounded-sm focus:outline-black"
          required
        />
        {thumbnailError && <span className="block font-semibold text-red-500">{thumbnailError}</span>}
      </label>

      {thumbnailError && (
        <button disabled className="w-1/4 p-1 text-gray-400 border border-gray-400 rounded-sm">
          Sign Up
        </button>
      )}

      {!thumbnailError && (
        <button className="w-1/4 p-1 border rounded-sm border-var-prim text-var-prim hover:text-white hover:bg-var-prim">
          Sign Up
        </button>
      )}
    </form>
  );
};

export default Signup;
