import React from 'react'
import { Link } from 'react-router-dom';
import { ProductItems } from "../../dataHouse/productData"
import "../home-page-scss/metaProduct.scss";
import Button from "../Button";

const metaProduct = () => {
  return (
		<div>
			<div className="container">
				<div className="metaProd">
					<div className="pageHeading">
						<h1>Shop Meta products</h1>
					</div>
					<div className="pageContext">
						<p>
							The future of virtual reality, mixed reality and smart glasses is
							here.
						</p>
					</div>
				</div>
				<div className='eachProdFlex'>
					{ProductItems.map((item, index) => (
						<div className='eachProdBox eachProdBoxes'>
							<Link key={index} >
								<div className="eachProd">
									<img src={item?.image} alt="meta product" />
								</div>
							</Link>
							<div className='eachProdTitle'>
								<h3 className='prodTitle'>{item?.title}</h3>
							</div>
							<Button type="button" className="shopNowBtn">
								Shop now
							</Button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default metaProduct
