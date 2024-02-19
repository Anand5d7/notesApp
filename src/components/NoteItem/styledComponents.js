// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  border: 1px solid #aab8c8;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    height: 150px;
    width: 250px;
    margin-right: 20px;
  }
`
export const ListHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
`
export const ListPara = styled.p`
  color: #334155;
  font-family: 'Roboto';
  line-height: 1.5;
  font-size: 15px;
  font-weight: 600;
`
