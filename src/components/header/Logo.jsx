import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Logo =({toggleMenu})=>{
	return(
		<h1 className='header__logo'>
			<button
				type="button"
				onClick={toggleMenu}
			><RxHamburgerMenu /><span className="ir">메뉴열기</span></button>
			<a href='/'>
				<span>Webs Ytb</span>
			</a>
		</h1>
	)
}

export default Logo
