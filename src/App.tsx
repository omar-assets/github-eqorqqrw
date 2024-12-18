import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './contexts/AuthContext';
import { NetworkProvider } from './contexts/NetworkContext';
import { AppRoutes } from './routes';
import { Header } from './components/navigation/Header';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/error/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <NetworkProvider>
          <AuthProvider>
            <BrowserRouter>
              <div className="min-h-screen bg-white">
                <Header />
                <main className="pt-16">
                  <AppRoutes />
                </main>
                <Footer />
              </div>
            </BrowserRouter>
          </AuthProvider>
        </NetworkProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;