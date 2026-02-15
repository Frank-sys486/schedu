import React from 'react'
import './choosesubject.css'
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
export default function Choosesubject () {
	return (
		<div className='choosesubject_choosesubject'>
			<div className='ios'>
				<DeviceiPhoneOrientationPortrait className='HomeIndicator'/>
				<SizeiPhone16Proand16Max className='StatusbariPhone'/>
			</div>
			<div className='Group3'>
				<div className='Rectangle10'/>
				<div className='nav'>
					<DirectionRow className='NavigationButtonList'/>
					<img className='Line4' src = {ImgAsset.choosesubject_Line4} />
				</div>
			</div>
			<div className='header'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<span className='FORADI'>FORADI</span>
				<img className='Line5' src = {ImgAsset.choosesubject_Line5} />
			</div>
			<span className='ChooseSubject'>Choose Subject</span>
			<Size16_9 className='Sliders'/>
			<Size16 className='User'/>
			<Size16_10 className='Search'/>
			<div className='Rectangle2'/>
			<div className='Rectangle3'/>
			<div className='Rectangle4'/>
			<span className='SCI9Science'>SCI9 - Science</span>
			<img className='image1' src = {ImgAsset.choosesubject_image1} />
			<img className='image2' src = {ImgAsset.choosesubject_image2} />
			<img className='image3' src = {ImgAsset.choosesubject_image3} />
			<Size16_2 className='Plus'/>
			<span className='All'>All</span>
			<arrow_drop_down className='arrow_drop_down'/>
			<Size16_9 className='Sliders_1'/>
			<Size16_10 className='Search_1'/>
			<div className='Rectangle5'/>
			<div className='Rectangle6'/>
			<div className='Rectangle7'/>
			<span className='MAT10Mathematics'>MAT10 - Mathematics</span>
			<span className='SCI9Science_1'>SCI9 - Science</span>
			<img className='image4' src = {ImgAsset.choosesubject_image1} />
			<img className='image5' src = {ImgAsset.choosesubject_image2} />
			<img className='image6' src = {ImgAsset.choosesubject_image3} />
			<Size16_2 className='Plus_1'/>
			<div className='Maskgroup'>
				<div className='Rectangle8'/>
				<img className='image7' src = {ImgAsset.choosesubject_image1} />
				<div className='Rectangle9'/>
				<img className='image9' src = {ImgAsset.choosesubject_image9} />
			</div>
			<Size16_1 className='Check'/>
			<span className='MAT10Mathematics_1'>MAT10 - Mathematics</span>
			<span className='HephzibahSchoolInc'>Hephzibah School Inc.</span>
			<span className='HephzibahSchoolInc_1'>Hephzibah School Inc.</span>
			<span className='HephzibahSchoolInc_2'>Hephzibah School Inc.</span>
			<span className='AdventistUniversityofthePhilippines'>Adventist University of the Philippines</span>
			<span className='SCI8Science'>SCI8 - Science</span>
			<arrow_drop_down className='arrow_drop_down_1'/>
		</div>
	)
}