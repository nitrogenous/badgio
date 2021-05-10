import { createContext, useState, useEffect, useRef } from 'react';

const BadgeCreatorContext = createContext();
const { Provider, Consumer: BadgeCreatorConsumer } = BadgeCreatorContext;

const BadgeCreatorProvider = ({ children }) => {
  const [canvasImage, setCanvasImage] = useState('');
  const canvasRef = useRef(null);

  const capitalizeText = (text) => {
    // eslint-disable-next-line no-control-regex
    return text?.replace(/([^\u0000-\u007F]|\w)+\S*/g, (txt) => {
      return txt?.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  
  const createContextTexts = (context, userDetails) => {
    context.font = "bold 56pt Lekton ";
    context.fillStyle = '#76748A';
    context.fillText(capitalizeText(userDetails?.name || ''), 100 * 2, 642 * 2);
    context.font = "32pt Lekton";
    context.fillText(userDetails?.title || '', 100 * 2, 680 * 2);
    context.font = "bold 32pt Lekton";
    context.fillText(userDetails?.company || '', 100 * 2, 705 * 2);
    // context.font = "bold 22pt Lekton";
    // context.fillText('badgio.net', 100, 785);
  };

  const createBadge = (userDetails) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d')
      let imageObj = new Image();
      imageObj.src = canvasImage; 
      imageObj.crossOrigin = 'anonymous';
      imageObj.onload = () => {
        context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height);
        createContextTexts(context, userDetails);
      };
    }
  };

  useEffect(() => {
      createBadge({});
  });

  return <Provider value={{canvasRef, setCanvasImage, createBadge}}>{children}</Provider>;
};

export { BadgeCreatorContext, BadgeCreatorProvider, BadgeCreatorConsumer };
