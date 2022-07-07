import { IoTriangle } from 'react-icons/io5';
import { GoTriangleUp } from 'react-icons/go';
const Dropdown = ({ children }) => {
	return (
		<ul className="Dropdown">
			<div className="Dropdown__container">
				<GoTriangleUp />
				{children}
			</div>
		</ul>
	);
};

export default Dropdown;
