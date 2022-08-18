import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const AutoCompleteBox = (props) => {
	const [showOptions, setShowOptions] = useState(false); //Create this state to control open or close search box and options
	const [value, setValue] = useState(""); //Create this state to control and get value from search input
	const [selectedOption, setSelectedOption] = useState(
		"Please select product"
	); //Create this state to set selected option

	//Create this variable to get options whit search filter
	const options = props.products?.filter((product) =>
		product?.title.toLowerCase().includes(value.toLowerCase())
	);

	//Create this function to control input change
	const handleChange = (e) => {
		setValue(e.target.value);
	};

	//Create this function to handle selected option
	const handleSelectedOption = (option) => {
		setSelectedOption(option.title);
		setShowOptions(false);
		setValue("");
		props.getSelectedProduct(option);
	};

	return (
		<div className="select-box-container">
			<h1 className="title">Welcome to prices checker</h1>
			<p className="title">
				Check it out, Compare prices, Enjoy shopping
			</p>
			<div
				className="selected-option"
				onClick={() => setShowOptions(!showOptions)}
			>
				<p>{selectedOption}</p>
				<FontAwesomeIcon icon={showOptions ? faArrowUp : faArrowDown} />
			</div>
			{showOptions && (
				<div className="options">
					<input
						value={value}
						onChange={(e) => handleChange(e)}
						placeholder="Select a product to show this details..."
					/>
					{options?.map((option) => {
						return (
							<div
								key={option?.id}
								className="option"
								onClick={() => handleSelectedOption(option)}
							>
								<p>{option?.title}</p>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default AutoCompleteBox;
