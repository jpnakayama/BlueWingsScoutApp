import React, { useState } from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
	const [items, setItems] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [totalItemCount, setTotalItemCount] = useState();

	const handleAddButtonClick = () => {	
		const newItem = {		
			itemName: inputValue,		
			quantity: 0,		
			isSelected: false,	
		};	
		const newItems = [...items, newItem];	
		setItems(newItems);	
		setInputValue('');
	
		calculateTotal()
	};
		
	const handleQuantityIncrease = (index) => {	const newItems = [...items];	
		newItems[index].quantity++;	
		setItems(newItems);
		
		calculateTotal()
	};

	const handleQuantityDecrease = (index) => {	const newItems = [...items];	
		newItems[index].quantity--;	
		setItems(newItems);
	
		calculateTotal()
	};

	const calculateTotal = () => {	
		
		const totalItemCount = items.reduce((total, item) => {		
			return total + item.quantity;	
		}, 0);	
		setTotalItemCount(totalItemCount);};

	return (
		
		<div className='app-background'>
				
			<div className='header'>
				<h1>
					Blue Wings Sub14
				</h1>
			</div>
				<div className='main-container'>
				
				<div className='add-item-box'>
				<input value={inputValue} onChange={(event) => 
					setInputValue(event.target.value)} 
					className="add-item-input" placeholder="Adicione um atleta" />
					<FontAwesomeIcon icon={faPlus} onClick={() => 
						handleAddButtonClick()} />
				</div>
				
				<div className="item-list">	{items.map((item, index) => (		
					
					<div className="item-container">			
						<div className="item-name"> {item.itemName} </div>			
						
						<div className="quantity">				
							<button>					
								<FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease (index)} />				
							</button>				
							<span> {item.quantity} </span>				
							<button>					
								<FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)}  />				
							</button>			
						</div>		
					</div>	
				))}
				</div>
				
				<div className='total'>Pontuação total: {totalItemCount}</div>
			</div>
		</div>
	);
};

export default App;
