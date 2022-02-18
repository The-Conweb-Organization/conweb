import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

export const darkMode = () => {
	return `(() => {
    setTheme = theme => {
      window.__theme = theme;
      if (theme === 'dark') {
        document.documentElement.className = 'theme-dark';
      } else {
        document.documentElement.className = '';
      }
    };
    window.__setPreferredTheme = theme => {
      setTheme(theme);
      try {
        localStorage.setItem('color-theme', theme);
      } catch (e) {}
    };
    let preferredTheme;
    try {
      preferredTheme = localStorage.getItem('color-theme');
    } catch (e) {}
    let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
  })()`;
};

export const ToggleMode = () => {
	let websiteTheme;

	if (typeof window !== 'undefined') {
		websiteTheme = window.__theme;
	}

	const [theme, setTheme] = useState(websiteTheme);
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		setTheme(window.__theme);
	}, []);

	const themeToggle = () => {
		window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark');
		setTheme(websiteTheme === 'dark' ? 'light' : 'dark');
		setChecked(prevState => !prevState);
	};

	return (
		<div className='form-control'>
			<label className='cursor-pointer label'>
				<input
					type='checkbox'
					className='toggle bg-primary mr-2'
					checked={checked}
					onChange={themeToggle}
				/>
				<span className='label-text'>
					<FontAwesomeIcon className='text-accent' icon={faLightbulb} />
				</span>
			</label>
		</div>
	);
};
