import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AuthGuard } from '@/components/auth/guards/AuthGuard';
import { PublicOnlyRoute } from '@/components/auth/PublicOnlyRoute';
import { OnboardingGuard } from '@/components/auth/guards/OnboardingGuard';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { ROUTES } from '@/config/routes';

// Lazy load pages
const HomePage = lazy(() => import('@/pages/HomePage'));
const DashboardPage = lazy(() => import('@/pages/DashboardPage'));
const MarketplacePage = lazy(() => import('@/pages/MarketplacePage'));
const HowItWorksPage = lazy(() => import('@/pages/HowItWorksPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const FAQsPage = lazy(() => import('@/pages/FAQsPage'));
const LoginPage = lazy(() => import('@/pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/auth/RegisterPage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/legal/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('@/pages/legal/TermsPage'));

// Lazy load onboarding components
const OnboardingLayout = lazy(() => import('@/components/onboarding/layout/OnboardingLayout'));
const AccountDetailsStep = lazy(() => import('@/components/onboarding/steps/AccountDetailsStep'));
const InvestorTypeStep = lazy(() => import('@/components/onboarding/steps/InvestorTypeStep'));
const PersonalInfoStep = lazy(() => import('@/components/onboarding/steps/PersonalInfoStep'));
const ReviewStep = lazy(() => import('@/components/onboarding/steps/ReviewStep'));

export function AppRoutes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {/* Public Routes */}
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.MARKETPLACE} element={<MarketplacePage />} />
        <Route path={ROUTES.HOW_IT_WORKS} element={<HowItWorksPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.FAQS} element={<FAQsPage />} />
        <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
        <Route path={ROUTES.TERMS} element={<TermsPage />} />

        {/* Auth Routes */}
        <Route path={ROUTES.AUTH.LOGIN} element={
          <PublicOnlyRoute>
            <LoginPage />
          </PublicOnlyRoute>
        } />
        <Route path={ROUTES.AUTH.REGISTER} element={
          <PublicOnlyRoute>
            <RegisterPage />
          </PublicOnlyRoute>
        } />

        {/* Onboarding Routes */}
        <Route path={ROUTES.ONBOARDING.ROOT} element={<OnboardingLayout />}>
          <Route path={ROUTES.ONBOARDING.ACCOUNT_DETAILS} element={
            <PublicOnlyRoute>
              <OnboardingGuard step="account-details">
                <AccountDetailsStep />
              </OnboardingGuard>
            </PublicOnlyRoute>
          } />
          <Route path={ROUTES.ONBOARDING.INVESTOR_TYPE} element={
            <AuthGuard>
              <OnboardingGuard step="investor-type">
                <InvestorTypeStep />
              </OnboardingGuard>
            </AuthGuard>
          } />
          <Route path={ROUTES.ONBOARDING.PERSONAL_INFO} element={
            <AuthGuard>
              <OnboardingGuard step="personal-info">
                <PersonalInfoStep />
              </OnboardingGuard>
            </AuthGuard>
          } />
          <Route path={ROUTES.ONBOARDING.REVIEW} element={
            <AuthGuard>
              <OnboardingGuard step="review">
                <ReviewStep />
              </OnboardingGuard>
            </AuthGuard>
          } />
          <Route index element={<Navigate to={ROUTES.ONBOARDING.ACCOUNT_DETAILS} replace />} />
        </Route>

        {/* Protected Routes */}
        <Route path={ROUTES.DASHBOARD} element={
          <AuthGuard>
            <DashboardPage />
          </AuthGuard>
        } />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
    </Suspense>
  );
}