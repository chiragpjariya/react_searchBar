import Input from "./components/Input"
import Lists from "./components/List"

function App() {

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center bg-red-400 flex-col">
        <h1 className="text-4xl font-bold text-white mb-8">Recipe Search</h1>
        <div className="bg-white p-4 h-[70%] w-[50%] shadow-lg rounded-lg">
          {/* input box */}
          <div > 
            <Input />
          </div>
          {/* search results */}
          <div className="flex border-1 justify-center max-h-[60%] h-auto">  
            <Lists />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
