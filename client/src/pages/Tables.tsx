import { Link } from 'react-router-dom';
import TableThree from '../components/TableThree';
import DefaultLayout from '../layout/DefaultLayout';

const Tables = () => {
  const token = localStorage.getItem('token');
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        {token && <TableThree />}
        {!token && <Link to={'/auth/signup'}>Sign up firstly bro!!!</Link>}
      </div>
    </DefaultLayout>
  );
};

export default Tables;
