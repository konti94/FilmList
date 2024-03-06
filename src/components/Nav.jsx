import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../assets/logo.svg';
import { propTypes } from 'react-bootstrap/esm/Image';

function FLNav(props) {
	const handleSearchClick = () => {
		const searchInput = document.querySelector('#searchInput');

		const url = `https://www.omdbapi.com/?apikey=${props.apiKey}&s=${searchInput.value}`;

		getFilms(url)
	}

	const getFilms = async (url) => {
		const response = await fetch(url);
		const data = await response.json();

		props.setFilms(data.Search);
	}

	return (
		<Navbar collapseOnSelect expand='lg' className='bg-body-tertiary'>
			<Container>
				<Navbar.Brand
					href='/'
					className='d-flex align-items-center'>
					<img src={logo} alt='' className='flnav-logo me-2' />
					<h1 className='m-0 p-0 fs-3'>FilmList</h1>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Form
						inline
						className='ms-auto d-flex align-items-center flnav-searchbar'>
						<Form.Control
							id='searchInput'
							type='text'
							placeholder='Search'
							className='mr-sm-2 flnav-search-input'
							onKeyDown={handleSearchClick}
						/>
						<Button
							type='button'
							className='text-white flnav-search-button'
							onClick={handleSearchClick}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								className='bi bi-search'
								viewBox='0 0 16 16'>
								<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
							</svg>
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

FLNav.propTypes = {
	apiKey: propTypes.string,
	setFilms: PropTypes.func
};

export default FLNav;
