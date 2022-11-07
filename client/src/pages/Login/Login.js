import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
  const { loginWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmail(email, password)
      .then((result) => {
        form.reset();
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='container mx-auto px-2'>
      <div className='card flex-shrink-0 w-full max-w-md mx-auto mt-12 shadow-2xl bg-base-100'>
        <form onSubmit={handleLogin} className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input type='text' placeholder='email' name='email' className='input input-bordered' />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input type='password' placeholder='password' name='password' className='input input-bordered' />
            <label className='label'>
              <Link to='/register' className='label-text-alt link link-hover'>
                don't have an account?
              </Link>
            </label>
          </div>
          <div className='form-control mt-6'>
            <button type='submit' className='btn btn-primary'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
