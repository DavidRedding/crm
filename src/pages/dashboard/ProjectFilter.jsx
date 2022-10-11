const filterList = ['all', 'mine', 'development', 'design', 'marketing', 'sales'];

const ProjectFilter = ({ changeFilter, filter }) => {
  const handleClick = (f) => {
    changeFilter(f);
  };

  return (
    <div className="my-6">
      <nav className="flex items-center p-2 space-x-2 bg-white rounded">
        <p className="mr-2">Filter by:</p>
        {filterList.map((f) => (
          <button
            className={`${
              filter === f ? 'text-var-prim' : 'text-[#999]'
            } pr-2 font-bold  border-r hover:text-var-prim last:border-white`}
            key={f}
            onClick={() => handleClick(f)}
            value={f}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProjectFilter;
