import { useContext } from 'react';
import AuthContext from '../contexts/authContext';

export default function useAuth() {
	return useContext(AuthContext);
}
