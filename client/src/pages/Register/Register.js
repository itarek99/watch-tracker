import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
  const { registerWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    registerWithEmail(email, password)
      .then((result) => {
        form.reset();
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='container mx-auto px-2'>
      <div className='card flex-shrink-0 w-full max-w-md mx-auto mt-12 shadow-2xl bg-base-100'>
        <form onSubmit={handleRegister} className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input type='text' placeholder='name' name='name' className='input input-bordered' />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input type='email' placeholder='email' name='email' className='input input-bordered' required />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input type='password' placeholder='password' name='password' className='input input-bordered' required />
            <label className='label'>
              <Link to='/login' className='label-text-alt link link-hover'>
                already have an account?
              </Link>
            </label>
          </div>
          <div className='form-control mt-6'>
            <button type='submit' className='btn btn-primary'>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
