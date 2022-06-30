import { IoTriangle } from 'react-icons/io5';
import { GoTriangleUp } from 'react-icons/go';
const Dropdown = ({ children }) => {
	return (
		<ul className="Dropdown">
			<GoTriangleUp />
			{children}
		</ul>
	);
};

export default Dropdown;
