import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { BackgroundPattern } from './ui/BackgroundPattern';
import { ScrollReveal } from './ui/ScrollReveal';
import { ROUTES } from '@/config/routes';

export function Hero() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGetStarted = () => {
    navigate(ROUTES.ONBOARDING.ACCOUNT_DETAILS);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80"
          alt="Professional investment environment"
          className="w-full h-full object-cover"
          loading="eager"
          priority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
      </div>

      <BackgroundPattern variant="primary" className="relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-primary font-medium">SEC Regulated Investment Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                Institutional Investing,
                <span className="text-primary"> Made Accessible</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Access premium investment opportunities through secure fractional ownership, 
                backed by professional portfolio management.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={400}>
              {!user && (
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleGetStarted}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl text-lg font-medium 
                             shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 
                             transform hover:-translate-y-0.5 transition-all duration-300"
                    data-testid="get-started-button"
                  >
                    Start Investing Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    onClick={() => navigate(ROUTES.MARKETPLACE)}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-xl text-lg font-medium
                             hover:bg-primary/5 transition-colors"
                  >
                    View Opportunities
                  </button>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </BackgroundPattern>
    </section>
  );
}