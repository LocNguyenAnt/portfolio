import Header from '@/components/Header'
import Main from '@/components/Main'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Layouts = () => {
  const { pathname } = useLocation()

  return (
    <>
      <Header />
      <Main>
        <motion.div
          key={pathname}
          initial={{ width: '100%', height: '100%' }}
          animate={{
            scale: [0, 1],
            width: '100%',
            height: '100%',
          }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </Main>
    </>
  )
}

export default Layouts
