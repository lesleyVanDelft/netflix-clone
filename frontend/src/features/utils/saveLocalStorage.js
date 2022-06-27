export const saveLocalStorage = user => {
	localStorage.setItem('user', JSON.stringify(user));
};

export const logoutLocalStorage = () => {
	localStorage.removeItem('user');
};
