"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

const sampleImages = [
  "https://source.unsplash.com/random/300x300",
  "https://source.unsplash.com/random/301x300",
  "https://source.unsplash.com/random/302x300",
  "https://source.unsplash.com/random/303x300",
  "https://source.unsplash.com/random/304x300",
  "https://source.unsplash.com/random/305x300",
];


export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Simulating fetching user-uploaded images
    setImages(sampleImages.sort(() => 0.5 - Math.random()));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
    <nav className="w-full flex justify-between items-center py-4 px-6 bg-white shadow-md">
      <h1 className="text-xl font-bold text-gray-800">Memory Mosaic</h1>
      <div>
        <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-600">Login</a>
        <a href="/signup" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Sign Up</a>
      </div>
    </nav>
    <h2 className="text-2xl font-semibold text-gray-800 mt-6">Explore User Memories</h2>
    <div className="grid grid-cols-3 gap-2 mt-6 w-full max-w-4xl">
      {images.map((src, index) => (
        <img key={index} src={src} alt="User upload" className="w-full h-auto rounded-lg shadow-md" />
      ))}
    </div>
    <div className="mt-6 flex space-x-4">
      <a href="/login" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-600">Login</a>
      <a href="/signup" className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-600">Sign Up</a>
    </div>
  </div>
  );
}
