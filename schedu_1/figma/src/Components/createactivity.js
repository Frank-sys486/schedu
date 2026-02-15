import React from 'react'
import './createactivity.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
import DirectionRow from "./DirectionRow"
import Size16 from "./Size16"
import Size16_1 from "./Size16_1"
import arrow_drop_down from "./arrow_drop_down"
export default function Createactivity () {
	return (
		<div className='createactivity_createactivity'>
			<div className='Rectangle109'/>
			<div className='Rectangle59'/>
			<div className='Rectangle71'/>
			<div className='ios'>
				<DeviceiPhoneOrientationPortrait className='HomeIndicator'/>
				<SizeiPhone16Proand16Max className='StatusbariPhone'/>
			</div>
			<div className='Group3'>
				<div className='Rectangle10'/>
				<div className='nav'>
					<DirectionRow className='NavigationButtonList'/>
					<img className='Line4' src = {ImgAsset.createactivity_Line4} />
				</div>
			</div>
			<div className='header'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<span className='FORADI'>FORADI</span>
				<img className='Line5' src = {ImgAsset.createactivity_Line5} />
			</div>
			<Size16 className='User'/>
			<span className='CreateActivity'>Create Activity</span>
			<span className='Subject'>Subject</span>
			<span className='Scope'>Scope</span>
			<span className='Category'>Category</span>
			<div className='Rectangle111'/>
			<span className='ActivityType'>Activity Type</span>
			<Size16_1 className='Check'/>
			<span className='Overview'>Overview</span>
			<div className='Rectangle112'/>
			<div className='Rectangle113'/>
			<div className='Rectangle114'/>
			<span className='Subject_1'>Subject</span>
			<span className='Scope_1'>Scope</span>
			<span className='Category_1'>Category</span>
			<Link to='/createproject'>
				<div className='Rectangle115'/>
			</Link>
			<span className='ActivityType_1'>Activity Type</span>
			<span className='Overview_1'>Overview</span>
			<img className='icon' src = {ImgAsset.createactivity_icon} />
			<arrow_drop_down className='arrow_drop_down'/>
		</div>
	)
}