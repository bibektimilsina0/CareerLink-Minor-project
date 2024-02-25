import { Inter } from 'next/font/google'


import Sidebar from './components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function DashboardLayout({ children }) {
  return (
    <section className='flex'>
<<<<<<< HEAD:app/dashboard/layout.js
      <div className='w-50 '>

      <Sidebar />
      </div>
      <div className="wrapper flex-1 
      
    mx-4 flex flex-col 

      min-vh-100 bg-light">
=======
      <div className='w-1/4'>

      <Sidebar />
      </div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light w-full">
>>>>>>> f74ca7960764c18e0fb8189c506e2ee4cad4dd72:app/admin/dashboard/layout.jsx

        <div className="body flex-grow-1 px-3">
          {children}
        </div>
        {/* footer */}
      </div>

    </section>
  )
}

