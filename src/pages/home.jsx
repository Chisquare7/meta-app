import React from "react";
import HeroBanner from "../components/home-page/heroBanner";
import DiveInto from "../components/home-page/diveInto";
import MetaProducts from "../components/home-page/metaProduct";
import MetaGames from "../components/home-page/metaGames";
// import MetaNews from "../components/home-page/metaNews";
import MetaUpdates from "../components/home-page/metaUpdates";
import "../pages/home.scss";
import heroBG from "../assets/heroBG.webp"



const home = () => {
	return (
		<>
			<div className="homePosition">
				<div className="heroSpace">
					<HeroBanner />
				</div>
				<div className="pageBackground">
					<img src={heroBG} alt="hero background image" className="heroBGs" />
				</div>
				<div className="diveSpace">
					<DiveInto />
				</div>
				<div className="prodSpace">
					<MetaProducts />
				</div>
				<div className="gamesSpace">
					<MetaGames />
				</div>
				<div>{/* <MetaNews /> */}</div>
				<div className="updateSpace">
					<MetaUpdates />
				</div>
			</div>
		</>
	);
};

export default home;
