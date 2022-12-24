/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react'
import '../assets/styles/Card.css'

function Cards({ data }) {
	return (
		<div className='card-container'>
			{
				data.map((card, index) => {
					return (
						<div key={index} className='card' style={{ zIndex: '999999'}}>
							<img src={card.image} />
							<h1>{card.title}</h1>
							<p>{card.description}</p>
							{/* <p><span className="label">Esta es la carta numero: {index}</span></p> */}
						</div>
					)
				})
			}
		</div>
	)
}

export default Cards
