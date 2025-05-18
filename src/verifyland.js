import Tesseract from "tesseract.js";
import axios from "axios";
import * as cheerio from "cheerio"; //


// Function to extract text using OCR
export const extractTextFromImage = async (imageFile) => {
  try {
    const { data: { text } } = await Tesseract.recognize(imageFile, "eng");
    console.log("Extracted Text:", text);
    return text;
  } catch (error) {
    console.error("OCR Failed:", error);
    return null;
  }
};

// Function to scrape Tamil Nadu e-Service website
export const verifyLandWithGovt = async (surveyNumber) => {
  try {
    const response = await axios.get(`https://eservices.tn.gov.in/eservicesnew/landrecords.jsp?surveyNo=${surveyNumber}`);
    const $ = cheerio.load(response.data);
    
    // Extracting land details from the page (Modify according to actual structure)
    const ownerName = $("#ownerName").text().trim();
    const landArea = $("#landArea").text().trim();
    
    return { ownerName, landArea };
  } catch (error) {
    console.error("Error fetching govt data:", error);
    return null;
  }
};
