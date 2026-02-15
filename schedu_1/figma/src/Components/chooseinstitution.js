import React from 'react'
import './chooseinstitution.css'
import ImgAsset from '../public'
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
import DirectionRow from "./DirectionRow"
import Size16_9 from "./Size16_9"
import Size16 from "./Size16"
import Size16_10 from "./Size16_10"
import Size16_2 from "./Size16_2"
import arrow_drop_down from "./arrow_drop_down"
import Size16_1 from "./Size16_1"
export default function Chooseinstitution () {
	return (
		<div className='chooseinstitution_chooseinstitution'>
			<div className='ios'>
				<DeviceiPhoneOrientationPortrait className='HomeIndicator'/>
				<SizeiPhone16Proand16Max className='StatusbariPhone'/>
			</div>
			<div className='Group3'>
				<div className='Rectangle10'/>
				<div className='nav'>
					<DirectionRow className='NavigationButtonList'/>
					<img className='Line4' src = {ImgAsset.chooseinstitution_Line4} />
				</div>
			</div>
			<div className='header'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<span className='FORADI'>FORADI</span>
				<img className='Line5' src = {ImgAsset.chooseinstitution_Line5} />
			</div>
			<span className='ChooseInstitution'>Choose Institution</span>
			<Size16_9 className='Sliders'/>
			<Size16 className='User'/>
			<Size16_10 className='Search'/>
			<Size16_2 className='Plus'/>
			<span className='All'>All</span>
			<arrow_drop_down className='arrow_drop_down'/>
			<Size16_9 className='Sliders_1'/>
			<Size16_10 className='Search_1'/>
			<Size16_1 className='Check'/>
			<img className='Rectangle74' src = {ImgAsset.chooseinstitution_Rectangle74} />
			<img className='Rectangle75' src = {ImgAsset.chooseinstitution_Rectangle75} />
			<span className='HephzibahSchoolInc'>Hephzibah School Inc.</span>
			<span className='AdventistUniversityofthePhilippines'>Adventist University of the Philippines</span>
			<arrow_drop_down className='arrow_drop_down_1'/>
		</div>
	)
}