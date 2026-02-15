import React from 'react'
import './create.css'
import {Link} from 'react-router-dom'
import Size20 from "./Size20"
import Size20_1 from "./Size20_1"
import Size20_2 from "./Size20_2"
import Size20_3 from "./Size20_3"
export default function Create () {
	return (
		<div className='create_create'>
			<div className='Rectangle53'/>
			<Link to='/createlessonplan'>
				<div className='Rectangle54'/>
			</Link>
			<Link to='/createsubject'>
				<div className='Rectangle55'/>
			</Link>
			<Link to='/createlesson'>
				<div className='Rectangle56'/>
			</Link>
			<Link to='/createactivity'>
				<div className='Rectangle57'/>
			</Link>
			<span className='Subject'>Subject</span>
			<Size20 className='Book'/>
			<span className='Notes'>Notes</span>
			<Size20_1 className='Pentool'/>
			<span className='Lessonplan'>Lessonplan</span>
			<Size20_2 className='Table'/>
			<span className='Activities'>Activities</span>
			<Size20_3 className='Box'/>
		</div>
	)
}