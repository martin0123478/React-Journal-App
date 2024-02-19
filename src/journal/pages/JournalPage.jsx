import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLoayout } from '../loyouth/JournalLoayout'
import { NothingSelected } from '../views/NothingSelected'
import { NoteView } from '../views/NoteView'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {
  return (
    <JournalLoayout>
      {/* <Typography >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea unde voluptas eligendi possimus fugiat assumenda consequatur magni, hic optio doloremque, incidunt harum? Quidem tempora aliquid delectus voluptates, iusto hic quisquam.</Typography> */}
      {/* <NothingSelected /> */}
      <NoteView />

      <IconButton size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}>
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLoayout>
  )
}
