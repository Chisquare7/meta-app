import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const metaUpdates = () => {
	return (
		<div>
			<div>
				<div></div>
				<div>
					<div>
						<div>
							<input type="text" />
							<span class="floating-label">Get news and updates from Meta</span>
						</div>
						<div>
							<Button type="button" className="">
								Add to bag
							</Button>
						</div>
					</div>
					<div>
						<p>
							By signing up you agree to receive updates and marketing messages
							(e.g. email, social, etc.) from Meta about Meta’s existing and
							future products and services.
						</p>
						<p>
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
