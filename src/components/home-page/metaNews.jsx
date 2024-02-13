import React from 'react'
import { Link } from "react-router-dom";
import { NewsItems } from "../../dataHouse/newsData";
import dropdownArrow from "../../assets/dropdownArrow.svg";

const metaNews = () => {
  return (
		<div>
			<div>
				<div>
					<div>
						<img src={dropdownArrow} alt="fancy dropdown" />
					</div>
					<div>
						<p>Latest News </p>
					</div>
				</div>
				<div>
					{NewsItems.map((item, index) => (
						<Link key={index}>
							<div>
								<div>
									<img src={item?.image} alt="meta games" />
								</div>
								<div>
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

export default metaNews
