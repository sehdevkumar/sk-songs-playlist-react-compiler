import { useEffect, useState } from "react";
import { Photo } from "./types"; // Adjust path to your types file

const PhotoList = ({
  onPhotoClicked,
}: {
  onPhotoClicked: (arg: Photo) => void;
}) => {
  console.log("I should not rendered");

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        if (!response.ok) {
          throw new Error(`Error fetching photos: ${response.status}`);
        }
        const data: Photo[] = await response.json();
        setPhotos(data.slice(0, 20)); // Fetch only the first 20 photos
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-white bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        Photo Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group bg-gray-800/40 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-1 backdrop-blur-sm"
            onClick={() => {
              if (onPhotoClicked) {
                onPhotoClicked(photo);
              }
            }}
          >
            <div className="relative overflow-hidden rounded-t-xl">
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-white line-clamp-2 mb-2">{photo.title}</h2>
              <a
                href={photo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <span>View Full Image</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
