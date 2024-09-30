import { motion } from "framer-motion";
import { PDFDownloadLink, Page, Image, Document, StyleSheet } from '@react-pdf/renderer';
import { useState } from "react";


const Convertpdf = () => {
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            backgroundColor: '#ffffff',
            padding: 10,
        },
        image: {
            width: '100%',
            height: 'auto',
        },
    });

    const MyDocument = ({ imgSrc }) => (
        <Document>
            <Page size="A4" style={styles.page}>
                <Image src={imgSrc} style={styles.image} />
            </Page>
        </Document>
    );
    const [imgSrc, setImgSrc] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImgSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
            >
                <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-600 text-transparent bg-clip-text">
                    Image to PDF Converter
                </h2>

                <div className="space-y-6">
                    <motion.div
                        className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full py-2 px-4 bg-gray-700 text-white rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                        />
                    </motion.div>

                    {imgSrc && (
                        <motion.div
                            className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <PDFDownloadLink
                                document={<MyDocument imgSrc={imgSrc} />}
                                fileName="image-to-pdf.pdf"
                            >
                                {({ blob, url, loading, error }) => (
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                                    >
                                        {loading ? 'Generating PDF...' : 'Download PDF'}
                                    </motion.button>
                                )}
                            </PDFDownloadLink>
                        </motion.div>
                    )}
                </div>
            </motion.div>

            {/* <motion.div
                className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className='flex space-x-4'>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900'
                    >
                        Convert to PDF
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900'
                    >
                        Remove Background
                    </motion.button>
                </div>
            </motion.div> */}
        </>
    )
}

export default Convertpdf
