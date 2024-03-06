import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function FLGrid(props) {
	const {films} = props;

	return (
		<div className='container py-4 py-lg-5'>
			{
				films?.length > 0
				?	<div className='grid'>
						{
							films.map(film => (
								<Card key={film.imdbID} className='g-col-6 g-col-md-4 border-0 position-relative' style={{height: '600px'}}>
									<Card.Img variant='top' src={film.Poster} style={{height: '600px'}} />
									<Card.Body className='position-absolute h-100 w-100 bg-dark bg-opacity-75'>
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
