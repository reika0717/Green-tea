import React from 'react';

export default ({onClick}) => {
	let input = ''
  return (
  	 <div>
  	 	<input ref={node => input = node} type='text' />
  	 	<button onClick={() => {
  	 		onClick(input.value)
  	 		input.value=''
  	 	}}>add</button>
  	 </div>
  )
}