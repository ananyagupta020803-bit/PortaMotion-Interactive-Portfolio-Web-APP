import './globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PageTransitionWrapper from '../components/layout/PageTransitionWrapper' // client wrapper

export const metadata = {
  title: 'Evolkun — Premium Digital Experiences',
  description: 'We craft websites, AI integrations, and brand systems for ambitious teams worldwide.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[var(--bg)] text-[var(--fg)]">
        <Header />

        {/* Page content wrapped in client-side transition wrapper */}
        <PageTransitionWrapper>
          {children}
        </PageTransitionWrapper>

        <Footer />
      </body>
    </html>
  )
}
