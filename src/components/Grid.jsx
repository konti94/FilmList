import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function FLGrid(props) {
	const {films} = props;

	const handleMouseOver = (e) => {
		const element = e.target.nextElementSibling;
		element?.classList?.remove('d-none');
	}

	const handleMouseLeave = (e) => {
		const element = e.target;
		if (element.classList.contains('rounded-2')) {
			element?.classList?.add('d-none');
		} else {
			element?.parentNode.classList?.add('d-none');
		}
	}

	return (
		<div className='container py-4 py-lg-5'>
			{
				films?.length > 0
				?	<div className='grid'>
						{
							films.map(film => (
								<Card key={film.imdbID} className='g-col-6 g-col-md-4 border-0 position-relative' style={{height: '600px'}} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
									<Card.Img variant='center' src={film.Poster} className='rounded-2' style={{height: '600px'}} />
									<Card.Body className='position-absolute h-100 w-100 rounded-2 bg-dark bg-opacity-75 d-none'>
										<div className='position-absolute top-50 start-0 text-white text-center w-100 px-4'>
											<Card.Title className='fs-2'>{film.Title}</Card.Title>
											<Card.Text className='fs-3'>
												{film.Year}
											</Card.Text>
										</div>
									</Card.Body>
								</Card>
							))
						}
					</div>
				:	<p className='fs-2 text-center'>No results</p>
			}
			
		</div>
	);
}

FLGrid.propTypes = {
	films: PropTypes.array
};

export default FLGrid;
