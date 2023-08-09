import React from 'react';
import { ChildAsFC } from './Child';

const Parent = () => {
	return (
		<div>
			<ChildAsFC color='red' onClick={() => console.log('Clicked')}>
				asdfasdf
			</ChildAsFC>
		</div>
	);
};

export default Parent;
