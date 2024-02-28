import {PiAirplaneBold} from 'react-icons/pi'
import {PiArrowBendDownRightBold} from 'react-icons/pi'
import { SiNaver } from "react-icons/si";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";

export const headerMenus=[
    {
        title:"메인",
        icon:<PiAirplaneBold />,
        src:"/",
    },
    {
        title:"오늘의 영상",
        icon:<PiArrowBendDownRightBold />,
        src:"/today",
    },
    {
        title:"강아지 채널",
        icon:<PiArrowBendDownRightBold />,
        src:"/dogs",
    },
    {
        title:"고양이들",
        icon:<PiArrowBendDownRightBold />,
        src:"/cats",
    },
    {
        title:"웹 표준",
        icon:<PiArrowBendDownRightBold />,
        src:"/website",
    },
    {
        title:"GSAP",
        icon:<PiArrowBendDownRightBold />,
        src:"/gsap",
    },
    {
        title:"YTB",
        icon:<PiArrowBendDownRightBold />,
        src:"/youtube",
    },
];

export const searchKeyword=[
    {
        title:"webstu",
        src:"/search/webstu",
    },
    {
        title:"HTML",
        src:"/search/HTML",
    },
    {
        title:"CSS",
        src:"/search/css",
    },
    {
        title:"JavaScript",
        src:"/search/javascript",
    },
    {
        title:"React.js",
        src:"/search/react.js",
    },
    {
        title:"Vue.js",
        src:"/search/vue.js",
    },
    {
        title:"Node.js",
        src:"/search/node.js",
    },
    {
        title:"SQL",
        src:"/search/sql",
    },
    {
        title:"music",
        src:"/search/music",
    },
];

export const snsLink=[
    {
        title:"네이버",
        url:"https://www.naver.com",
        icon:<SiNaver />
    },
    {
        title:"유튜브",
        url:"https://www.youtube.com/",
        icon:<PiYoutubeLogoFill />
    },
    {
        title:"instagram",
        url:"https://www.instagram.com/youtubekorea/",
        icon:<FaInstagram />
    },
];
