import { useState } from 'react';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    // console.log({ email, password });
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-sm p-8 mx-auto space-y-6 bg-white border shadow-lg">
      <h2 className="text-2xl font-bold">Log in</h2>
      <label className="space-y-1">
        <h2>email:</h2>
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
      {!isPending && (
        <button className="w-1/4 p-1 border rounded-sm border-var-prim text-var-prim hover:text-white hover:bg-var-prim">
          Login
        </button>
      )}
      {isPending && (
        <button disabled className="w-1/4 p-1 text-gray-400 border border-gray-400 rounded-smm">
          Login
        </button>
      )}
      {error && <span className="block font-semibold text-red-500">{error}</span>}
    </form>
  );
};

export default Login;
