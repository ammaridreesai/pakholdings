'use client';

import LocationOnIcon from '@mui/icons-material/LocationOn'; // Importing MUI LocationOn icon

export default function Locations() {
    return (
        <div className="bg-white md:p-16 p-4">
            <div className="max-w-screen-3xl mx-auto text-center">
                <p className="text-sm font-semibold text-gray-500">Find</p>
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Locations</h2>
                <p className="text-lg text-gray-600 mb-12">
                    Explore our offices around the globe for your convenience.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12">
                    {/* Sydney Location */}
                    <div>
                        <div className="bg-gray-200 rounded-lg shadow-lg p-6">
                            <div className="relative w-full h-72 rounded-lg">
                                <LocationOnIcon fontSize='large' className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mt-4">Sydney</h3>
                            <p className="text-gray-600">123 Sample St, Sydney NSW 2000 AU</p>
                            <a
                                href="https://www.google.com/maps"
                                target="_blank"
                                className="text-green-600 font-medium hover:text-green-700 mt-4 inline-block"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>
                    {/* New York Location */}
                    <div>
                        <div className="bg-gray-200 rounded-lg shadow-lg p-6">
                            <div className="relative w-full h-72 rounded-lg">
                                <LocationOnIcon fontSize='large' className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mt-4">New York</h3>
                            <p className="text-gray-600">123 Sample St, New York NY 10000 USA</p>
                            <a
                                href="https://www.google.com/maps"
                                target="_blank"
                                className="text-green-600 font-medium hover:text-green-700 mt-4 inline-block"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
