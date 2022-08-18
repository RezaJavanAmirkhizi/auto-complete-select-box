import { useState, useEffect } from "react";

const Product = ({ product }) => {
	const originalPrice =
		product !== null &&
		(product.price * 100) / (100 - product.discountPercentage); //Create this variable to calculate the original price

	const [selectedImage, setSlectedImage] = useState(
		product.images.length !== 0 ? product.images[0] : ""
	); //Create this state to control selected image

	//Create this to control selected image when product is changed
	useEffect(() => {
		setSlectedImage(product.images.length !== 0 ? product.images[0] : "");
	}, [product])

	//Create this function to set the selected image
	const handleSelectedImage = (image) => {
		setSlectedImage(image);
	};

	return (
		<>
			{
				<div className="container">
					<div className="product">
						<div className="information">
							<h1>{`${product.title} | ${product.brand}`}</h1>
							<p>{`Description : ${product.description}`}</p>
							<p className="price">{`From ${
								product.price
							}$ to ${originalPrice.toFixed(0)}$`}</p>
							<p>{`-${product.discountPercentage}%`}</p>
							<p>{`Rating : ${product.rating}`}</p>
							<button>Buy from the cheapest seller</button>
						</div>
						<div className="images">
							<img
								className="selected-image"
								alt={product.title}
								src={selectedImage}
							/>
							<div className="image-gallery">
								{product.images.length !== null &&
									product.images.map((img, index) => {
										return (
											<img
												key={index}
												className={`product-image ${
													selectedImage === img
														? "selected"
														: ""
												}`}
												src={img}
												alt={product.title}
												onClick={() =>
													handleSelectedImage(img)
												}
											/>
										);
									})}
							</div>
						</div>
					</div>
				</div>
			}
		</>
	);
};

export default Product;
