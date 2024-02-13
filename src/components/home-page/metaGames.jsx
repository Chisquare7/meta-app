import React from 'react'
import { Link } from "react-router-dom";
import { GameItems } from "../../dataHouse/gameData";
import "../home-page-scss/metaGames.scss";
import Button from "../Button";
import { useState } from "react";

const metaGames = () => {

	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? GameItems.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === GameItems.length - 1 ? 0 : prevIndex + 1
		);
	};

  return (
		<div>
			<div className='gameContainer'>
				<div className="container exploreContainer">
					<div className="pageHeading">
						<h1>Explore games and experiences on Meta Quest</h1>
					</div>
					<div className="gamesBtnContainer">
						<Button type="button" className="gamesBtn">
							Browse apps & games
						</Button>
					</div>
				</div>
				<div className="swiper-container">
					<div
						className="eachGamesFlex swiper-wrapper"
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}
					>
						{GameItems.map((item, index) => (
							<div key={index} className="swiper-slide eachGamesBoxes">
								<Link className="eachGamesBoxes" to={"/"}>
									<div className="eachGamesBox">
										<div className="eachGamesImg">
											<img src={item?.image} alt="meta games" className='metaGamesImg' />
										</div>
										<div className="eachGamesTitle">
											<h3>{item?.title}</h3>
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
					<button className="prev" onClick={handlePrev}>
						{"<"}
					</button>
					<button className="next" onClick={handleNext}>
						{">"}
					</button>
				</div>
			</div>
		</div>
	);
}

export default metaGames
