import "./App.css";

function App() {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          <div className="max-w-3xl text-center">
            <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-200">
              Drum
              <span className="text-sky-400"> Machine</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
