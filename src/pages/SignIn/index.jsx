import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../../assets/logo.png';
import logoGithub from '../../assets/logo-github.png';
import useAuth from '../../hooks/useAuth';
import * as api from '../../services/api';
import {
	Box,
	Button,
	Container,
	Divider,
	IconButton,
	InputAdornment,
	OutlinedInput,
	Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import styles from '../../components/FormComponents';

function SignIn() {
	const [userData, setUserData] = useState({
		email: '',
		password: '',
	});
	const [disabled, setDisabled] = useState(false);
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const { setLocalAuth } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('auth')) navigate('/home');
	}, [navigate]);

	function handleInput(e) {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();

		setDisabled(true);
		setLoading(true);

		if (userData.password.length < 6) {
			Swal.fire({
				icon: 'error',
				text: 'A senha deve ter pelo menos 6 caracteres',
			});
			setDisabled(false);
			setLoading(false);
			return;
		}

		api
			.login(userData)
			.then((response) => {
				setLocalAuth(response.data.token);
				navigate('/home');
			})
			.catch((error) => {
				Swal.fire({ icon: 'error', text: error.response.data });
				setDisabled(false);
				setLoading(false);
			});
	}

	function handleLoginGithub() {
		Swal.fire({
			title: 'Em breve',
			showConfirmButton: false,
			timer: 2000,
			width: 400,
			imageUrl: logoGithub,
			imageWidth: 100,
			imageHeight: 100,
			imageAlt: 'Logo Github',
		});
	}

	return (
		<Container sx={styles.container}>
			<Box sx={styles.boxLogo}>
				<img src={logo} alt='RepoProvas logo' />
			</Box>

			<Box component='form' onSubmit={handleSubmit} sx={styles.boxForm}>
				<Typography sx={styles.title}>Login</Typography>
				<Button
					type='button'
					variant='contained'
					onClick={handleLoginGithub}
					sx={styles.buttonGithubLogin}
				>
					Entrar com o Github
				</Button>

				<Box>
					<Divider sx={styles.divider}>ou</Divider>
				</Box>

				<OutlinedInput
					placeholder='Email'
					name='email'
					type='email'
					onChange={handleInput}
					value={userData.email}
					disabled={disabled}
					required
					sx={styles.input}
				/>
				<OutlinedInput
					placeholder='Senha'
					name='password'
					type={showPassword ? 'text' : 'password'}
					onChange={handleInput}
					value={userData.password}
					disabled={disabled}
					sx={styles.input}
					required
					endAdornment={
						<InputAdornment position='end'>
							<IconButton
								aria-label='toggle password visibility'
								onClick={() => setShowPassword(!showPassword)}
								edge='end'
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
				/>
				<Box sx={styles.buttonsBox}>
					<Typography
						sx={styles.linkButton}
						onClick={() => navigate('/sign-up')}
					>
						Não possuo cadastro
					</Typography>
					<LoadingButton
						type='submit'
						disabled={disabled}
						variant='contained'
						loading={loading}
					>
						Entrar
					</LoadingButton>
				</Box>
			</Box>
		</Container>
	);
}

export default SignIn;
