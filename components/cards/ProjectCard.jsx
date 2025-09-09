"use client";
import React from "react";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
}
