import Input from "./components/Input";
import Lists from "./components/List";

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-red-400 flex-col p-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Recipe Search</h1>
      <div className="bg-white p-4 sm:p-6 h-auto sm:h-[70%] w-full sm:w-[50%] shadow-lg rounded-lg">
        {/* Input Box */}
        <div className="mb-4">
          <Input />
        </div>
        {/* Search Results */}
        <div className="flex  justify-center max-h-[60vh] h-auto overflow-y-auto">
          <Lists />
        </div>
      </div>
    </div>
  );
}

export default App;
