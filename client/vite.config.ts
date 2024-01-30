import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'
import path, { resolve } from 'path'
import envCompatible from 'vite-plugin-env-compatible'
import checker from 'vite-plugin-checker'
import macrosPlugin from 'vite-plugin-babel-macros'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import sass from 'sass'

// https://vitejs.dev/config/
// Load environment variables
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // Prefix for environment variables
    envPrefix: 'REACT_APP',

    // Plugins for Vite
    plugins: [
      // Enable React support
      react(),
      // Plugin for type checking and linting
      checker({
        overlay: { initialIsOpen: false },
        typescript: true,
        eslint: {
          lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
        }
      }), 
      nodePolyfills(),
      // Plugin to handle TypeScript paths
      viteTsconfigPaths(), 
      // Plugin for handling SVG files as React components
      svgrPlugin(), 
      // Plugin for handling environment variables
      envCompatible(),
      macrosPlugin()
    ],

    // CSS configuration
    css: {
      preprocessorOptions: {
        scss: {
          implementation: sass
        }
      }
    },

    // Build configuration
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html')
        },
        external: ['jss-plugin-{}', 'jss-plugin-window'] 
      },
      outDir: 'build'
    },

    // Resolve configuration
    resolve: {
      alias: {
        // Alias for node-fetch package
        'node-fetch': 'just-use-native-fetch',

        // Alias for custom source paths
        // eslint-disable-next-line no-useless-escape
        '/^src\/(.*)/': path.resolve(__dirname, 'src/$1')
      }
    },

    // Define global constants
    define: {
      // Define environment variables for the app
      // 'process.env.REACT_APP_VERSION': JSON.stringify(env.REACT_APP_VERSION),
      'process.env.REACT_APP_SERVER_PATH': JSON.stringify(env.REACT_APP_SERVER_PATH),
      'process.env.JEST_WORKER_ID': env.JEST_WORKER_ID
    },

    // Development server configuration
    server: {
      // Open the browser automatically
      open: true,
      host: true,
      port: 3000
    }
  }
})
