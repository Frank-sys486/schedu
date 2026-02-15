import React from 'react'
import './librarysubjectclosed.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
import DirectionRow from "./DirectionRow"
import Size16 from "./Size16"
import arrow_drop_down from "./arrow_drop_down"
import Size24_5 from "./Size24_5"
import Size16_11 from "./Size16_11"
import Size16_2 from "./Size16_2"
export default function Librarysubjectclosed () {
	return (
		<div className='librarysubjectclosed_librarysubjectclosed'>
			<img className='Line27' src = {ImgAsset.librarysubjectclosed_Line27} />
			<div className='Ellipse1'/>
			<div className='ios'>
				<DeviceiPhoneOrientationPortrait className='HomeIndicator'/>
				<SizeiPhone16Proand16Max className='StatusbariPhone'/>
			</div>
			<div className='Group3'>
				<div className='Rectangle10'/>
				<div className='nav'>
					<DirectionRow className='NavigationButtonList'/>
					<img className='Line4' src = {ImgAsset.librarysubjectclosed_Line4} />
				</div>
			</div>
			<div className='header'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<span className='FORADI'>FORADI</span>
				<img className='Line5' src = {ImgAsset.librarysubjectclosed_Line5} />
			</div>
			<span className='SCI8Science'>SCI8 - Science</span>
			<span className='AY20252026'>A.Y. 2025 - 2026</span>
			<Size16 className='User'/>
			<div className='Rectangle5'/>
			<arrow_drop_down className='arrow_drop_down'/>
			<Size24_5 className='Morehorizontal'/>
			<Link to='/librarysubjectopened'>
				<div className='Group16'>
					<div className='Rectangle13'/>
					<span className='Chapter1TheHumanBody'>Chapter 1 - The Human Body</span>
					<arrow_drop_down className='arrow_drop_down_1'/>
					<Size16_11 className='Morehorizontal_1'/>
				</div>
			</Link>
			<div className='Rectangle14'/>
			<span className='Chapter2AnatomyofPlants'>Chapter 2 - Anatomy of Plants</span>
			<arrow_drop_down className='arrow_drop_down_2'/>
			<arrow_drop_down className='arrow_drop_down_3'/>
			<Size16_11 className='Morehorizontal_2'/>
			<div className='Group18'>
				<div className='Rectangle15'/>
				<span className='Chapter3PlantsandAnimals'>Chapter 3 - Plants and Animals</span>
				<arrow_drop_down className='arrow_drop_down_4'/>
				<Size16_11 className='Morehorizontal_3'/>
			</div>
			<img className='Icon' src = {ImgAsset.librarysubjectclosed_Icon} />
			<img className='image4' src = {ImgAsset.choosesubject_image2} />
			<div className='Group15'>
				<div className='Rectangle16'/>
				<Size16_2 className='Plus'/>
			</div>
			<span className='Notes'>Notes</span>
			<div className='Rectangle17'/>
			<div className='Rectangle23'/>
			<div className='Rectangle18'/>
			<span className='WrittenWork'>Written Work</span>
			<span className='PerformanceTask'>Performance Task</span>
			<div className='Rectangle16_1'/>
			<Size16_2 className='Plus_1'/>
			<Link to='/createproject'>
				<div className='Group20'>
					<div className='Rectangle16_2'/>
					<Size16_2 className='Plus_2'/>
				</div>
			</Link>
			<div className='Rectangle21'/>
			<span className='Seatwork1'>Seatwork 1</span>
			<div className='Rectangle28'/>
			<span className='BodySystemDiagram'>Body System Diagram</span>
			<div className='Rectangle24'/>
			<span className='Seatwork2'>Seatwork 2</span>
			<div className='Rectangle25'/>
			<span className='Seatwork3'>Seatwork 3</span>
			<div className='Rectangle26'/>
			<span className='Quiz1'>Quiz 1</span>
			<div className='Rectangle27'/>
			<span className='Quiz2'>Quiz 2</span>
		</div>
	)
}