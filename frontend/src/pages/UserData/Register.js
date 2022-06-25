import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import logo from '../../assets/logo.svg';
import axios from 'axios';
import { register } from '../../features/userSlice/userSlice';
import { useDispatch } from 'react-redux';

const Register = () => {
	const [formData, setFormData] = useState({});
	const dispatch = useDispatch();

	// Register form
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			passwordCheck: '',
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
			// return await axios.post(
			// 	'http://localhost:5000/api/users/register',
			// 	values
			// );
			console.log(values);
			return dispatch(register(values));
			// console.log(values);
			// return response.data
		},
	});

	// const handleChange = e => {
	// 	setFormData({ ...e, [e.target.name]: e.target.value });
	// };

	return (
		<main className="Register">
			<figure>
				<img src={logo} alt="" />
			</figure>
			<form className="form" autoComplete="off" onSubmit={formik.handleSubmit}>
				<h1>Register</h1>
				<input
					type="email"
					name="email"
					id="email"
					className="Register__form input"
					placeholder="Email address"
					value={formik.values.email}
					onChange={formik.handleChange}
				/>
				<input
					type="text"
					name="name"
					id="name"
					className="Register__form input"
					placeholder="Username"
					value={formik.values.name}
					onChange={formik.handleChange}
				/>
				<input
					type="password"
					name="password"
					id="password"
					className="Register__form input"
					placeholder="Password"
					value={formik.values.password}
					onChange={formik.handleChange}
				/>
				<input
					type="password"
					name="passwordCheck"
					id="passwordCheck"
					className="Register__form input"
					placeholder="Repeat password"
					value={formik.values.passwordCheck}
					onChange={formik.handleChange}
				/>

				<button className="btn btn-red" type="submit">
					Create an account
				</button>
				<div className="form__account">
					<p>Already have an account?</p> <Link to="/login">Login</Link>
				</div>
			</form>
		</main>
	);
};

export default Register;
