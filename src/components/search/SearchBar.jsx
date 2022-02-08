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
						className='input input-primary input-bordered w-full pr-16'
						type='text'
						placeholder='Search...'
						value={searchQuery}
						onInput={onInputHandler}
						// name='search'
					/>
					<button
						type='submit'
						className='absolute top-0 right-0 rounded-l-none btn btn-ghost border-l-2 border-conBlueGreen-700'
					>
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</div>
			</div>
		</form>
	);
};

export default SearchBar;