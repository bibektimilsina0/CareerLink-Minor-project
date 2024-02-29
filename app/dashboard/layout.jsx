import { Inter } from 'next/font/google'


import Sidebar from './components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function DashboardLayout({ children }) {
  return (
    <section className='flex'>
      <div>

      <Sidebar />
      </div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">

        <div className="body flex-grow-1 px-3">
          {children}
        </div>
        {/* footer */}
      </div>

    </section>
  )
}
