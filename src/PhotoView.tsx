import { Photo } from "./types";

const PhotoView = ({ photo }: { photo: Photo | null }) => {
   
    

  if (!photo) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-gray-400">
        <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-lg font-medium">No photo selected</p>
        <p className="text-sm opacity-75">Click on a photo from the gallery to view it here</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        Selected Photo
      </h1>
      <div className="bg-gray-800/40 rounded-xl overflow-hidden shadow-xl backdrop-blur-sm">
        <div className="relative group">
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-white">{photo.title}</h2>
          <p className="text-sm text-gray-400">Photo ID: {photo.id}</p>
          <a
            href={photo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <span>Open Full Resolution</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotoView;
