import React from 'react'
import './calendarmonthly.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
import TextSmall from "./TextSmall"
import DirectionRow from "./DirectionRow"
import arrow_drop_down from "./arrow_drop_down"
import Size16 from "./Size16"
import Size24_5 from "./Size24_5"
export default function Calendarmonthly () {
	return (
		<div className='calendarmonthly_calendarmonthly'>
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
				<span className='October'>October </span>
			</div>
			<div className='Group3'>
				<div className='Rectangle10'/>
				<div className='nav'>
					<DirectionRow className='NavigationButtonList'/>
					<img className='Line4' src = {ImgAsset.calendarmonthly_Line4} />
				</div>
			</div>
			<div className='header'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<span className='FORADI'>FORADI</span>
				<img className='Line5' src = {ImgAsset.calendarmonthly_Line5} />
			</div>
			<span className='S'>S</span>
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
			<span className='_18'>18</span>
			<span className='_19'>19</span>
			<span className='_20'>20</span>
			<span className='_21'>21</span>
			<span className='_22'>22</span>
			<span className='_23'>23</span>
			<span className='_24'>24</span>
			<span className='_11'>11</span>
			<span className='_12'>12</span>
			<span className='_13'>13</span>
			<span className='_14'>14</span>
			<span className='_15'>15</span>
			<span className='_16'>16</span>
			<span className='_17'>17</span>
			<span className='_4'>4</span>
			<span className='_5'>5</span>
			<span className='_6'>6</span>
			<span className='_7'>7</span>
			<span className='_8'>8</span>
			<span className='_9'>9</span>
			<span className='_10'>10</span>
			<span className='_1'>1</span>
			<span className='_2'>2</span>
			<span className='_3'>3</span>
			<span className='_4_1'>4</span>
			<span className='_5_1'>5</span>
			<span className='_6_1'>6</span>
			<span className='_7_1'>7</span>
			<span className='_27_1'>27</span>
			<span className='_28_1'>28</span>
			<span className='_29_1'>29</span>
			<span className='_30_1'>30</span>
			<span className='_1_1'>1</span>
			<span className='_2_1'>2</span>
			<span className='_3_1'>3</span>
			<img className='Line8' src = {ImgAsset.calendarmonthly_Line8} />
			<img className='Line11' src = {ImgAsset.calendarmonthly_Line11} />
			<img className='Line15' src = {ImgAsset.calendarmonthly_Line15} />
			<img className='Line19' src = {ImgAsset.calendarmonthly_Line19} />
			<img className='Line22' src = {ImgAsset.calendarmonthly_Line22} />
			<img className='Line23' src = {ImgAsset.calendarmonthly_Line23} />
			<img className='Line20' src = {ImgAsset.calendarmonthly_Line20} />
			<Link to='/calendarmonthlyzoomed'>
				<img className='Line24' src = {ImgAsset.calendarmonthly_Line24} />
			</Link>
			<Link to='/calendarmonthlyzoomed'>
				<img className='Line25' src = {ImgAsset.calendarmonthly_Line25} />
			</Link>
			<img className='Line16' src = {ImgAsset.calendarmonthly_Line16} />
			<img className='Line12' src = {ImgAsset.calendarmonthly_Line12} />
			<img className='Line17' src = {ImgAsset.calendarmonthly_Line17} />
			<img className='Line21' src = {ImgAsset.calendarmonthly_Line21} />
			<img className='Line13' src = {ImgAsset.calendarmonthly_Line13} />
			<img className='Line14' src = {ImgAsset.calendarmonthly_Line14} />
			<img className='Line10' src = {ImgAsset.calendarmonthly_Line10} />
			<div className='Group23'>
				<div className='Rectangle12'/>
				<span className='SCIENCE'>SCIENCE</span>
				<span className='Grade8Tesla'>Grade 8 - Tesla</span>
				<arrow_drop_down className='arrow_drop_down'/>
			</div>
			<Size16 className='User'/>
			<Size24_5 className='Morehorizontal'/>
		</div>
	)
}