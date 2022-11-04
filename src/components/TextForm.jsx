import { Button, TextField } from '@mui/material';
import React from 'react';

export const TextForm = ({ handleSubmitTextForm, newText, setNewText }) => {
  return (
    <form onSubmit={handleSubmitTextForm} className="form">
      <TextField
        value={newText}
        onChange={setNewText}
        label="Текст"
        variant="filled"
        size="small"
      />
      <Button type="submit" variant="contained">
        Добавить
      </Button>
    </form>
  );
};
