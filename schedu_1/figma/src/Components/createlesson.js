import React from 'react'
import './createlesson.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
import DirectionRow from "./DirectionRow"
import Size16 from "./Size16"
import Size16_1 from "./Size16_1"
import arrow_drop_down from "./arrow_drop_down"
import Size16_4 from "./Size16_4"
import Size16_5 from "./Size16_5"
export default function Createlesson () {
	return (
		<div className='createlesson_createlesson'>
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
					<img className='Line4' src = {ImgAsset.createlesson_Line4} />
				</div>
			</div>
			<div className='header'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<span className='FORADI'>FORADI</span>
				<img className='Line5' src = {ImgAsset.createlesson_Line5} />
			</div>
			<Size16 className='User'/>
			<span className='CreateLesson'>Create Lesson</span>
			<span className='Title'>Title</span>
			<span className='Subject'>Subject</span>
			<div className='Rectangle109'/>
			<span className='Chapter'>Chapter</span>
			<span className='canbeblank'>(can be blank)</span>
			<div className='Rectangle110'/>
			<span className='Lesson'>Lesson</span>
			<Size16_1 className='Check'/>
			<span className='Overview'>Overview</span>
			<img className='icon' src = {ImgAsset.createlesson_icon} />
			<arrow_drop_down className='arrow_drop_down'/>
			<img className='Line34' src = {ImgAsset.createlesson_Line34} />
			<span className='UploadLesson'>Upload Lesson</span>
			<div className='Rectangle105'/>
			<span className='T'>T</span>
			<div className='Rectangle107'/>
			<div className='Rectangle106'/>
			<Size16_4 className='Image'/>
			<Size16_5 className='File'/>
			<div className='Rectangle108'/>
			<img className='Line33' src = {ImgAsset.createlesson_Line33} />
			<span className='Formattingoptional'>Formatting (optional)</span>
			<div className='Rectangle73'/>
			<span className='Nobulletpointsprecisedescriptionssummarizeddescriptionsetc'>(No bullet points, precise descriptions, summarized descriptions, etc.)</span>
		</div>
	)
}