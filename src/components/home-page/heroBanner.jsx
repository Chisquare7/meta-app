import React from "react";
import Button from "../Button";
import rightArrow from "../../assets/rightArrow.svg";
import "../home-page-scss/heroBanner.scss";

const heroBanner = () => {
	return (
		<div className="container">
			<div className="heroBackground">
				<div className="smallHeroSpec">
					<span className="smallHeroText">Special offer</span>
				</div>
				<div className="pageHeading">
					<h1 className="heroHead">Mix reality with Meta Quest 3</h1>
				</div>
				<div className="pageContext">
					<p className="heroContent">
						Get Asgard's Wrath 2 free ($59.99 USD value)—and receive a 6-month
						trial to Meta Quest+ ($47.94 USD value) when you upgrade to 512GB.**
					</p>
				</div>
				<div className="heroBtnFlex">
					<div className="heroBtnLeft rowBtn">
						<Button type="button" className="">
							Add to bag
						</Button>
					</div>
					<div className="circleRight">
						<img src={rightArrow} alt="right arrow icon" className="rightArrow" />
					</div>
					<div className="heroBtnRight rowBtn">
						<Button type="button" className="learnBtn">
							Learn more
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default heroBanner;
