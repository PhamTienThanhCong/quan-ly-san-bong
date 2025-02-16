import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

const ImagePreview = ({ images, setImages }) => {
  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <Box display="flex" flexWrap="wrap" gap={2} mt={2}>
      {images.map((image, index) => {
        const imageUrl = URL.createObjectURL(image);
        return (
          <Box
            key={index}
            position="relative"
            width={100}
            height={100}
            border="1px solid #ccc"
            borderRadius={2}
            overflow="hidden"
          >
            <img src={imageUrl} alt={`preview-${index}`} width="100%" height="100%" style={{ objectFit: "cover" }} />
            <IconButton
              size="small"
              color="error"
              onClick={() => handleRemoveImage(index)}
              style={{ position: "absolute", top: 0, right: 0, background: "rgba(255, 255, 255, 0.8)" }}
            >
              <Delete fontSize="small" />
            </IconButton>
          </Box>
        );
      })}
    </Box>
  );
};

export default ImagePreview;
