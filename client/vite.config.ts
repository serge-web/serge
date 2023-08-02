import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'
import path from 'path'
import envCompatible from 'vite-plugin-env-compatible'
import checker from 'vite-plugin-checker'
// import sassPlugin from 'vite-plugin-sass'
import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    envPrefix: 'REACT_APP',
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
    resolve: {
      alias: {
        'node-fetch': 'just-use-native-fetch',
        // eslint-disable-next-line no-useless-escape
        '/^src\/(.*)/': path.resolve(__dirname, 'src/$1')
      }
    },
    define: {
      // 'process.env.REACT_APP_VERSION': JSON.stringify(env.REACT_APP_VERSION),
      'process.env.REACT_APP_SERVER_PATH': JSON.stringify(env.REACT_APP_SERVER_PATH)
    },
    server: {
      open: true,
      host: true,
      port: 3000
    }
  }
})
