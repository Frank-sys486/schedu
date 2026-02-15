import React from 'react'
import './login.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
import FormLogIn from "./FormLogIn"
export default function Login () {
	return (
		<div className='login_login'>
			<div className='ios'>
				<DeviceiPhoneOrientationPortrait className='HomeIndicator'/>
				<SizeiPhone16Proand16Max className='StatusbariPhone'/>
			</div>
			<div className='logoset'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<span className='SCHEDU'>SCHEDU</span>
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
				<img className='Line1' src = {ImgAsset.login_Line1} />
				<img className='Line2' src = {ImgAsset.login_Line2} />
				<img className='Line3' src = {ImgAsset.login_Line3} />
			</div>
			<Link to='/register'>
				<span className='DonthaveanAccountRegister'>Dont have an Account? Register</span>
			</Link>
			<FormLogIn className='FormLogIn'/>
			<img className='S11' src = {ImgAsset.dashboard_S11} />
		</div>
	)
}