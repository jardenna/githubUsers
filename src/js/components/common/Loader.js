import React from 'react';

const Loader = ({ size }) => {
	return (
		<span className={`loader-wrapper ${size ? 'loader-' + size : null}`}>
			<span className="loader" />
		</span>

	);
};

export default Loader;


