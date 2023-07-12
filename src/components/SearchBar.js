import React, { useState } from 'react';
import searchSvg from '../assets/imgs/icons/icons8-search.svg';

const SearchBar = ({ onFormSubmit }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSubmit = (event) => {
		onFormSubmit(searchTerm);
		event.preventDefault();
	};

	return (
		<div className="search-container">
			<form onSubmit={handleSubmit}>
				<div className="flex">
					<input type="text" id="search" placeholder="Search..." onChange={handleChange} />
					<button onSubmit={handleSubmit}>
						<img src={searchSvg} width="24px" style={{ padding: '2px' }} alt="searchSvg"></img>
					</button>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
