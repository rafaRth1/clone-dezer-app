import {
	IoPlaySkipBackOutline,
	IoPlay,
	IoPlaySkipForwardOutline,
	IoLaptopOutline,
	IoRepeat,
	IoShuffleOutline,
	IoVolumeHighOutline,
	IoOptionsOutline,
} from 'react-icons/io5';

export const PagePlayer = () => {
	return (
		<div className='page-player'>
			<div className='player-bottom'>
				<div className='player-controls'>
					<ul className='svg-icon-groups'>
						<li className='svg-icon-item'>
							<button>
								<IoPlaySkipBackOutline
									color='white'
									size={26}
								/>
							</button>
						</li>
						<li className='svg-icon-item'>
							<button onClick={() => console.log('Play')}>
								<IoPlay
									color='white'
									size={26}
								/>
							</button>
						</li>
						<li className='svg-icon-item'>
							<button onClick={() => console.log('Siguiente')}>
								<IoPlaySkipForwardOutline
									color='white'
									size={26}
								/>
							</button>
						</li>
					</ul>
				</div>
				<div className='player-track'>
					<div className='track-container'>
						<div className='track-heading'>
							<div className='track-title'></div>
						</div>
						<div className='track-seekbar'>
							<div className='slider-autohide'>
								<div className='slider-counter slider-counter-current'>00:00</div>
								<div className='slider-track'>
									{/* <audio
										controls
										preload='none'
										id='track'></audio> */}
								</div>
								<div className='slider-counter slider-counter-max'>00:00</div>
							</div>
						</div>
					</div>
				</div>
				<div className='player-options'>
					<ul className='option-list'>
						<li className='option-item'>
							<ul className='svg-icon-groups'>
								<li className='svg-icon-item'>
									<button>
										<IoLaptopOutline size={17} />
									</button>
								</li>
								<li className='svg-icon-item'>
									<button>
										<IoRepeat size={17} />
									</button>
								</li>
								<li className='svg-icon-item'>
									<button>
										<IoShuffleOutline size={17} />
									</button>
								</li>
								<li className='svg-icon-item'>
									<button>
										<IoVolumeHighOutline size={17} />
									</button>
								</li>
								<li className='svg-icon-item'>
									<button>
										<IoOptionsOutline size={17} />
									</button>
								</li>
							</ul>
						</li>
						<li className='option-item'>
							<button>
								<figure></figure>
								<div>Cola de Reproducción</div>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
