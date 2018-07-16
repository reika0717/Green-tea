import React from 'react';

export default ({onClick, remove}) => {
	let input = ''
  return (
  	 <div>
  	 	<input ref={node => input = node} type='text' />
  	 	<button onClick={() => {
  	 		onClick(input.value)
  	 		input.value=''
  	 	}}>add</button>
  	 	<button onClick={() => {
  	 		remove(input.value)
  	 		input.value=''
  	 	}}>remove</button>
  	 </div>
  )
}