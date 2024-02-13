import React from 'react'
import { Link } from "react-router-dom";
import { GameItems } from "../../dataHouse/gameData";
import "../home-page-scss/metaGames.scss";
import Button from "../Button";

const metaGames = () => {
  return (
		<div>
			<div className='container'>
				<div className='exploreContainer'>
					<div className="pageHeading">
						<h1>Explore games and experiences on Meta Quest</h1>
					</div>
					<div className='gamesBtnContainer'>
						<Button type="button" className="gamesBtn">
							Browse apps & games
						</Button>
					</div>
				</div>
				<div className='eachGamesFlex'>
					{GameItems.map((item, index) => (
						<Link key={index} className="eachGamesBoxes">
							<div className='eachGamesBox'>
								<div className='eachGamesImg'>
									<img src={item?.image} alt="meta games" />
								</div>
								<div className='eachGamesTitle'>
									<h3>{item?.title}</h3>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default metaGames
