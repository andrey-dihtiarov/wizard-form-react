import React, { useCallback, useRef, useState } from 'react';
import Cropper from 'react-easy-crop';

import FlatButton from '../../buttons/FlatButton';

import styles from './styles.module.scss';

const CropModal = ({ updateImageFile, image, imageBase64, isVisible }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixelsState, setCroppedAreaPixelsState] = useState({
    width: 1,
    height: 1,
  });

  const canvasRef = useRef(null);
  const ctx = canvasRef.current ? canvasRef.current.getContext('2d') : null;

  const onCropComplete = useCallback(
    (croppedArea, croppedAreaPixels) => {
      if (image) {
        setCroppedAreaPixelsState(croppedAreaPixels);

        const { x, y, width: cropWidth, height: cropHeight } = croppedAreaPixels;

        const {
          current: { width, height },
        } = canvasRef;

        ctx.clearRect(0, 0, width || 0, height || 0);

        ctx.drawImage(image, x, y, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
      }
    },
    [ctx, image],
  );

  const onCropSubmit = useCallback(() => {
    if (canvasRef.current) {
      canvasRef.current.toBlob((file) => updateImageFile(file));
    }
  }, [updateImageFile]);

  return (
    <div className={`${styles.cropWrapper} ${isVisible ? styles.cropWrapperVisible : ''}`}>
      <div className={styles.buttonWrapper}>
        <FlatButton type="button" onClick={onCropSubmit}>
          Crop
        </FlatButton>
      </div>
      <canvas
        ref={canvasRef}
        width={croppedAreaPixelsState.width}
        height={croppedAreaPixelsState.height}
      />
      <Cropper
        image={imageBase64}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
        cropShape="round"
      />
    </div>
  );
};

export default CropModal;
