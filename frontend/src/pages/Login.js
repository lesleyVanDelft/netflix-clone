import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Login = () => {
	return (
		<main className="Login">
			<figure>
				<img src={logo} alt="" />
			</figure>
			<form className="form" autoComplete="off">
				<h1>Login</h1>
				<input
					type="text"
					name="email"
					id="email"
					className="Login__form input"
					placeholder="Email address"
				/>
				<input
					type="password"
					name="password"
					id="password"
					className="Login__form input"
					placeholder="Password"
				/>
				<button className="btn btn-red">Login to your account</button>
				<div className="form__account">
					<p>Don't have an account?</p> <Link to="/register">Sign Up</Link>
				</div>
			</form>
		</main>
	);
};

export default Login;
