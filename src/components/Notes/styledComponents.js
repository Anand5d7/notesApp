// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 30vw;
  padding: 30px;
  box-shadow: 0px 0px 0px 1px #aab8c8;
  @media screen and (min-width: 768px) {
    width: 60vw;
  }
`
export const Heading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 30px;
  margin-bottom: 30px;
  font-weight: bold;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  height: 250px;
  width: 380px;
  margin-bottom: 70px;
  padding: 20px;
  box-shadow: 1px 1px 1px 1px #aab8c8;
  @media screen and (min-width: 768px) {
    width: 800px;
  }
`
export const Input = styled.input`
  color: #475569;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
  border: none;
  outline: none;
`
export const TextAreaElement = styled.textarea`
  color: #475569;
  font-family: 'Roboto';
  font-size: 18px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  font-weight: 600;
`
export const Button = styled.button`
  background-color: #4c63b6;
  height: 50px;
  width: 70px;
  border-radius: 6px;
  align-self: flex-end;
  color: #ffffff;
  font-family: 'Roboto';
  border: none;
  font-size: 14px;
  font-weight: 600;
`
export const EmptyViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const EmptyHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 600;
  margin: 0px;
  padding-top: 10px;
  padding-bottom: 15px;
`
export const EmptyPara = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 18px;
  margin: 0px;
  padding-bottom: 15px;
  font-weight: 600;
`
export const EmptyImage = styled.img`
  height: 80px;
  width: 80px;
`
export const ListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
