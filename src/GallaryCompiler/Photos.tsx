import { useEffect, useState } from "react";
import { Photo } from "../types"; // Adjust path to your types file

const PhotoList = ({
  onPhotoClicked,
}: {
  onPhotoClicked: (arg: Photo) => void;
}) => {
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
        Loading...
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
            className="bg-gray-800/40 rounded-xl shadow-lg cursor-pointer"
            onClick={() => {
              if (onPhotoClicked) {
                onPhotoClicked(photo);
              }
            }}
          >
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-white line-clamp-2 mb-2">{photo.title}</h2>
              <a
                href={photo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-400"
                onClick={(e) => e.stopPropagation()}
              >
                <span>View Full Image</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
