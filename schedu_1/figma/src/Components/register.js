import React from 'react'
import './register.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
import StateDefaultValueTypePlaceholder from "./StateDefaultValueTypePlaceholder"
import AlignJustify from "./AlignJustify"
export default function Register () {
	return (
		<div className='register_register'>
			<div className='ios'>
				<DeviceiPhoneOrientationPortrait className='HomeIndicator'/>
				<SizeiPhone16Proand16Max className='StatusbariPhone'/>
			</div>
			<div className='logoset'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<span className='FORADI'>FORADI</span>
				<span className='SmarterLessonPlanning'>Smarter Lesson Planning</span>
			</div>
			<div className='continuewith'>
				<div className='googleapple'>
					<div className='google'>
						<span className='ContinuewithGoogle'>Continue with Google</span>
						<div className='Rectangle1'/>
					</div>
					<div className='apple'>
						<span className='ContinuewithApple'>Continue with Apple</span>
						<div className='Rectangle2'/>
					</div>
				</div>
				<img className='Line1' src = {ImgAsset.register_Line1} />
				<img className='Line2' src = {ImgAsset.register_Line2} />
				<img className='Line3' src = {ImgAsset.register_Line3} />
			</div>
			<Link to='/login'>
				<span className='AlreadyhaveanAccountLogin'>Already have an Account? Login</span>
			</Link>
			<div className='Group1'>
				<div className='FormRegister'>
					<StateDefaultValueTypePlaceholder className='InputField'/>
					<div className='InputField_1'>
						<span className='Label'>ssword</span>
						<span className='Description'>Description</span>
						<span className='Error'>Error</span>
					</div>
					<StateDefaultValueTypePlaceholder className='InputField_2'/>
					<AlignJustify className='ButtonGroup'/>
				</div>
			</div>
		</div>
	)
}