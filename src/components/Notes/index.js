// Write your code here
import {useState} from 'react'
import {v4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  AppContainer,
  Container,
  Heading,
  FormContainer,
  Input,
  TextAreaElement,
  Button,
  EmptyViewContainer,
  EmptyImage,
  EmptyHeading,
  EmptyPara,
  ListContainer,
} from './styledComponents'

const Notes = () => {
  const [name, setName] = useState('')
  const [notes, setNotes] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeText = event => {
    setName(event.target.value)
  }

  const onChangeNotes = event => {
    setNotes(event.target.value)
  }

  const onAdd = event => {
    event.preventDefault()
    const newNotes = {
      id: v4(),
      name,
      notes,
    }
    setNotesList(prevState => [...prevState, newNotes])
    setName('')
    setNotes('')
  }

  return (
    <AppContainer>
      <Container>
        <Heading>Notes</Heading>
        <FormContainer onSubmit={onAdd}>
          <Input
            type="text"
            placeholder="Title"
            onChange={onChangeText}
            value={name}
          />
          <TextAreaElement
            type="text"
            placeholder="Take a Note..."
            rows="8"
            value={notes}
            onChange={onChangeNotes}
          />
          <Button type="submit">Add</Button>
        </FormContainer>
        {notesList.length === 0 ? (
          <EmptyViewContainer>
            <EmptyImage
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <EmptyHeading>No Notes Yet</EmptyHeading>
            <EmptyPara>Notes you add will appear here</EmptyPara>
          </EmptyViewContainer>
        ) : (
          <ListContainer>
            {notesList.map(each => (
              <NoteItem key={each.id} noteItemDetails={each} />
            ))}
          </ListContainer>
        )}
      </Container>
    </AppContainer>
  )
}

export default Notes
