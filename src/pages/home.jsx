import React from "react";
import HeroBanner from "../components/home-page/heroBanner";
import DiveInto from "../components/home-page/diveInto";
import MetaProducts from "../components/home-page/metaProduct";
import MetaGames from "../components/home-page/metaGames";
import MetaNews from "../components/home-page/metaNews";
import MetaUpdates from "../components/home-page/metaUpdates";


const home = () => {
	return (
		<>
			<HeroBanner />
			<DiveInto />
			<MetaProducts />
			<MetaGames />
			<MetaNews />
			<MetaUpdates />
		</>
	);
};

export default home;
