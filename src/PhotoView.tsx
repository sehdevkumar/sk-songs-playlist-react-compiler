import { Photo } from "./types";

const PhotoView = ({ photo }: { photo: Photo | null }) => {
   
    

  if (!photo) {
    return <div className="text-center text-gray-500">No photo selected</div>;
  }

  return (
    <div className="max-w-md mx-auto p-4 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4 text-white">
        Photo View
      </h1>
      <div className="text-center">
        <img
          src={photo.url}
          alt={photo.title}
          className="rounded-lg mb-4 w-full h-auto"
        />
        <h2 className="text-lg font-semibold text-white">{photo.title}</h2>
        <p className="text-sm text-gray-500 ">ID: {photo.id}</p>
        <a
          href={photo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition"
        >
          View Full Image
        </a>
      </div>
    </div>
  );
};

export default PhotoView;
