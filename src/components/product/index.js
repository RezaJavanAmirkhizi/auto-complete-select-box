const Product = ({ product }) => {

	const originalPrice =
		product !== null && (product.price * 100) / (100 - product.discountPercentage); //Create this variable to calculate the original price

	return (
		<>
			{product !== null && (
				<div className="container">
					<div className="product">
						<div className="information">
							<h1>{`${product.title} | ${product.brand}`}</h1>
							<p>{`Description : ${product.description}`}</p>
							<p className="price">{`From ${product.price}$ to ${originalPrice.toFixed(0)}$`}</p>
							<p>{`-${product.discountPercentage}%`}</p>
							<p>{`Rating : ${product.rating}`}</p>
							<button>Buy from the cheapest seller</button>
						</div>
						<div className="images">
							<img alt={product.title} src={product.images[0]} />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Product;
