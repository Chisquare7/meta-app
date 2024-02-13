import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import rightArrow from "../../assets/rightArrow.svg";
import metaVR from "../../assets/metaPhoto1desk.png"
import metaVR2 from "../../assets/metaPhoto2desk.png"

const diveInto = () => {
	return (
		<div>
			<div className="container">
				<div>
					<div>
						<div>
							<div>
								<div className="pageHeading VR-head">
									<h1>Dive into VR with Meta Quest 2</h1>
								</div>
								<div className="pageContext VR-context">
									<p>
										Experience the thrill of immersive games, fitness apps and
										entertainment—now for $50 less.
									</p>
								</div>
								<div className="heroBtnFlex">
									<div className="heroBtnLeft rowBtn">
										<Button type="button" className="">
											Add to bag
										</Button>
									</div>
									<div className="circleRight">
										<img
											src={rightArrow}
											alt="right arrow icon"
											className="rightArrow"
										/>
									</div>
									<div className="heroBtnRight rowBtn">
										<Button type="button" className="learnBtn">
											Learn more
										</Button>
									</div>
								</div>
							</div>
							<div>
								<Link>
									<img src={metaVR} alt="VR icon" />
								</Link>
							</div>
						</div>
					</div>
					<div>
						<div>
							<div>
								<div className="pageHeading VR-head">
									<h1>Do more in style with Ray-Ban | Meta</h1>
								</div>
								<div className="pageContext VR-context">
									<p>
										Next-generation smart glasses that blend an iconic look with
										cutting-edge technology.
									</p>
								</div>
								<div className="heroBtnFlex">
									<div className="heroBtnLeft rowBtn">
										<Button type="button" className="">
											Shop all styles
										</Button>
									</div>
									<div className="circleRight">
										<img
											src={rightArrow}
											alt="right arrow icon"
											className="rightArrow"
										/>
									</div>
									<div className="heroBtnRight rowBtn">
										<Button type="button" className="learnBtn">
											Learn more
										</Button>
									</div>
								</div>
							</div>
							<div>
								<Link>
									<img src={metaVR2} alt="VR icon" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default diveInto;
