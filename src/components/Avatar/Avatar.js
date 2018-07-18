import React from 'react'
import circle from './circle.svg'
import './Avatar.css'

export default function Avatar(props) {
	return (
		<figure className="avatar">
			<img
				src="https://picsum.photos/g/200/200"
				alt="Avatar"
				width="200"
				height="200"
			/>
		</figure>
	)
}
