"use client";
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { printPlugin } from "@react-pdf-viewer/print";


const ResumePage = () => {
  const getFilePluginInstance = getFilePlugin();
  const printPluginInstance = printPlugin();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const { Download } = getFilePluginInstance;
  const { Print } = printPluginInstance;

  return (
    <div className="flex flex-col w-full h-full bg-black">
      <Worker workerUrl={`/pdf.worker.js`}>
        <div className="h-svh pt-24 overflow-auto bg-black p-4 rounded-xl">
          <Viewer
            fileUrl="/main_resume.pdf"
            plugins={[defaultLayoutPluginInstance, getFilePluginInstance, printPluginInstance]}
          />
        </div>
      </Worker>
    </div>
  );
}

export default ResumePage;
