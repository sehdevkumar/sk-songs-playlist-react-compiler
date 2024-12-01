import { useEffect, useState } from "react";
import { Photo } from "./types"; // Adjust path to your types file

const PhotoList = ({
  onPhotoClicked,
}: {
 
  onPhotoClicked : (arg: Photo)=> void
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
      <div className="text-center text-lg font-bold text-white">Loading...</div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4 text-white">
        Photo Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer"
            onClick={()=> {
              if(onPhotoClicked) {
                onPhotoClicked(photo)
              }
            }}
          >
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              className="rounded-md mb-2"
            />
            <h2 className="text-lg font-semibold text-white">{photo.title}</h2>
            <a
              href={photo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Full Image
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
