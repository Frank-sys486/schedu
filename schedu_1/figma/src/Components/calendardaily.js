import React from 'react'
import './calendardaily.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import Group2 from "./Group2"
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
import TextSmall from "./TextSmall"
import DirectionRow from "./DirectionRow"
import arrow_drop_down from "./arrow_drop_down"
import Size16 from "./Size16"
export default function Calendardaily () {
	return (
		<div className='calendardaily_calendardaily'>
			<Group2 className='Group4'/>
			<Group2 className='Group9'/>
			<div className='Rectangle8'/>
			<div className='F'>
				<div className='DEFAULTdefaultACTIVEactive'>
					<span className='_30'>30</span>
				</div>
			</div>
			<div className='ios'>
				<DeviceiPhoneOrientationPortrait className='HomeIndicator'/>
				<SizeiPhone16Proand16Max className='StatusbariPhone'/>
			</div>
			<div className='MenuHeader'>
				<TextSmall className='TextSmall'/>
			</div>
			<div className='TextStrong'>
				<span className='TextStrong_1'>Friday, October 30</span>
			</div>
			<div className='Group3'>
				<div className='Rectangle10'/>
				<div className='nav'>
					<DirectionRow className='NavigationButtonList'/>
					<img className='Line4' src = {ImgAsset.calendardaily_Line4} />
				</div>
			</div>
			<arrow_drop_down className='arrow_drop_down'/>
			<span className='S'>S</span>
			<span className='_7'>7</span>
			<span className='_8'>8</span>
			<span className='_9'>9</span>
			<span className='_10'>10</span>
			<span className='_11'>11</span>
			<span className='_12'>12</span>
			<span className='_1'>1</span>
			<span className='_2'>2</span>
			<span className='_3'>3</span>
			<span className='M'>M</span>
			<span className='T'>T</span>
			<span className='W'>W</span>
			<span className='T_1'>T</span>
			<span className='F_1'>F</span>
			<span className='S_1'>S</span>
			<span className='_25'>25</span>
			<span className='_26'>26</span>
			<span className='_27'>27</span>
			<span className='_28'>28</span>
			<span className='_29'>29</span>
			<span className='_31'>31</span>
			<Group2 className='Group5'/>
			<Group2 className='Group6'/>
			<Group2 className='Group8'/>
			<span className='SCIENCE'>SCIENCE</span>
			<span className='Grade8Tesla'>Grade 8 - Tesla</span>
			<span className='SCIENCE_1'>SCIENCE</span>
			<span className='Grade9Curie'>Grade 9 - Curie</span>
			<span className='SCIENCE_2'>SCIENCE</span>
			<span className='Grade9Bohr'>Grade 9 - Bohr</span>
			<span className='MATHEMATICS'>MATHEMATICS</span>
			<span className='Grade10Newton'>Grade 10 - Newton</span>
			<Link to='/createlessonplan'>
				<div className='Group10'>
					<span className='L2'>L2</span>
					<div className='Rectangle5'/>
				</div>
			</Link>
			<div className='Group13'>
				<span className='L3'>L3</span>
				<div className='Rectangle5_1'/>
			</div>
			<div className='Group11'>
				<span className='SW2'>SW2</span>
				<div className='Rectangle5_2'/>
			</div>
			<div className='Group14'>
				<span className='SW3'>SW3</span>
				<div className='Rectangle5_3'/>
			</div>
			<div className='Group12'>
				<span className='Q1'>Q1</span>
				<div className='Rectangle5_4'/>
			</div>
			<div className='header'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<img className='S11' src = {ImgAsset.dashboard_S11} />
				<span className='SCHEDU'>SCHEDU</span>
				<img className='Line5' src = {ImgAsset.calendardaily_Line5} />
			</div>
			<Size16 className='User'/>
		</div>
	)
}