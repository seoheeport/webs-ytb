import React from 'react'

import {PiAirplaneBold} from 'react-icons/pi'
import {PiArrowBendDownRightBold} from 'react-icons/pi'
import { SiNaver } from "react-icons/si";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";

const Header = () =>{
    return(
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href='/'>
                    <i aria-hidden='true'></i>
                    <span>Webs Ytb</span>
                </a>
            </h1>

            <nav className='header__menu'>
                <ul className='menu'>
                    <li className='active'>
                        <a href="/">
                            <PiAirplaneBold />어쩌구
                        </a>
                    </li>
                    <li>
                        <a href="/today">
                            <PiArrowBendDownRightBold />추천 영상
                        </a>
                    </li>
                    <li>
                        <a href="/developer">
                            <PiArrowBendDownRightBold />dev
                        </a>
                    </li>
                    <li>
                        <a href="/webd">
                            <PiArrowBendDownRightBold />WEB D
                        </a>
                    </li>
                    <li>
                        <a href="/website">
                            <PiArrowBendDownRightBold />웹 표준
                        </a>
                    </li>
                    <li>
                        <a href="/gsap">
                            <PiArrowBendDownRightBold />GSAP
                        </a>
                    </li>
                    <li>
                        <a href="/port">
                            <PiArrowBendDownRightBold />PORT
                        </a>
                    </li>
                    <li>
                        <a href="/youtube">
                            <PiArrowBendDownRightBold /> YTB
                        </a>
                    </li>
                </ul>
                <ul className='keyword'>
                    <li>
                        <a href="/search/webstu">webstu</a>
                    </li>
                    <li>
                        <a href="/search/HTML">HTML</a>
                    </li>
                    <li>
                        <a href="/search/css">CSS</a>
                    </li>
                    <li>
                        <a href="/search/javascript">JavaScript</a>
                    </li>
                    <li>
                        <a href="/search/react.js">React.js</a>
                    </li>
                    <li>
                        <a href="/search/vue.js">Vue.js</a>
                    </li>
                    <li>
                        <a href="/search/node.js">Node.js</a>
                    </li>
                    <li>
                        <a href="/search/sql">SQL</a>
                    </li>
                    <li>
                        <a href="/search/music">music</a>
                    </li>
                </ul>
            </nav>

            <ul className='header__sns'>
                <li>
                    <a href='https://www.naver.com/' rel='noopener noreferrer'><SiNaver /></a>
                </li>
                <li>
                    <a href='https://www.naver.com/' rel='noopener noreferrer'><PiYoutubeLogoFill /></a>
                </li>
                <li>
                    <a href='https://www.naver.com/' rel='noopener noreferrer'><FaInstagram /></a>
                </li>
            </ul>
        </header>
    )
}

export default Header