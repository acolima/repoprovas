import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../../hooks/useAuth';
import * as api from '../../../../services/api';
import Instructor from '../Instructor';
import Loader from '../../Loader/Loader';

function TestsByInstructor({
	instructors,
	setInstructors,
	searchText,
	buttonValue,
}) {
	const { auth, removeLocalAuth } = useAuth();
	const navigate = useNavigate();

	let filteredInstructor = [];

	useEffect(() => {
		api
			.getTestsByInstructor(auth)
			.then((response) => setInstructors(response.data))
			.catch(() => {
				Swal.fire({ icon: 'error', text: 'Faça o login novamente' });
				removeLocalAuth();
				navigate('/');
			});
	}, [auth, navigate, buttonValue, setInstructors]);

	if (searchText !== 'Todos') {
		filteredInstructor = instructors.filter(
			(instructor) => instructor.instructorName === searchText
		);
	}

	if (instructors.length === 0) return <Loader />;

	if (searchText !== 'Todos') {
		return (
			<Instructor
				name={filteredInstructor[0].instructorName}
				categories={filteredInstructor[0].categories}
			/>
		);
	}

	return (
		<>
			{instructors.map((instructor) => (
				<Instructor
					key={instructor.instructorId}
					name={instructor.instructorName}
					categories={instructor.categories}
				/>
			))}
		</>
	);
}

export default TestsByInstructor;
