import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ImagePage = () => {
    return (
        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  transition={{ duration: 0.5 }}
  className='max-w-md w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800'
>
  <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-600 text-transparent bg-clip-text'>
    Image Editing
  </h2>

  <div className='space-y-6'>
    <motion.div
      className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Link
        to={'/convertpdf'}
        className="w-full inline-block py-3 text-center bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        Convert to PDF
      </Link>
      <Link
        to={'/removebg'}
        className="w-full inline-block py-3 text-center bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 mt-4"
      >
        Remove Background
      </Link>
    </motion.div>
  </div>
</motion.div>

    )
}

export default ImagePage
