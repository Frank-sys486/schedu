import React from 'react'
import './register_1.css'
import {Link} from 'react-router-dom'
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
import StateDefaultValueTypePlaceholder from "./StateDefaultValueTypePlaceholder"
import AlignJustify from "./AlignJustify"
import Size48 from "./Size48"
export default function Register_1 () {
	return (
		<div className='register_1_register'>
			<div className='ios'>
				<DeviceiPhoneOrientationPortrait className='HomeIndicator'/>
				<SizeiPhone16Proand16Max className='StatusbariPhone'/>
			</div>
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
			<div className='Ellipse4'/>
			<Size48 className='Image'/>
		</div>
	)
}