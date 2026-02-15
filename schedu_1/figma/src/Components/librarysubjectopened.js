import React from 'react'
import './librarysubjectopened.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
import DirectionRow from "./DirectionRow"
import arrow_drop_down from "./arrow_drop_down"
import Size24_5 from "./Size24_5"
import Size16_11 from "./Size16_11"
import Size16_2 from "./Size16_2"
import Size16 from "./Size16"
export default function Librarysubjectopened () {
	return (
		<div className='librarysubjectopened_librarysubjectopened'>
			<div className='Rectangle20'/>
			<div className='Rectangle19'/>
			<div className='Rectangle30'/>
			<div className='ios'>
				<DeviceiPhoneOrientationPortrait className='HomeIndicator'/>
				<SizeiPhone16Proand16Max className='StatusbariPhone'/>
			</div>
			<div className='Group3'>
				<div className='Rectangle10'/>
				<div className='nav'>
					<DirectionRow className='NavigationButtonList'/>
					<img className='Line4' src = {ImgAsset.librarysubjectopened_Line4} />
				</div>
			</div>
			<span className='SCI8Science'>SCI8 - Science</span>
			<div className='Rectangle5'/>
			<Link to='/librarysubjectclosed'>
				<div className='Rectangle13'/>
			</Link>
			<Link to='/librarylesson'>
				<div className='Rectangle14'/>
			</Link>
			<span className='Chapter1TheHumanBody'>Chapter 1 - The Human Body</span>
			<span className='Lesson1IntroductiontoScience'>Lesson 1: Introduction to Science</span>
			<div className='Rectangle15'/>
			<span className='Lesson2TheHumanBody'>Lesson 2: The Human Body</span>
			<div className='Rectangle16'/>
			<span className='Lesson3DigestiveSystem'>Lesson 3: Digestive System</span>
			<div className='Rectangle17'/>
			<span className='Lesson4SkeletalSystem'>Lesson 4: Skeletal System</span>
			<div className='Rectangle18'/>
			<span className='Lesson5MuscularSystem'>Lesson 5: Muscular System</span>
			<arrow_drop_down className='arrow_drop_down'/>
			<arrow_drop_down className='arrow_drop_down_1'/>
			<Size24_5 className='Morehorizontal'/>
			<Size16_11 className='Morehorizontal_1'/>
			<div className='Group19'>
				<div className='Rectangle14_1'/>
				<span className='Chapter2AnatomyofPlants'>Chapter 2 - Anatomy of Plants</span>
				<arrow_drop_down className='arrow_drop_down_2'/>
				<Size16_11 className='Morehorizontal_2'/>
			</div>
			<div className='Group21'>
				<div className='Group20'>
					<div className='Rectangle15_1'/>
					<span className='Chapter3PlantsandAnimals'>Chapter 3 - Plants and Animals</span>
				</div>
				<arrow_drop_down className='arrow_drop_down_3'/>
				<Size16_11 className='Morehorizontal_3'/>
			</div>
			<img className='Icon' src = {ImgAsset.librarysubjectopened_Icon} />
			<img className='image4' src = {ImgAsset.choosesubject_image2} />
			<img className='Line28' src = {ImgAsset.librarysubjectopened_Line28} />
			<div className='Ellipse2'/>
			<arrow_drop_down className='arrow_drop_down_4'/>
			<span className='WrittenWork'>Written Work</span>
			<span className='PerformanceTask'>Performance Task</span>
			<Link to='/createquiz'>
				<div className='Group21_1'>
					<div className='Rectangle16_1'/>
					<Size16_2 className='Plus'/>
				</div>
			</Link>
			<Link to='/createproject'>
				<div className='Group22'>
					<div className='Rectangle16_2'/>
					<Size16_2 className='Plus_1'/>
				</div>
			</Link>
			<div className='Rectangle28'/>
			<span className='Seatwork1'>Seatwork 1</span>
			<div className='Rectangle29'/>
			<span className='Seatwork2'>Seatwork 2</span>
			<span className='Seatwork3'>Seatwork 3</span>
			<div className='Rectangle29_1'/>
			<span className='BodySystemDiagram'>Body System Diagram</span>
			<span className='AY20252026'>A.Y. 2025 - 2026</span>
			<div className='header'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<img className='S11' src = {ImgAsset.dashboard_S11} />
				<span className='SCHEDU'>SCHEDU</span>
				<img className='Line5' src = {ImgAsset.librarysubjectopened_Line5} />
			</div>
			<Size16 className='User'/>
		</div>
	)
}