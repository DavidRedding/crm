import { useState } from 'react';
import ProjectList from '../../components/ProjectList';
import { auth } from '../../firebase/config';
import useCollection from '../../hooks/useCollection';
import ProjectFilter from './ProjectFilter';

const Dashboard = () => {
  const { documents, error } = useCollection('projects');
  const [filter, setFilter] = useState('all');
  const changeFilter = (f) => setFilter(f);

  const projects = documents
    ? documents.filter((doc) => {
        switch (filter) {
          case 'mine':
            let assignedToMe = false;
            doc.assignedUsersList.forEach((u) => {
              if (u.id === auth.currentUser.uid) assignedToMe = true;
            });
            return assignedToMe;

          case 'development':
          case 'design':
          case 'marketing':
          case 'sales':
            return doc.category === filter;

          default:
            return true;
        }
      })
    : null;

  return (
    <div>
      <h2 className="font-semibold ">Dashboard</h2>
      <ProjectFilter changeFilter={changeFilter} filter={filter} />
      {error && <p>{error}</p>}
      {documents && <ProjectList projects={projects} />}
    </div>
  );
};

export default Dashboard;
