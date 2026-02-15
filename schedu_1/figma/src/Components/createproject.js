import React from 'react'
import './createproject.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
import DirectionRow from "./DirectionRow"
import Size16 from "./Size16"
import Size16_1 from "./Size16_1"
import arrow_drop_down from "./arrow_drop_down"
export default function Createproject () {
	return (
		<div className='createproject_createproject'>
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
					<img className='Line4' src = {ImgAsset.createproject_Line4} />
				</div>
			</div>
			<div className='header'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<span className='FORADI'>FORADI</span>
				<img className='Line5' src = {ImgAsset.createproject_Line5} />
			</div>
			<Size16 className='User'/>
			<span className='CreateActivity'>Create Activity</span>
			<span className='Subject'>Subject</span>
			<div className='Rectangle126'/>
			<span className='Briefdescription'>Brief description</span>
			<div className='Rectangle109'/>
			<span className='Scope'>Scope</span>
			<span className='PerformanceTask'>Performance Task</span>
			<div className='Rectangle111'/>
			<span className='Project'>Project</span>
			<Size16_1 className='Check'/>
			<span className='Overview'>Overview</span>
			<img className='icon' src = {ImgAsset.createproject_icon} />
			<arrow_drop_down className='arrow_drop_down'/>
			<img className='Line34' src = {ImgAsset.createproject_Line34} />
			<img className='Line35' src = {ImgAsset.createproject_Line35} />
			<span className='Components'>Components</span>
			<span className='Requirements'>Requirements</span>
			<span className='Instructions'>Instructions</span>
			<div className='Rectangle115'/>
			<span className='GradingSheet'>Grading Sheet</span>
			<div className='Rectangle117'/>
			<span className='Rubrix'>Rubrix</span>
			<div className='Rectangle114'/>
		</div>
	)
}