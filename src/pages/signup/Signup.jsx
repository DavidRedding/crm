import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { signup, error, isPending } = useSignup();

  const handleFileChange = (e) => {
    setThumbnail(null);
    const selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError('Please choose a file');
      return;
    }

    if (selected.size > 300000) {
      setThumbnailError('File size may not exceed 300KB');
      return;
    }
    setThumbnailError(null);
    setThumbnail(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-sm p-8 mx-auto space-y-5 bg-white border shadow-lg">
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

      {/* Error with thumbnail */}
      {thumbnailError && (
        <button disabled className="w-1/4 p-1 text-gray-400 border border-gray-400 rounded-sm">
          Sign Up
        </button>
      )}

      {/* Signup Pending */}
      {!thumbnailError && isPending ? (
        <button disabled className="w-1/4 p-1 text-gray-400 border border-gray-400 rounded-sm">
          Loading...
        </button>
      ) : null}

      {/* Regular State */}
      {!thumbnailError && !isPending ? (
        <button className="w-1/4 p-1 border rounded-sm border-var-prim text-var-prim hover:text-white hover:bg-var-prim">
          Sign Up
        </button>
      ) : null}

      {error && <span className="block font-semibold text-red-500">{error}</span>}
    </form>
  );
};

export default Signup;
