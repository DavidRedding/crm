import { useEffect, useState } from 'react';
import Select from 'react-select';
import useCollection from '../../hooks/useCollection';

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
];

const Create = () => {
  const { documents } = useCollection('users');
  const [users, setUsers] = useState([]);

  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => ({ value: user, label: user.displayName }));
      setUsers(options);
    }
  }, [documents]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError('Please select a project category');
      return;
    }

    if (assignedUsers.length < 1) {
      setFormError('Please select one or more users');
      return;
    }

    console.log({ name, details, dueDate, category, assignedUsers });
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
        <Select onChange={(option) => setCategory(option)} options={categories} />
      </label>

      <label className="space-y-2">
        <div className="text-xl">Assign to:</div>
        <Select isMulti onChange={(option) => setAssignedUsers(option)} options={users} />
      </label>

      <button className="w-1/5 p-2 bg-white border rounded-md text-md border-var-prim text-var-prim hover:text-white hover:bg-var-prim">
        Add Project
      </button>

      {formError && <span className="font-semibold text-red-500">{formError}</span>}
    </form>
  );
};

export default Create;
