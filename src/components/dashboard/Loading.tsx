import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-12 h-12 border-4 border-gray-600 rounded-full animate-spin"></div>
      <p className="mt-2 text-gray-600 mt-2">Cargando...</p>
    </div>
  );
};

export default Loading;
