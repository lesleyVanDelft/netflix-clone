import { IoTriangle } from 'react-icons/io5';
import { GoTriangleUp } from 'react-icons/go';
import { motion } from 'framer-motion';
import { dropdownVariant, dropdownVariantNav } from '../../framerVariants';

const Dropdown = ({ children, navbar }) => {
	return (
		<motion.ul
			className={`Dropdown ${navbar ? 'nav' : ''}`}
			variants={navbar ? dropdownVariantNav : dropdownVariant}
			initial="initial"
			animate="animate"
			exit="exit">
			<div className="Dropdown__container">{children}</div>
		</motion.ul>
	);
};

export default Dropdown;
