export default function Loading() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 animate-pulse">
            Carregando...
          </h1>
          <div className="mt-4 w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }