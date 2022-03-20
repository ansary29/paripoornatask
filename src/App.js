import React, { useEffect, useState } from 'react';
import Forms from './components/Form/Form';

import EnhancedTable from './components/Table/MaterialTable';
import { useDispatch } from 'react-redux';
import { getBio } from './actions/bioActions';


function App() {
	const [ currentId, setCurrentId ] = useState(null);
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(getBio());
		},
		[ dispatch, currentId ]
	);
	return (
		<div className='App ui container'>
			{/* <h3 style={{ textAlign: 'center', marginTop: '2rem',fontWeight:"8rem",fontSize:"2rem" }}>Interview  Task</h3> */}
			
			<Forms currentId={currentId} setCurrentId={setCurrentId} />
			{/* <h3 style={{ textAlign: 'center', marginTop: '5rem',fontWeight:"8rem",fontSize:"2rem"	 }}>Employee List</h3> */}
			<EnhancedTable setCurrentId={setCurrentId} />
		</div>
	);
}

export default App;
