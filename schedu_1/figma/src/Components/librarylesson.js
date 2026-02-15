import React from 'react'
import './librarylesson.css'
import ImgAsset from '../public'
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
import DirectionRow from "./DirectionRow"
import Size16 from "./Size16"
import arrow_drop_down from "./arrow_drop_down"
import Size24_5 from "./Size24_5"
export default function Librarylesson () {
	return (
		<div className='librarylesson_librarylesson'>
			<div className='ios'>
				<DeviceiPhoneOrientationPortrait className='HomeIndicator'/>
				<SizeiPhone16Proand16Max className='StatusbariPhone'/>
			</div>
			<div className='Group3'>
				<div className='Rectangle10'/>
				<div className='nav'>
					<DirectionRow className='NavigationButtonList'/>
					<img className='Line4' src = {ImgAsset.librarylesson_Line4} />
				</div>
			</div>
			<div className='header'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<span className='FORADI'>FORADI</span>
				<img className='Line5' src = {ImgAsset.librarylesson_Line5} />
			</div>
			<span className='Lesson1IntroductiontoScience'>Lesson 1: Introduction to Science</span>
			<Size16 className='User'/>
			<arrow_drop_down className='arrow_drop_down'/>
			<Size24_5 className='Morehorizontal'/>
			<div className='Rectangle32'/>
		</div>
	)
}