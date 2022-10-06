import { useState } from 'react';

const Create = () => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignUsers, setAssignUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, details, dueDate });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-xl mx-auto space-y-5">
      <h1 className="mb-4 text-xl font-semibold">Create a new project</h1>

      <label className="space-y-2 ">
        <div className="text-xl">Project name:</div>
        <input
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="redesign the homepage"
          className="w-full p-1"
        />
      </label>

      <label className="space-y-2 ">
        <div className="text-xl">Project details:</div>
        <textarea
          value={details}
          required
          onChange={(e) => setDetails(e.target.value)}
          rows="5"
          cols="60"
          name="text"
          placeholder="a new navbar"
          className="w-full p-1"
        />
      </label>

      <label className="space-y-2 ">
        <div required="text-xl">Due date:</div>
        <input value={dueDate} onChange={(e) => setDueDate(e.target.value)} type="date" className="w-full p-1" />
      </label>

      <label className="space-y-2 ">
        <div className="text-xl">Project category:</div>
      </label>

      <label className="space-y-2 ">
        <div className="text-xl">Assign to:</div>
      </label>

      <button className="w-1/5 p-2 bg-white border rounded-sm text-md border-var-prim text-var-prim hover:text-white hover:bg-var-prim">
        Add Project
      </button>
    </form>
  );
};

export default Create;
