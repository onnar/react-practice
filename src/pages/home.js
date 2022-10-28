import React from 'react';
/*
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
*/
//import $ from "jquery";
import { Link } from 'react-router-dom';

const Main = (props) => {
	//SwiperCore.use([Navigation, Pagination]);
	const a = (e) => {
		console.log(e.target.text);
		//console.log($(this));
	}

	return (
		<>
			<h3 onClick={a}>안녕하세요. 메인페이지 입니다.</h3>
			<ul>
				<Link to="/product/1"><li>1번상품</li></Link>
				<Link to="/product/2"><li>2번상품</li></Link>
			</ul>
		</>
	);
};

export default Main;