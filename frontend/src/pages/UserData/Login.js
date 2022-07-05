import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { login } from '../../features/userSlice/userSlice';
import { saveLocalStorage } from '../../features/utils/saveLocalStorage';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector(state => state.user);
	// const userStatus = useSelector(state => state.user.status);

	useEffect(() => {
		user.status === 'success' && navigate('/');
		user.status === 'success' && saveLocalStorage(user);
	}, [user.status]);
	// Register form
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		// validationSchema: Yup.object({
		// 	name: Yup.string().required('Please enter your name'),
		// 	email: Yup.string().email().required('Please enter a valid email adress'),
		// 	username: Yup.string().required('Please enter a username'),
		// 	password: Yup.string()
		// 		.min(6, 'Password must be 6 characters or more')
		// 		.max(35)
		// 		.required('Please enter a password'),
		// 	password2: Yup.string().oneOf(
		// 		[Yup.ref('password'), null],
		// 		'Passwords must match'
		// 	),
		// }),
		onSubmit: async values => {
			dispatch(login(values));
		},
	});
	return (
		<main className="Login">
			<figure>
				<img src={logo} alt="" />
			</figure>
			<form className="form" autoComplete="off" onSubmit={formik.handleSubmit}>
				<h1>Login</h1>
				<input
					type="text"
					name="email"
					id="email"
					className="Login__form input"
					placeholder="Email address"
					value={formik.values.email}
					onChange={formik.handleChange}
				/>
				<input
					type="password"
					name="password"
					id="password"
					className="Login__form input"
					placeholder="Password"
					value={formik.values.password}
					onChange={formik.handleChange}
				/>
				<button className="btn btn-red" type="submit">
					Login to your account
				</button>
				<div className="form__account">
					<p>Don't have an account?</p> <Link to="/register">Sign Up</Link>
				</div>
			</form>
		</main>
	);
};

export default Login;
