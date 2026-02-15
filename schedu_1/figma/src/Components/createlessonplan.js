import React from 'react'
import './createlessonplan.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
import DirectionRow from "./DirectionRow"
import Size16 from "./Size16"
import Size16_1 from "./Size16_1"
import arrow_drop_down from "./arrow_drop_down"
import Size16_2 from "./Size16_2"
export default function Createlessonplan () {
	return (
		<div className='createlessonplan_createlessonplan'>
			<Link to='/chooseschedule'>
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
					<img className='Line4' src = {ImgAsset.createlessonplan_Line4} />
				</div>
			</div>
			<div className='header'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<span className='FORADI'>FORADI</span>
				<img className='Line5' src = {ImgAsset.createlessonplan_Line5} />
			</div>
			<Size16 className='User'/>
			<span className='CreateLessonplan'>Create Lessonplan</span>
			<div className='Rectangle60'/>
			<span className='AcademicYear'>Academic Year</span>
			<div className='Rectangle67'/>
			<span className='WrittenWork'>Written Work</span>
			<div className='Rectangle70'/>
			<span className='_1SeatworkperLesson1activityperlaboratorysessiononelongprojectmakingweeketc'>(1 Seatwork per Lesson, 1 activity per laboratory session, one long project making week, etc.) </span>
			<div className='Rectangle68'/>
			<span className='PerformanceTask'>Performance Task</span>
			<div className='Rectangle69'/>
			<div className='Rectangle106'/>
			<span className='Exam'>Exam</span>
			<span className='Reason'>Reason</span>
			<div className='Rectangle63'/>
			<span className='Subject'>Subject</span>
			<div className='Rectangle61'/>
			<span className='TermCategory'>Term & Category</span>
			<span className='Schedule'>Schedule</span>
			<Link to='/chooseschedule'>
				<div className='Rectangle62'/>
			</Link>
			<span className='Duration'>Duration</span>
			<Size16_1 className='Check'/>
			<Link to='/choosesubject'>
				<div className='Rectangle64'/>
			</Link>
			<span className='Subject_1'>Subject</span>
			<div className='Rectangle65'/>
			<Link to='/choosesection'>
				<div className='Rectangle66'/>
			</Link>
			<span className='Section'>Section</span>
			<img className='Line32' src = {ImgAsset.createlessonplan_Line32} />
			<span className='Overview'>Overview</span>
			<span className='MinimumRequirements'>Minimum Requirements</span>
			<img className='Line33' src = {ImgAsset.createlessonplan_Line33} />
			<span className='ExtraRequirements'>Extra Requirements</span>
			<div className='Rectangle73'/>
			<span className='_1SeatworkperLesson1activityperlaboratorysessiononelongprojectmakingweeketc_1'>(1 Seatwork per Lesson, 1 activity per laboratory session, one long project making week, etc.) </span>
			<span className='ExtraRequirements_1'>Extra Requirements</span>
			<img className='Line34' src = {ImgAsset.createlessonplan_Line34} />
			<span className='SpecialDatesOptional'>Special Dates (Optional)</span>
			<img className='icon' src = {ImgAsset.createlessonplan_icon} />
			<arrow_drop_down className='arrow_drop_down'/>
			<div className='Rectangle105'/>
			<span className='June052025'>June 05 2025</span>
			<Size16_2 className='Plus'/>
		</div>
	)
}