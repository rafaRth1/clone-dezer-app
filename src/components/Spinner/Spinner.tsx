export const Spinner = () => {
	return (
		<div style={styles.styleContentSpinner}>
			<div className='sk-chase'>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
			</div>
		</div>
	);
};

const styles = {
	styleContentSpinner: {
		height: '152px',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
};
