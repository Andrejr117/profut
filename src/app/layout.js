import './globals.css'
import { Poppins } from 'next/font/google'

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
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
