import React from 'react'
import './createsubject.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
import DirectionRow from "./DirectionRow"
import Size16 from "./Size16"
import Size48 from "./Size48"
import Size16_1 from "./Size16_1"
import Size16_3 from "./Size16_3"
import arrow_drop_down from "./arrow_drop_down"
import Size16_4 from "./Size16_4"
import Size16_5 from "./Size16_5"
export default function Createsubject () {
	return (
		<div className='createsubject_createsubject'>
			<div className='Rectangle59'/>
			<div className='Rectangle71'/>
			<Link to='/chooseinstitution'>
				<div className='Rectangle72'/>
			</Link>
			<div className='ios'>
				<DeviceiPhoneOrientationPortrait className='HomeIndicator'/>
				<SizeiPhone16Proand16Max className='StatusbariPhone'/>
			</div>
			<div className='Group3'>
				<div className='Rectangle10'/>
				<div className='nav'>
					<DirectionRow className='NavigationButtonList'/>
					<img className='Line4' src = {ImgAsset.createsubject_Line4} />
				</div>
			</div>
			<div className='header'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<span className='FORADI'>FORADI</span>
				<img className='Line5' src = {ImgAsset.createsubject_Line5} />
			</div>
			<Size16 className='User'/>
			<span className='CreateSubject'>Create Subject</span>
			<span className='Title'>Title</span>
			<span className='SubjectCode'>Subject Code</span>
			<span className='AcademicInstitution'>Academic Institution</span>
			<div className='Rectangle58'/>
			<Size48 className='Image'/>
			<Size16_1 className='Check'/>
			<div className='Ellipse3'/>
			<Size16_3 className='Hexagon'/>
			<span className='Overview'>Overview</span>
			<img className='icon' src = {ImgAsset.createsubject_icon} />
			<arrow_drop_down className='arrow_drop_down'/>
			<img className='Line34' src = {ImgAsset.createsubject_Line34} />
			<span className='UploadCurriculum'>Upload Curriculum</span>
			<div className='Rectangle105'/>
			<span className='T'>T</span>
			<div className='Rectangle107'/>
			<div className='Rectangle106'/>
			<Size16_4 className='Image_1'/>
			<Size16_5 className='File'/>
			<div className='Rectangle108'/>
		</div>
	)
}