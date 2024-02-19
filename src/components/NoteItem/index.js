// Write your code here
import {ListItem, ListHeading, ListPara} from './styledComponents'

const NoteItem = props => {
  const {noteItemDetails} = props
  const {name, notes} = noteItemDetails

  return (
    <ListItem>
      <ListHeading>{name}</ListHeading>
      <ListPara>{notes}</ListPara>
    </ListItem>
  )
}

export default NoteItem
