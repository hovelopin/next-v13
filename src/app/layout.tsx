import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* body 밖에 태그를 넣게 되면 Error가 발생한다. */}
      <body className={inter.className}>
        <h1>Root Layout</h1> 
        {children}
      </body>
    </html>
  )
}
