import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Logo = styled.img`
  width: 292px;
  height: 64px;
`

const Container = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Form = styled.form`
  width: 464px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;

  border: 1px #c4c4c4 solid;
  padding: 10px;
  margin-top: 5px;

  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.6);

  background-color: ${props => props.disabled ? '#BABABA' : '#FFFFFF'};
  ${props => props.disabled && 'pointer-events: none;'}
`

const GithubButton = styled.button`
  width: 100%;
  height: 36px;

  background: #424445;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #FFFFFF;
  text-align: center;
  text-transform: uppercase;

  cursor: pointer;
`

const Buttons = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  width: 116px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #1976D2;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #FFFFFF;

  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  opacity: ${props => props.disabled ? 0.7 : 1};
`

const StyledLink = styled(Link)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;

  color: rgba(70, 115, 202, 0.8);
`

const Title = styled.p`
  padding-top: 100px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.8);
`

const HorizontalSeparator = styled.div`
  width: 100%;
  height: 12px;

  border-bottom: 1px solid #C4C4C4;

  text-align: center;
  
  span{
    background-color: #fff;
    padding: 0 3px 0;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.8);
  }
`

export {
  Button,
  Buttons,
  Container,
  Form,
  GithubButton,
  HorizontalSeparator,
  Input,
  Logo,
  StyledLink,
  Title
}