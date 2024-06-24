import React, { useState } from "react";
import './File_uploader.css' // Import CSS file for styling

const FileUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("");

  // Function to handle file selection
  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
    setProgress(0); // Reset progress when files are selected
    setUploadStatus(""); // Clear any previous status messages
  };

  // Function to handle file upload
  const handleUpload = async () => {
    if (!selectedFiles || selectedFiles.length === 0) {
      setUploadStatus("No files selected.");
      return;
    }

    setUploadStatus("");
    setProgress(0);

    // Simulate upload
    for (let i = 0; i <= 100; i++) {
      await new Promise((resolve) => setTimeout(resolve, 30)); // Simulate upload delay
      setProgress(i);
    }

    setUploadStatus("Files uploaded successfully!");
  };

  return (
    <div className="file-uploader">
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="file-input"
      />
      <button onClick={handleUpload} className="upload-btn">
        Upload
      </button>
      {selectedFiles && progress > 0 && (
        <div className="progress-bar-container">
          <progress value={progress} max="100" className="progress-bar" />
          <span>{progress}%</span>
        </div>
      )}
      <div className="status">{uploadStatus}</div>
    </div>
  );
};

export default FileUploader;

// OverView

// This React component allows uploading multiple files with progress and status.
// It uses state for selected files (selectedFiles), upload progress (progress),
//and status messages (uploadStatus). Uploading triggers a simulated progress update and
//displays a success message upon completion. The interface offers a file input, upload button, progress bar, and status message display.
