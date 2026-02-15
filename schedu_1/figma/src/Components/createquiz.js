import React from 'react'
import './createquiz.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
import DirectionRow from "./DirectionRow"
import Size16 from "./Size16"
import Size16_1 from "./Size16_1"
import arrow_drop_down from "./arrow_drop_down"
export default function Createquiz () {
	return (
		<div className='createquiz_createquiz'>
			<div className='Rectangle116'/>
			<div className='Rectangle122'/>
			<div className='Rectangle123'/>
			<div className='Rectangle112'/>
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
					<img className='Line4' src = {ImgAsset.createquiz_Line4} />
				</div>
			</div>
			<div className='header'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<span className='FORADI'>FORADI</span>
				<img className='Line5' src = {ImgAsset.createquiz_Line5} />
			</div>
			<Size16 className='User'/>
			<span className='CreateActivity'>Create Activity</span>
			<span className='Subject'>Subject</span>
			<div className='Rectangle125'/>
			<span className='NoofItems'>No. of Items</span>
			<div className='Rectangle126'/>
			<span className='Lesson'>Lesson</span>
			<div className='Rectangle109'/>
			<span className='Scope'>Scope</span>
			<span className='MultipleChoice'>Multiple Choice</span>
			<span className='WrittenWork'>Written Work</span>
			<div className='Rectangle111'/>
			<span className='Quiz'>Quiz</span>
			<Size16_1 className='Check'/>
			<span className='Overview'>Overview</span>
			<img className='icon' src = {ImgAsset.createquiz_icon} />
			<arrow_drop_down className='arrow_drop_down'/>
			<img className='Line34' src = {ImgAsset.createquiz_Line34} />
			<img className='Line35' src = {ImgAsset.createquiz_Line35} />
			<span className='Components'>Components</span>
			<span className='Requirements'>Requirements</span>
			<span className='MatchingType'>Matching Type</span>
			<div className='Rectangle115'/>
			<span className='FillintheBlank'>Fill in the Blank</span>
			<div className='Rectangle118'/>
			<span className='WordScramble'>Word Scramble</span>
			<div className='Rectangle119'/>
			<span className='Essay'>Essay</span>
			<div className='Rectangle120'/>
			<span className='Logic'>Logic</span>
			<div className='Rectangle121'/>
			<span className='Enumeration'>Enumeration</span>
			<span className='PictureIdentification'>Picture Identification</span>
			<div className='Rectangle117'/>
			<span className='IdentificationwWordBank'>Identification w/ Word Bank</span>
			<div className='Rectangle114'/>
			<span className='IMultipleChoice'>I. Multiple Choice</span>
			<div className='Rectangle124'/>
			<span className='IIEnumeration'>II. Enumeration</span>
		</div>
	)
}