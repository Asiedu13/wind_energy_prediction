"use client"
import React, { useState } from "react";
import { Container } from "./Container";
import {fugazOne} from "@/app/fonts";

export function Predictor() {
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null >(null);
  const [predicted, setPredicted] = useState(undefined);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(event.target.files?.[0] || null);
      console.log(selectedFile);
      console.log(event.target.files?.[0] || null)
    }
  };

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
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
      // const response = await fetch('https://dep-wind-ai-twilight-forest-1342.fly.dev/upload', {
      //   method: 'POST',
      //   body: formData
      // });

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
                <input  disabled={uploading} onChange={(e) => handleFileChange(e)} type="file" id="csvFile" accept=".csv" className="bg-white border border-2 rounded-md px-2 py-2" required/>
                <button type="submit" disabled={uploading}  className="bg-[#00B0F0] text-white w-full rounded-md py-2 my-5 hover:bg-[#81D83F] transition-all 2s ease-in-out cursor-pointer">Predict</button>
              </form>
          </div>

          {
            predicted &&
            <div className="flex flex-col items-center justify-center">
              <h1>Predicted Output</h1>
              {/*<h1>Turbine: Vestas V120</h1>*/}
              {/*<h2 className={`${fugazOne.className} italic font-bold text-3xl lg:text-[80px] text-white opacity-[0.7]`}> {predicted}</h2>*/}
              <p>Based on the weather data; you produced</p>
              <p className={`${fugazOne.className} italic font-bold text-3xl lg:text-[80px] text-white opacity-[0.7]`}>{predicted * 2.2} MW today</p>
            </div>
          }
        </Container>
        </section>
  )
}