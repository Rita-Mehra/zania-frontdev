import React, { useState, useEffect } from 'react';
import Thumbnail from '../component/Thumbnail';
import ImageOverlay from '../component/ImageOverlay';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DocumentGrid = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (index) => {
    setSelectedImage(`images/${documents[index].type}.jpg`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('utils/data.json');
        const data = await response.json();
        setDocuments(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newDocuments = [...documents];
    const [removed] = newDocuments.splice(result.source.index, 1);
    newDocuments.splice(result.destination.index, 0, removed);

    setDocuments(newDocuments);
  };

  return (
    <>
     {selectedImage && (
        <ImageOverlay image={selectedImage} onClose={handleClose} />
      )}
   
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="document-grid" direction="horizontal">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="document-grid"
          >
            {documents.map((document, index) => (
              <Draggable key={index} draggableId={index} index={index}>
                {(provided) => (
                  <div
                    key={index}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onClick={() => handleClick(index)}
                    className="document-card"
                  >
                     <h2 className="card-title">{document.title}</h2>
                    <img src={`images/${document.type}.jpg`} alt={document.title} />
                   
                    {loading && <Thumbnail />}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    </>
  );
};

export default DocumentGrid;