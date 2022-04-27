import { BottomNavigation, BottomNavigationAction } from '@mui/material'

function Buttons({value, setValue}){

  return (
    <BottomNavigation
      sx={buttonStyle}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      >
        <BottomNavigationAction value='disciplina' label="Disciplinas" />
        <BottomNavigationAction value='instrutor' label="Instrutores"  />
        <BottomNavigationAction label="Adicionar" disabled/>
    </BottomNavigation>
  )
}

const buttonStyle = {
  marginBottom: 5,
  boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
}

export default Buttons