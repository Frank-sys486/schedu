import React from 'react'
import './chooseschedule.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
import DirectionRow from "./DirectionRow"
import Size16 from "./Size16"
import Size16_1 from "./Size16_1"
import arrow_drop_down from "./arrow_drop_down"
import Size16_2 from "./Size16_2"
export default function Chooseschedule () {
	return (
		<div className='chooseschedule_chooseschedule'>
			<div className='Rectangle100'/>
			<div className='Rectangle101'/>
			<div className='Rectangle102'/>
			<div className='Rectangle72'/>
			<div className='ios'>
				<DeviceiPhoneOrientationPortrait className='HomeIndicator'/>
				<SizeiPhone16Proand16Max className='StatusbariPhone'/>
			</div>
			<div className='Group3'>
				<div className='Rectangle10'/>
				<div className='nav'>
					<DirectionRow className='NavigationButtonList'/>
					<img className='Line4' src = {ImgAsset.chooseschedule_Line4} />
				</div>
			</div>
			<div className='header'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<span className='FORADI'>FORADI</span>
				<img className='Line5' src = {ImgAsset.chooseschedule_Line5} />
			</div>
			<Size16 className='User'/>
			<span className='CreateLessonplan'>Create Lessonplan</span>
			<div className='Rectangle60'/>
			<span className='_20252026'>2025 - 2026</span>
			<div className='Rectangle67'/>
			<span className='WrittenWork'>Written Work</span>
			<div className='Rectangle68'/>
			<span className='PerformanceTask'>Performance Task</span>
			<div className='Rectangle69'/>
			<span className='Exam'>Exam</span>
			<div className='Rectangle63'/>
			<span className='Subject'>Subject</span>
			<div className='Rectangle61'/>
			<span className='Quarter'>Quarter</span>
			<span className='Schedule'>Schedule</span>
			<div className='Rectangle62'/>
			<span className='Duration'>Duration</span>
			<Size16_1 className='Check'/>
			<div className='Rectangle64'/>
			<span className='Subject_1'>Subject</span>
			<Link to='/createsection'>
				<div className='Rectangle65'/>
			</Link>
			<Link to='/undefined'>
				<span className='Section'>Section</span>
			</Link>
			<img className='Line32' src = {ImgAsset.chooseschedule_Line32} />
			<span className='Overview'>Overview</span>
			<span className='MinimumRequirements'>Minimum Requirements</span>
			<img className='Line33' src = {ImgAsset.chooseschedule_Line33} />
			<span className='ExtraRequirements'>Extra Requirements</span>
			<img className='icon' src = {ImgAsset.chooseschedule_icon} />
			<arrow_drop_down className='arrow_drop_down'/>
			<div className='Rectangle76'/>
			<div className='Rectangle77'/>
			<div className='Rectangle78'/>
			<div className='Rectangle79'/>
			<div className='Rectangle80'/>
			<div className='Rectangle81'/>
			<span className='Mon'>Mon</span>
			<span className='Tue'>Tue</span>
			<span className='Wed'>Wed</span>
			<span className='Thu'>Thu</span>
			<span className='Fri'>Fri</span>
			<span className='Sat'>Sat</span>
			<div className='Rectangle82'/>
			<div className='Rectangle83'/>
			<span className='Monday'>Monday</span>
			<div className='Rectangle86'/>
			<div className='Rectangle87'/>
			<span className='and'>and</span>
			<div className='Rectangle88'/>
			<div className='Rectangle89'/>
			<div className='Rectangle90'/>
			<div className='Rectangle91'/>
			<span className='Monday_1'>Monday</span>
			<span className='from'>from</span>
			<span className='_8AM'>8AM</span>
			<div className='Rectangle92'/>
			<div className='Rectangle93'/>
			<div className='Rectangle94'/>
			<span className='June052025'>June 05 2025</span>
			<span className='April22026'>April 2 2026</span>
			<span className='_10AM'>10AM</span>
			<div className='Rectangle95'/>
			<div className='Rectangle96'/>
			<div className='Rectangle97'/>
			<div className='Rectangle98'/>
			<span className='_8AM_1'>8AM</span>
			<div className='Rectangle99'/>
			<span className='_10AM_1'>10AM</span>
			<span className='_1PM'>1PM</span>
			<span className='_3PM'>3PM</span>
			<span className='Wednesday'>Wednesday</span>
			<Size16_2 className='Plus'/>
			<Size16_2 className='Plus_1'/>
			<div className='Rectangle73'/>
			<span className='_1SeatworkperLesson1activityperlaboratorysessiononelongprojectmakingweeketc'>(1 Seatwork per Lesson, 1 activity per laboratory session, one long project making week, etc.) </span>
			<div className='Rectangle103'/>
			<span className='Lecture'>Lecture</span>
			<div className='Rectangle104'/>
			<span className='Laboratory'>Laboratory</span>
		</div>
	)
}