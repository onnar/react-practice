import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Work from './pages/work';
import Movie from './pages/movie';
import NotFound from './pages/NotFound';
//import './App.css';
import './styles/app.scss';

function App() {
	return (
		<div id="appLayout">
			<BrowserRouter>
				<Header />
				<section className="page-container">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/index" element={<Home />}></Route>
						<Route path="/about/*" element={<About />}></Route>
						<Route path="/work/*" element={<Work />}></Route>
						<Route path="/movie/*" element={<Movie />}></Route>
						{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
						<Route path="/*" element={<NotFound />}></Route>
					</Routes>
				</section>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
