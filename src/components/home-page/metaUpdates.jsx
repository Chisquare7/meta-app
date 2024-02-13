import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import "../home-page-scss/metaUpdates.scss";
import { useState } from "react";

const metaUpdates = () => {
	const [inputValue, setInputValue] = useState("")

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};
	return (
		<div className="container">
			<div>
				<div className="updateHeading">
					<p className="updateHead">KEEP YOUR EXPERIENCE UP TO DATE</p>
				</div>
				<div className="updateContent">
					<div className="topUpdate">
						<div className="updateInput">
							<input
								className={inputValue ? "inputField active" : "inputField"}
								value={inputValue}
								onChange={handleChange}
							/>
							<span class="floating-label">Get news and updates from Meta</span>
						</div>
						<div className="updateBtnContainer">
							<Button type="button" className="updateBtn">
								Sign up
							</Button>
						</div>
					</div>
					<div className="bottomUpdate">
						<p>
							By signing up you agree to receive updates and marketing messages
							(e.g. email, social, etc.) from Meta about Meta’s existing and
							future products and services.
						</p>
						<p className="middleText">
							You may withdraw your consent and unsubscribe at any time by
							clicking the unsubscribe link included in our messages.
						</p>
						<p>
							Your subscription is subject to the <Link>Terms</Link> and{" "}
							<Link>Privacy</Link>
							Policy.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default metaUpdates;
