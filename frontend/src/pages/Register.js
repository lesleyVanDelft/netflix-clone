import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Register = () => {
	return (
		<main className="Register">
			<figure>
				<img src={logo} alt="" />
			</figure>
			<form className="form" autoComplete="off">
				<h1>Register</h1>
				<input
					type="email"
					name="email"
					id="email"
					className="Register__form input"
					placeholder="Email address"
				/>
				<input
					type="password"
					name="password"
					id="password"
					className="Register__form input"
					placeholder="Password"
				/>
				<input
					type="password"
					name="passwordCheck"
					id="passwordCheck"
					className="Register__form input"
					placeholder="Repeat password"
				/>

				<button className="btn btn-red">Create an account</button>
				<div className="form__account">
					<p>Already have an account?</p> <Link to="/login">Login</Link>
				</div>
			</form>
		</main>
	);
};

export default Register;
