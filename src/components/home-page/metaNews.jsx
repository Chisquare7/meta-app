import React from 'react'
import { Link } from "react-router-dom";
import { NewsItems } from "../../dataHouse/newsData";
import dropdownArrow from "../../assets/dropdownArrow.svg";
import "../home-page-scss/metaNews.scss";
import { useState } from "react";

const metaNews = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? NewsItems.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === NewsItems.length - 1 ? 0 : prevIndex + 1
		);
	};
  return (
		<div >
			<div className='containerNews'>
				<div>
					<div>
						<img src={dropdownArrow} alt="fancy dropdown" />
					</div>
					<div>
						<p>Latest News </p>
					</div>
				</div>
				<div className="swiper-container newsContainer">
					<div
						className="eachNewsFlex swiper-wrapper"
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}
					>
						{NewsItems.map((item, index) => (
							<div key={index} className="swiper-slide eachNewsBoxes">
								<Link className="eachNewsBoxes" to={"/"}>
									<div className="eachNewsBox">
										<div className='metaNewsImages'>
											<img
												src={item?.image}
												alt="meta games"
												className="metaNewsImg"
											/>
										</div>
										<div className="eachNewsTitle">
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

export default metaNews
