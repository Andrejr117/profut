import AuthProvider from '@/components/AuthProvider'
import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'

const poppins = Poppins({  
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"], 
})

export const metadata = {
  title: 'PROFUT',
  description: 'ENIAC TEAM PRESENTS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={poppins.className}>
          <Header />
          {children}
        </body>
      </AuthProvider>
    </html>
  )
}
