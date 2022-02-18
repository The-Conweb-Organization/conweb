import React from 'react';
import { navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
	const onInputHandler = e => {
		setSearchQuery(e.target.value);
	};

	const onSubmitHandler = e => {
		e.preventDefault();
		navigate(`/search/?search=${searchQuery}`);
	};

	return (
		<form autoComplete='off' onSubmit={onSubmitHandler}>
			<div className='form-control'>
				<div className='relative'>
					<input
						className='bg-secondary text-primary placeholder:text-primary w-full pl-4 pr-16 h-12 rounded-lg outline-none focus:border-2 focus:border-accent'
						type='text'
						placeholder='Search...'
						value={searchQuery}
						onInput={onInputHandler}
					/>
					<button
						type='submit'
						className='absolute top-0 right-0 rounded-l-none btn btn-ghost'
					>
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</div>
			</div>
		</form>
	);
};

export default SearchBar;
