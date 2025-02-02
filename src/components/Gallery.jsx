import React from 'react'

const Gallery = () => {
    const images = [
        "/img_21.jpg", "/img_2.jpg", "/img_5.jpg", "/img_18.jpg", "/img_8.jpg", "/img_26.jpg",
        "/img_7.jpg", "/img_10.jpg", "/img_3.JPG", "/img_9.jpg",  "/img_11.jpg", "/img_12.jpg",
        "/img_13.jpg", "/img_14.jpg", "/img_15.jpg", "/img_16.jpg", "/img_17.jpg", "/img_19.jpg",
        "/img_20.jpg", "/img_4.JPG", "/img_1.jpg", "/img_23.jpg", "/img_24.jpg",
        "/img_25.jpg"
    ];

    return (
        <div className="min-h-screen bg-transparent px-4">
            <h1 className="text-2xl text-center text-gray-800 my-8 font-light italic">
                Forever Together | 2025
            </h1>
            <div className="columns-2 md:columns-3 lg:columns-3 gap-6 min-w-full mx-auto">
                {images.map((src, index) => (
                    <div key={index} className="mb-6 break-inside-avoid">
                        <img
                            src={src}
                            alt={`Wedding ${index + 1}`}
                            className="w-full hover:scale-105 rounded-sm shadow-lg transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery
