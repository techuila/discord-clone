import { useState } from 'react';
import Spinner from './components/Spinner/Spinner';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<div style={{ width: '72px', height: '100%', backgroundColor: '#1F2225' }}></div>
			<div style={{ width: '240px', height: '100%', backgroundColor: '#2E3136' }}></div>
		</div>
	);
}

export default App;
