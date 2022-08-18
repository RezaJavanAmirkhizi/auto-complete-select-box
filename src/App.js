import "./assets/index.scss";
import AutoCompleteBox from "./components/autoCompleteBox";
import Product from "./components/product";
import { useState, useEffect } from "react";
import axios from "./api/axios";
import ThemeHandler from "./components/themeHandler";

function App() {
	const [products, setProducts] = useState([]); //Create this state to get products from api
	const [selectedProduct, setSelectedProduct] = useState(null); //Create this state to get selected product from select box

	const getSelectedProduct = (product) => {
		setSelectedProduct(product);
	};

	const getProducts = async () => {
		await axios
			.get("/products")
			.then((response) => {
				setProducts(response.data.products);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className="App">
			<AutoCompleteBox
				products={products}
				getSelectedProduct={getSelectedProduct}
			/>
			{selectedProduct && <Product product={selectedProduct} />}
			<ThemeHandler />
		</div>
	);
}

export default App;
