import React from 'react'
import './choosesection.css'
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
import Size16_1 from "./Size16_1"
export default function Choosesection () {
	return (
		<div className='choosesection_choosesection'>
			<div className='ios'>
				<DeviceiPhoneOrientationPortrait className='HomeIndicator'/>
				<SizeiPhone16Proand16Max className='StatusbariPhone'/>
			</div>
			<div className='Group3'>
				<div className='Rectangle10'/>
				<div className='nav'>
					<DirectionRow className='NavigationButtonList'/>
					<img className='Line4' src = {ImgAsset.choosesection_Line4} />
				</div>
			</div>
			<div className='header'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<span className='FORADI'>FORADI</span>
				<img className='Line5' src = {ImgAsset.choosesection_Line5} />
			</div>
			<span className='ChooseSection'>Choose Section</span>
			<Size16_9 className='Sliders'/>
			<Size16 className='User'/>
			<Size16_10 className='Search'/>
			<Size16_2 className='Plus'/>
			<span className='All'>All</span>
			<arrow_drop_down className='arrow_drop_down'/>
			<Size16_9 className='Sliders_1'/>
			<Size16_10 className='Search_1'/>
			<Size16_1 className='Check'/>
			<div className='Rectangle39'/>
			<span className='Grade8Tesla'>Grade 8 - Tesla</span>
			<div className='Rectangle40'/>
			<span className='Grade9Bohr'>Grade 9 - Bohr</span>
			<div className='Rectangle41'/>
			<span className='Grade9Curie'>Grade 9 - Curie</span>
			<div className='Rectangle42'/>
			<span className='Grade10Einstein'>Grade 10 - Einstein</span>
			<div className='Rectangle43'/>
			<span className='Grade10Newton'>Grade 10 - Newton</span>
			<div className='Rectangle44'/>
			<span className='Grade8Tesla_1'>Grade 8 - Tesla</span>
			<div className='Rectangle45'/>
			<span className='Grade9Bohr_1'>Grade 9 - Bohr</span>
			<div className='Rectangle46'/>
			<span className='Grade9Curie_1'>Grade 9 - Curie</span>
			<div className='Rectangle47'/>
			<span className='Grade10Einstein_1'>Grade 10 - Einstein</span>
			<div className='Rectangle48'/>
			<span className='Grade10Newton_1'>Grade 10 - Newton</span>
			<div className='Rectangle49'/>
			<span className='Grade10Newton_2'>Grade 10 - Newton</span>
			<div className='Rectangle50'/>
			<span className='BSComputerScience201'>BS Computer Science 201</span>
			<div className='Rectangle51'/>
			<span className='Grade10Newton_3'>Grade 10 - Newton</span>
			<div className='Rectangle52'/>
			<span className='BSComputerScience202'>BS Computer Science 202</span>
			<arrow_drop_down className='arrow_drop_down_1'/>
		</div>
	)
}