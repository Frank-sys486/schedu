import React from 'react'
import './loading.css'
import ImgAsset from '../public'
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
export default function Loading () {
	return (
		<div className='loading_loading'>
			<div className='ios'>
				<DeviceiPhoneOrientationPortrait className='HomeIndicator'/>
				<SizeiPhone16Proand16Max className='StatusbariPhone'/>
			</div>
			<img className='ford21' src = {ImgAsset.loading_ford21} />
			<span className='FORADI'>FORADI</span>
		</div>
	)
}