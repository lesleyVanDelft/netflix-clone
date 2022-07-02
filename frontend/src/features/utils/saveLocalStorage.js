import Cookies from 'js-cookie';
export const saveLocalStorage = user => {
	localStorage.setItem('user', JSON.stringify(user));
};

export const logoutLocalStorage = () => {
	localStorage.removeItem('user');
	// localStorage.clear();
	Cookies.remove('jwt');
};
