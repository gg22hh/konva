import React, { useEffect, useRef } from 'react';
import { Circle, Rect, Star, Text, Transformer } from 'react-konva';

export const Item = ({ item, onClick, isSelected }) => {
  const textRef = useRef();
  const transformerRef = useRef();

  useEffect(() => {
    if (isSelected) {
      transformerRef.current.nodes([textRef.current]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      {item.text && (
        <>
          <Text
            ref={textRef}
            onClick={onClick}
            {...item}
            align="center"
            width={100}
            wrap="word"
            draggable
            onDragEnd={() => console.log('ok')}
          />
        </>
      )}
      {item.figure === 'square' && (
        <>
          <Rect
            ref={textRef}
            onClick={onClick}
            width={100}
            height={100}
            {...item}
            draggable
            onDragEnd={() => console.log('ok')}
          />
        </>
      )}
      {item.figure === 'circle' && (
        <>
          <Circle
            ref={textRef}
            onClick={onClick}
            {...item}
            radius={40}
            draggable
            onDragEnd={() => console.log('ok')}
          />
        </>
      )}
      {item.figure === 'star' && (
        <>
          <Star
            ref={textRef}
            onClick={onClick}
            {...item}
            innerRadius={30}
            outerRadius={60}
            draggable
            onDragEnd={() => console.log('ok')}
          />
        </>
      )}
      {isSelected && (
        <Transformer ref={transformerRef} enabledAnchors={['top-right']} />
      )}
    </React.Fragment>
  );
};
