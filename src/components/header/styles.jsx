import styled from 'styled-components'

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 25px;
`

const Logo = styled.img`
  width: 218px;
  height: 45px;
`

const LogoutButton = styled.div`
  width: 36px;
  height: 36px;

  cursor: pointer;

  img{
    width: 100%;
    height: 100%;
  }
`

const SearchBar = styled.input`
  box-sizing: border-box;

  width: 464px;

  padding: 10px;
  border: 1px #c4c4c4 solid;

  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.6);


  align-self: center;
`

const HorizontalSeparator = styled.div`
  height: 1px;
  width: 100%;

  margin-top: 25px;

  background-color:#c4c4c4;
`

export {
  Container,
  Logo,
  LogoutButton,
  HorizontalSeparator,
  Nav,
  SearchBar
}