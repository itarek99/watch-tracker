import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);
  console.log(user);

  const navItems = (
    <>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      {user?.email ? (
        <li>
          <Link to={'/'}>{user.email}</Link>
        </li>
      ) : null}
    </>
  );

  const handleLogOut = () => {
    userLogOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <div className='container mx-auto'>
      <div className='navbar py-4'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navItems}
            </ul>
          </div>
          <Link to='/' className='normal-case text-xl font-bold'>
            Watch Tracker
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal p-0'>{navItems}</ul>
        </div>
        <div className='navbar-end'>
          {user?.email ? (
            <button onClick={handleLogOut} className='btn btn-error'>
              Log Out
            </button>
          ) : (
            <Link to='/login' className='btn'>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
