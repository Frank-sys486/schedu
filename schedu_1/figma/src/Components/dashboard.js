import React from 'react'
import './dashboard.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import DeviceiPhoneOrientationPortrait from "./DeviceiPhoneOrientationPortrait"
import SizeiPhone16Proand16Max from "./SizeiPhone16Proand16Max"
import MenuHeader from "./MenuHeader"
import DirectionRow from "./DirectionRow"
import Size16_8 from "./Size16_8"
import Size16 from "./Size16"
export default function Dashboard () {
	return (
		<div className='dashboard_dashboard'>
			<div className='ios'>
				<DeviceiPhoneOrientationPortrait className='HomeIndicator'/>
				<SizeiPhone16Proand16Max className='StatusbariPhone'/>
			</div>
			<MenuHeader className='MenuHeader'/>
			<MenuHeader className='MenuHeader_1'/>
			<div className='nav'>
				<DirectionRow className='NavigationButtonList'/>
				<img className='Line4' src = {ImgAsset.dashboard_Line4} />
			</div>
			<div className='nav_1'>
				<DirectionRow className='NavigationButtonList_1'/>
				<img className='Line4_1' src = {ImgAsset.dashboard_Line4_1} />
			</div>
			<div className='header'>
				<img className='ford22' src = {ImgAsset.loading_ford21} />
				<img className='S11' src = {ImgAsset.dashboard_S11} />
				<span className='SCHEDU'>SCHEDU</span>
				<img className='Line5' src = {ImgAsset.dashboard_Line5} />
			</div>
			<img className='Line6' src = {ImgAsset.dashboard_Line6} />
			<span className='MAT10'>MAT10</span>
			<span className='Grade10Newton'>Grade 10 - Newton</span>
			<span className='Grade10Newton_1'>Grade 10 - Newton</span>
			<span className='Lesson3Polynomials'>Lesson 3: Polynomials</span>
			<span className='_1130AMto130PM'>11:30 AM to 1:30 PM</span>
			<img className='Line7' src = {ImgAsset.dashboard_Line7} />
			<div className='Rectangle5'/>
			<span className='Lesson4QuadraticFunction'>Lesson 4: Quadratic Function</span>
			<div className='Rectangle7'/>
			<span className='SW3Polynomials'>SW 3: Polynomials</span>
			<div className='Rectangle6'/>
			<img className='Line8' src = {ImgAsset.dashboard_Line8} />
			<span className='MAT10_1'>MAT10</span>
			<span className='Grade10Einstein'>Grade 10 - Einstein</span>
			<span className='MAT10_2'>MAT10</span>
			<span className='Grade10Einstein_1'>Grade 10 - Einstein</span>
			<span className='_300PMto400PM'>3:00 PM to 4:00 PM</span>
			<img className='Line9' src = {ImgAsset.dashboard_Line9} />
			<img className='Line10' src = {ImgAsset.dashboard_Line10} />
			<div className='Rectangle11'/>
			<span className='ApolynomialisamathematicalexpressioncomposedofvariablescoefficientsandexponentsinvolvingonlytheoperationsofadditionsubtractionandmultiplicationItconsistsofafinitenumberoftermswhereeachtermisaconstantoraproductofaconstantandoneormorevariablesraisedtoanonnegativeintegerpowerThehighestexponentinapolynomialdeterminesitsdegreeTypesofpolynomialsMonomialApolynomialwithonetermBinomialApolynomialwithtwotermsTrinomialApolynomialwiththreeterms'>A polynomial is a mathematical expression composed of variables, coefficients, and exponents, involving only the operations of addition, subtraction, and multiplication. It consists of a finite number of terms, where each term is a constant or a product of a constant and one or more variables raised to a non-negative integer power. The highest exponent in a polynomial determines its degree.  <br/><br/>Types of polynomials:<br/>Monomial: A polynomial with one term<br/><br/><br/><br/><br/><br/>Binomial: A polynomial with two terms<br/><br/><br/><br/><br/><br/>Trinomial: A polynomial with three terms<br/><br/></span>
			<img className='Screenshot20251011at10655PM1' src = {ImgAsset.dashboard_Screenshot20251011at10655PM1} />
			<img className='Screenshot20251011at10733PM1' src = {ImgAsset.dashboard_Screenshot20251011at10733PM1} />
			<Size16_8 className='Chevronsright'/>
			<Size16_8 className='Chevronsright_1'/>
			<Size16 className='User'/>
		</div>
	)
}