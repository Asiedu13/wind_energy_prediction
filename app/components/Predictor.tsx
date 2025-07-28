"use client"
import { useState } from "react";
import { Container } from "./Container";
import {fugazOne} from "@/app/fonts";

export function Predictor() {
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [predicted, setPredicted] = useState(undefined);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUploading(true);

    if (!selectedFile) {
      alert('Please select a file');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPredicted(data?.predicted_power);
      console.log('File uploaded successfully:', data);
      setUploading(false);

    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  return (
        <section id="predict" className="z-10 w-[100vw] h-[100vh] bg-[#81D8FC] flex items-center">
        <Container>
          <div className="z-10 flex flex-col items-center ">
              <header>
                <h2 className={`${fugazOne.className} italic font-bold text-3xl lg:text-[80px] text-white opacity-[0.7]`}>Predict</h2>
              </header>
              <p>Upload your daily weather data here (.csv file)</p>
              <form onSubmit={handleSubmit}  id="csvForm" encType="multipart/form-data" className="z-10 flex flex-col items-center my-2 ">
                <input  disabled={uploading} onChange={handleFileChange} type="file" id="csvFile" accept=".csv" className="bg-white border border-2 rounded-md px-2 py-2" required/>
                <button type="submit" disabled={uploading}  className="bg-[#00B0F0] text-white w-full rounded-md py-2 my-5 hover:bg-[#81D83F] transition-all 2s ease-in-out cursor-pointer">Predict</button>
              </form>
          </div>

          {
            predicted &&
            <div>
              <h2 className={`${fugazOne.className} italic font-bold text-3xl lg:text-[80px] text-white opacity-[0.7]`}> {predicted}</h2>
            </div>
          }
        </Container>
        </section>
  )
}