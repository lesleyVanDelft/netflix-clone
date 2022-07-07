import { IoTriangle } from 'react-icons/io5';
import { GoTriangleUp } from 'react-icons/go';
import { motion } from 'framer-motion';
import { dropdownVariant } from '../../framerVariants';

const Dropdown = ({ children }) => {
	return (
		<motion.ul
			className="Dropdown"
			variants={dropdownVariant}
			initial="initial"
			animate="animate"
			exit="exit">
			<div className="Dropdown__container">
				<GoTriangleUp />
				{children}
			</div>
		</motion.ul>
	);
};

export default Dropdown;
