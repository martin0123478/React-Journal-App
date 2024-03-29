import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { JournalPage } from '../pages/JournalPage'
export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path='journal' element={<JournalPage />} />
      <Route path='/*' element={<Navigate to='/journal' />} />

    </Routes>
  )
}
