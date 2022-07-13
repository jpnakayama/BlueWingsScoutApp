import React, { useState } from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChevronLeft, faChevronRight  } from '@fortawesome/free-solid-svg-icons';

const App = () => {

	const [players, setPlayers] = useState([]);
	const [inputValue, setInputValue] = useState('');

	const handleAddButtonClick = () => {	
		const newEntry = {		
			playerName: inputValue,		
			points: 0,
			rebounds: 0,
			assists: 0,		
			isSelected: false,	
		};	
		const newPlayer = [...players, newEntry];	
		setPlayers(newPlayer);	
		setInputValue('');
	};

	const handlePointsIncrease = (index) => {	
		const newPlayer = [...players];	
		newPlayer[index].points++;	
		setPlayers(newPlayer);
	};

	const handlePointsDecrease = (index) => {	
		const newPlayer = [...players];	
		newPlayer[index].points--;	
		setPlayers(newPlayer);
	};

	const handleReboundsIncrease = (index) => {	
		const newPlayer = [...players];	
		newPlayer[index].rebounds++;	
		setPlayers(newPlayer);
	};

	const handleReboundsDecrease = (index) => {	
		const newPlayer = [...players];	
		newPlayer[index].rebounds--;	
		setPlayers(newPlayer);
	};

	const handleAssistsIncrease = (index) => {	
		const newPlayer = [...players];	
		newPlayer[index].assists++;	
		setPlayers(newPlayer);
	};

	const handleAssistsDecrease = (index) => {	
		const newPlayer = [...players];	
		newPlayer[index].assists--;	
		setPlayers(newPlayer);
	};
		
	return (
		
		<div className='app-background'>
				
			<div className='header'>
				<div className='equipe'>COSMÓPOLIS BLUE WINGS</div>								
			</div>
				
			<div className='main-container'>
				
				<div className='add-player-box'>
					<input value={inputValue} onChange={(event) => 
						setInputValue(event.target.value)} 
						className="add-player-input" placeholder="Adicione um atleta" />
						<FontAwesomeIcon icon={faPlus} onClick={() => 
							handleAddButtonClick()} />
				</div>
					
				<div className="player-list"> {players.map((players, index) => (		
					
					<div className="player-container">			
						
						<div className="player-name"> {players.playerName} </div>

						<div className='stats'>
		
							<div className="points">				
								<button>					
									<FontAwesomeIcon icon={faChevronLeft} onClick={() => handlePointsDecrease (index)} />				
								</button>				
								<span> {players.points} </span>				
								<button>					
									<FontAwesomeIcon icon={faChevronRight} onClick={() => handlePointsIncrease(index)}  />				
								</button>			
							</div>

							<div className="rebounds">				
								<button>					
									<FontAwesomeIcon icon={faChevronLeft} onClick={() => handleReboundsDecrease(index)} />				
								</button>				
								<span> {players.rebounds} </span>				
								<button>					
									<FontAwesomeIcon icon={faChevronRight} onClick={() => handleReboundsIncrease(index)}  />				
								</button>			
							</div>	
							
							<div className="assists">				
								<button>					
									<FontAwesomeIcon icon={faChevronLeft} onClick={() => handleAssistsDecrease(index)} />				
								</button>				
								<span> {players.assists} </span>				
								<button>					
									<FontAwesomeIcon icon={faChevronRight} onClick={() => handleAssistsIncrease(index)}  />				
								</button>			
							</div>
						
					</div>	
				
				</div>
				))}


			</div>
			</div>
		</div>
	);
};

export default App;