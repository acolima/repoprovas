const styles = {
	container: {
		background: '#fff',
		width: '100vw',
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	boxLogo: {
		width: '292px',
		height: '64px',
	},
	boxForm: {
		width: '364px',
		display: 'flex',
		flexDirection: 'column',
		gap: '15px',
		background: 'ligthblue',
	},
	title: {
		fontFamily: 'Poppins',
		fontSize: '24px',
		fontWeight: 500,
		color: 'rgba(0, 0, 0, 0.8)',
		textAlign: 'center',
	},
	buttonGithubLogin: {
		background: '#424445',
		boxShadow:
			'0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
		fontFamily: 'Roboto',
		fontSize: '14px',
		':hover': { opacity: '0.9', background: '#424445' },
	},
	divider: {
		fontFamily: 'Poppins',
		fontWeight: 500,
		fontSize: '12px',
		lineHeight: '24px',
		letterSpacing: '0.15px',
		color: 'rgba(0, 0, 0, 0.8)',
	},
	input: {
		width: '100%',
		fontFamily: 'Poppins',
		fontWeight: 500,
		fontSize: '16px',
		color: 'rgba(0, 0, 0, 0.6)',
	},
	buttonsBox: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
	},
	linkButton: {
		cursor: 'pointer',
		color: 'rgba(70, 115, 202, 0.8)',
		fontFamily: 'Poppins',
		fontWeight: 500,
		fontSize: '12px',
		display: 'flex',
		alignItems: 'center',
	},
};

export default styles;
