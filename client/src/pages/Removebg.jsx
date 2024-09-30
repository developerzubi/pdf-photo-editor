import React, { useState } from 'react';
import axios from 'axios';

const RemoveBg = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [processedImageUrl, setProcessedImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/api/remove-background', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true, // This line is important to support credentials
        responseType: 'blob', // We expect a Blob (binary data) in return
      });

      const processedImageUrl = URL.createObjectURL(response.data);
      setProcessedImageUrl(processedImageUrl);
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Remove Background from Image</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Remove Background'}
        </button>
      </form>

      {processedImageUrl && (
        <div>
          <h2>Processed Image:</h2>
          <img src={processedImageUrl} alt="Processed Image" />
          <a href={processedImageUrl} download="remove_bg_image.png">
            Download Processed Image
          </a>
        </div>
      )}
    </div>
  );
};

export default RemoveBg;
