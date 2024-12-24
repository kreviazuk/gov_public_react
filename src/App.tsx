import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router';
import BottomTabBar from './components/TabBar';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen pb-12">
        <AppRouter />
        <BottomTabBar />
      </div>
    </BrowserRouter>
  );
};

export default App;
