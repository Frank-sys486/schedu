import React from 'react'
import './plans.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
import DirectionRow from "./DirectionRow"
import Size16_9 from "./Size16_9"
import arrow_drop_down from "./arrow_drop_down"
import Size16_2 from "./Size16_2"
export default function Plans () {
	return (
		<div className='plans_plans'>
			<div className='Rectangle41'/>
			<span className='Grade9Curie'>Grade 9 - Curie</span>
			<div className='ios'>
				<DeviceiPhoneOrientationPortrait className='HomeIndicator'/>
				<SizeiPhone16Proand16Max className='StatusbariPhone'/>
			</div>
			<div className='nav'>
				<DirectionRow className='NavigationButtonList'/>
				<img className='Line4' src = {ImgAsset.plans_Line4} />
			</div>
			<div className='header'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<img className='Line5' src = {ImgAsset.plans_Line5} />
			</div>
			<span className='Plans'>Plans</span>
			<span className='Plans_1'>Plans</span>
			<Size16_9 className='Sliders'/>
			<img className='Line26' src = {ImgAsset.plans_Line26} />
			<img className='Line27' src = {ImgAsset.plans_Line27} />
			<img className='Line28' src = {ImgAsset.plans_Line28} />
			<img className='Line29' src = {ImgAsset.plans_Line29} />
			<img className='Line30' src = {ImgAsset.plans_Line30} />
			<img className='Line31' src = {ImgAsset.plans_Line31} />
			<div className='Rectangle33'/>
			<div className='Rectangle34'/>
			<div className='Rectangle35'/>
			<div className='Rectangle36'/>
			<div className='Rectangle37'/>
			<div className='Rectangle38'/>
			<span className='Current'>Current</span>
			<arrow_drop_down className='arrow_drop_down'/>
			<span className='Current_1'>Current</span>
			<arrow_drop_down className='arrow_drop_down_1'/>
			<span className='MAT10'>MAT10</span>
			<span className='Grade10Einstein'>Grade 10 - Einstein</span>
			<div className='Rectangle39'/>
			<span className='Grade8Tesla'>Grade 8 - Tesla</span>
			<div className='Rectangle40'/>
			<span className='Grade9Bohr'>Grade 9 - Bohr</span>
			<span className='MAT10_1'>MAT10</span>
			<span className='Grade10Newton'>Grade 10 - Newton</span>
			<span className='SCI8'>SCI8 </span>
			<span className='Grade8Tesla_1'>Grade 8 - Tesla</span>
			<span className='SCI9'>SCI9</span>
			<span className='Grade9Bohr_1'>Grade 9 - Bohr</span>
			<span className='SCI9_1'>SCI9</span>
			<span className='Grade9Curie_1'>Grade 9 - Curie</span>
			<Size16_2 className='Plus'/>
			<span className='Sections'>Sections</span>
			<Size16_9 className='Sliders_1'/>
			<Size16_2 className='Plus_1'/>
			<img className='S11' src = {ImgAsset.dashboard_S11} />
			<span className='SCHEDU'>SCHEDU</span>
		</div>
	)
}