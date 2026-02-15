import React from 'react'
import './library.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
import DirectionRow from "./DirectionRow"
import Size16_9 from "./Size16_9"
import Size16 from "./Size16"
import Size16_10 from "./Size16_10"
import Size16_2 from "./Size16_2"
import arrow_drop_down from "./arrow_drop_down"
import Size20 from "./Size20"
import Size20_1 from "./Size20_1"
import Size20_2 from "./Size20_2"
import Size20_3 from "./Size20_3"
export default function Library () {
	return (
		<div className='library_library'>
			<span className='HephzibahSchoolInc'>Hephzibah School Inc.</span>
			<div className='ios'>
				<DeviceiPhoneOrientationPortrait className='HomeIndicator'/>
				<SizeiPhone16Proand16Max className='StatusbariPhone'/>
			</div>
			<div className='Group3'>
				<div className='Rectangle10'/>
				<div className='nav'>
					<DirectionRow className='NavigationButtonList'/>
					<img className='Line4' src = {ImgAsset.library_Line4} />
				</div>
			</div>
			<div className='header'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<span className='FORADI'>FORADI</span>
				<img className='Line5' src = {ImgAsset.library_Line5} />
			</div>
			<span className='Library'>Library</span>
			<Size16_9 className='Sliders'/>
			<Size16 className='User'/>
			<Size16_10 className='Search'/>
			<div className='Rectangle2'/>
			<Link to='/librarysubjectclosed'>
				<div className='Rectangle3'/>
			</Link>
			<div className='Rectangle4'/>
			<span className='MAT10Mathematics'>MAT10 - Mathematics</span>
			<span className='SCI9Science'>SCI9 - Science</span>
			<Link to='/librarysubjectclosed'>
				<span className='SCI8Science'>SCI8 - Science</span>
			</Link>
			<img className='image1' src = {ImgAsset.choosesubject_image1} />
			<Link to='/librarysubjectclosed'>
				<img className='image2' src = {ImgAsset.choosesubject_image2} />
			</Link>
			<img className='image3' src = {ImgAsset.choosesubject_image3} />
			<Size16_2 className='Plus'/>
			<span className='Current'>Current</span>
			<arrow_drop_down className='arrow_drop_down'/>
			<Size16_9 className='Sliders_1'/>
			<Size16_10 className='Search_1'/>
			<div className='Rectangle5'/>
			<Link to='/librarysubjectclosed'>
				<div className='Rectangle6'/>
			</Link>
			<div className='Rectangle7'/>
			<span className='MAT10Mathematics_1'>MAT10 - Mathematics</span>
			<span className='HephzibahSchoolInc_1'>Hephzibah School Inc.</span>
			<Link to='/librarysubjectclosed'>
				<span className='HephzibahSchoolInc_2'>Hephzibah School Inc.</span>
			</Link>
			<span className='SCI9Science_1'>SCI9 - Science</span>
			<Link to='/librarysubjectclosed'>
				<span className='SCI8Science_1'>SCI8 - Science</span>
			</Link>
			<img className='image4' src = {ImgAsset.choosesubject_image1} />
			<Link to='/librarysubjectclosed'>
				<img className='image5' src = {ImgAsset.choosesubject_image2} />
			</Link>
			<img className='image6' src = {ImgAsset.choosesubject_image3} />
			<Size16_2 className='Plus_1'/>
			<div className='Rectangle58'/>
			<Link to='/createlessonplan'>
				<div className='Rectangle59'/>
			</Link>
			<Link to='/createsubject'>
				<div className='Rectangle60'/>
			</Link>
			<Link to='/createlesson'>
				<div className='Rectangle61'/>
			</Link>
			<Link to='/createactivity'>
				<div className='Rectangle62'/>
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