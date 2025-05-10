
import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';
import HealthTipCard from './components/HealthTipCard';
import ChatInput from './components/ChatInput';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <HealthTipCard
          title="Stay Hydrated"
          description="Drink at least 8 glasses of water daily."
        />
        <ChatInput />
      </main>
      <Footer />
    </div>
  );
}
export default App;
