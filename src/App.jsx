import './App.scss';
import FLNav from './components/Nav';
import FLGrid from './components/Grid';
import { useState } from 'react';

function App() {
	const API_KEY = 'be443af0';

	const [films, setFilms] = useState([]);

	console.log(films);

	return (
		<>
			<FLNav apiKey={API_KEY} setFilms={setFilms} />
			<FLGrid films={films} />
		</>
	);
}

export default App;
