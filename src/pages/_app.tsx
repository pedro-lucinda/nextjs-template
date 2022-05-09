import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify'
import { queryClient } from '@/config/lib/reactQuery'
import { IS_DEVELOPMENT } from '@/constants/config'
import { globalStyles } from '@/styles/global/styles'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {IS_DEVELOPMENT && <ReactQueryDevtools initialIsOpen={false} />}
        <ToastContainer />
        <NextNprogress
          color="#00ff95"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          options={{ showSpinner: false }}
        />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
