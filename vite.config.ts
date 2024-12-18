import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      // Enable source maps for production debugging if needed
      sourcemap: mode === 'development',
      
      // Optimize chunk size
      chunkSizeWarningLimit: 1000,
      
      // Configure rollup-specific options
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-firebase': ['firebase/app', 'firebase/auth', 'firebase/firestore'],
            'vendor-utils': ['date-fns', 'zod', 'lucide-react'],
          },
        },
      },
      
      // Minification options
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          drop_debugger: mode === 'production'
        }
      },
      
      // CSS optimization
      cssCodeSplit: true,
      cssMinify: true,
      
      // Asset optimization
      assetsInlineLimit: 4096,
      
      // Enable modern builds
      target: 'esnext'
    },
    
    // Development server configuration
    server: {
      port: 3000,
      strictPort: true,
      host: true
    }
  };
});