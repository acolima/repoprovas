import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';
import * as api from '../../../../services/api';
import styles from '../styles';

function Views({ count, id, update, setUpdate }) {
	const { auth } = useAuth();
	const [views, setViews] = useState(count);

	useEffect(() => {
		if (update) {
			api.updateViewsCount(auth, id).then((response) => {
				setViews(response.data.views);
				setUpdate(!update);
			});
		}
	}, [update, auth, id, setUpdate]);

	return <Typography sx={styles.text}>Visualizações: {views}</Typography>;
}

export default Views;
