const downloadURL = (url, name) => {
  const link = document.createElement('a');
  link.download = name;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const checkDeselect = (e, setSelectedId) => {
  const clickedOnEmpty = e.target === e.target.getStage();
  if (clickedOnEmpty) {
    setSelectedId(null);
  }
};

export const handleSubmitForm = async (e, newItem, rects, setRects) => {
  e.preventDefault();

  const response = await fetch(
    'https://6303a6270de3cd918b3b3fda.mockapi.io/konva',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    }
  );

  if (response.ok) {
    const newRectFromServer = await response.json();
    setRects([...rects, newRectFromServer]);
  } else {
    console.log('error');
  }
};

export const deleteItem = async (id, rects, setRects, setSelectedId) => {
  const areYouSure = window.confirm('Вы уверены?');
  if (areYouSure) {
    const response = await fetch(
      `https://6303a6270de3cd918b3b3fda.mockapi.io/konva/${id}`,
      {
        method: 'DELETE',
      }
    );

    if (response.ok) {
      setRects(rects.filter((item) => item.id !== id));
    } else {
      console.log('error');
    }
  }
  const newRects = rects.filter((item) => item.id !== id);
  setRects(newRects);
  setSelectedId(null);
};

export const handleExport = (stageRef) => {
  const url = stageRef.current?.getStage().toDataURL();
  downloadURL(url, 'konva');
};
