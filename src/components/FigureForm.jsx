import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React from 'react';

export const FigureForm = ({
  handleSubmitFigureForm,
  figure,
  setFigure,
  color,
  setColor,
}) => {
  return (
    <form onSubmit={handleSubmitFigureForm} className="form">
      <FormControl>
        <InputLabel id="figure-label">Фигура</InputLabel>
        <Select
          labelId="figure-label"
          value={figure}
          onChange={setFigure}
          label="Фигура"
          variant="outlined"
          style={{ minWidth: '100px' }}
        >
          <MenuItem value="square">Квадрат</MenuItem>
          <MenuItem value="circle">Круг</MenuItem>
          <MenuItem value="star">Звезда</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="color-label">Цвет</InputLabel>
        <Select
          labelId="color-label"
          value={color}
          onChange={setColor}
          label="Цвет"
          variant="outlined"
          style={{ minWidth: '100px' }}
        >
          <MenuItem value="green">Зеленый</MenuItem>
          <MenuItem value="red">Красный</MenuItem>
          <MenuItem value="blue">Синий</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained">
        Добавить
      </Button>
    </form>
  );
};
