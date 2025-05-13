"use client";

import LocationOnIcon from "@mui/icons-material/LocationOn"; // Importing MUI LocationOn icon

export default function Locations() {
  return (
    <div className="bg-white md:p-16 p-4">
      <div className="max-w-screen-3xl mx-auto text-center">
        <p className="text-sm font-semibold text-gray-500">Find</p>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Locations</h2>
        <p className="text-lg text-gray-600 mb-12">
          Explore our offices around the globe for your convenience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-12">
          {/* Pakistan Location */}
          <div>
            <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.9210041167786!2d73.0584513751632!3d33.51615168075079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9515451e9f43%3A0x7f4c5d85d76279af!2sStallion%20House%2C%20H%23%2094%2C%20Street%2011%2C%20Sector%20A%2C%20Phase%208%2C%20Bahria%20town%2C%20Rawalpindi!5e0!3m2!1sen!2s!4v1687947310724!5m2!1sen!2s"
                width="100%"
                height="300"
                allowFullScreen={true}
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Pakistan
              </h3>
              <p className="text-gray-600">
                Stallion House, H# 94, Street 11, Sector A, Phase 8, Bahria
                town, Rawalpindi
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Stallion+House,+H+94,+Street+11,+Sector+A,+Phase+8,+Bahria+town,+Rawalpindi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-medium hover:text-green-700 mt-4 inline-block"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* New York Location */}
          {/* <div>
            <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9992202684813!2d-74.00601548459391!3d40.71277577933098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316dcce5b9%3A0xa9c3e6b4e8d6e6f4!2s123+Sample+St%2C+New+York%2C+NY+10000%2C+USA!5e0!3m2!1sen!2s!4v1687947456542!5m2!1sen!2s"
                width="100%"
                height="300"
                allowFullScreen={true}
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                New York
              </h3>
              <p className="text-gray-600">
                123 Sample St, New York NY 10000 USA
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=123+Sample+St,+New+York,+NY+10000,+USA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-medium hover:text-green-700 mt-4 inline-block"
              >
                Get Directions
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
