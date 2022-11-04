import { Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Layer, Stage } from 'react-konva';
import './App.css';
import { FigureForm } from './components/FigureForm';
import { Item } from './components/Item';
import { TextForm } from './components/TextForm';
import {
  checkDeselect,
  deleteItem,
  handleExport,
  handleSubmitForm,
} from './utils/helpers';
import { useGetData } from './utils/hooks';

function App() {
  const [rects, setRects] = useGetData();
  const [selectedId, setSelectedId] = useState(null);
  const [newText, setNewText] = useState('');
  const [figure, setFigure] = useState('');
  const [color, setColor] = useState('');
  const stageRef = useRef();

  const handleSubmitTextForm = async (e) => {
    const newRect = {
      id: rects.length + 1,
      x: Math.floor(Math.random() * window.innerWidth) + 1,
      y: Math.floor(Math.random() * 500) + 1,
      text: newText,
    };

    handleSubmitForm(e, newRect, rects, setRects);
    setNewText('');
  };

  const handleSubmitFigureForm = async (e) => {
    const newRect = {
      id: rects.length + 1,
      x: Math.floor(Math.random() * window.innerWidth) + 1,
      y: Math.floor(Math.random() * 500) + 1,
      figure,
      fill: color,
    };

    handleSubmitForm(e, newRect, rects, setRects);
    setFigure('');
    setColor('');
  };

  const handleDelete = async (id) => {
    deleteItem(id, rects, setRects, setSelectedId);
  };

  const rectList = rects.map((item, i) => {
    return (
      <Item
        key={item.id}
        item={item}
        onClick={() => setSelectedId(item.id)}
        isSelected={item.id === selectedId}
      />
    );
  });

  return (
    <div className="App">
      <TextForm
        handleSubmitTextForm={handleSubmitTextForm}
        newText={newText}
        setNewText={(e) => setNewText(e.target.value)}
      />
      <FigureForm
        handleSubmitFigureForm={handleSubmitFigureForm}
        figure={figure}
        setFigure={(e) => setFigure(e.target.value)}
        color={color}
        setColor={(e) => setColor(e.target.value)}
      />
      <Stage
        ref={stageRef}
        width={window.innerWidth}
        height={500}
        onMouseDown={(e) => checkDeselect(e, setSelectedId)}
      >
        <Layer>{rectList}</Layer>
      </Stage>
      <Button
        disabled={!selectedId}
        variant="contained"
        onClick={() => handleDelete(selectedId)}
      >
        Удалить
      </Button>
      <Button variant="contained" onClick={() => handleExport(stageRef)}>
        Экспорт
      </Button>
    </div>
  );
}

export default App;
