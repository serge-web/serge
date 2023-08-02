import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'
import path from 'path'
import envCompatible from 'vite-plugin-env-compatible'
import checker from 'vite-plugin-checker'
// import sassPlugin from 'vite-plugin-sass'
import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react(), checker({
      overlay: { initialIsOpen: false },
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"'
      }
    }), 
    viteTsconfigPaths(), 
    svgrPlugin(), 
    envCompatible()
    ],
    css: {
      preprocessorOptions: {
        scss: {
          implementation: sass
        }
      }
    },
    build: {
      rollupOptions: {
        external: ['jss-plugin-{}', 'jss-plugin-window'] 
      },
      outDir: 'build'
    },
    // envPrefix: 'REACT_APP',
    resolve: {
      alias: {
        'node-fetch': 'just-use-native-fetch',
        // eslint-disable-next-line no-useless-escape
        '/^src\/(.*)/': path.resolve(__dirname, 'src/$1')
      }
    },
    server: {
      open: true,
      port: 3000
    }
  }
})
