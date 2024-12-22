import './App.css';
import { Footer } from './components/Layaout/footer';
import { Header } from './components/Layaout/header';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const { isDark, setIsDark } = useDarkMode();

  return (
    <>
      <div className="relative h-screen">
        <Header isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
        <div className="absolute inset-0">
          <div
            className={`absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 ${
              isDark
                ? '[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'
                : '[background:radial-gradient(125%_125%_at_50%_10%,#f5f5f5_40%,#63e_100%)]'
            }`}
          ></div>
        </div>
        <main className="container mx-auto px-4 py-8 mb-28"></main>
      </div>
      <Footer />
    </>
  );
}

export default App;
