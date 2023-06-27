import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        <div
          onClick={() => setOpen((current) => !current)}
          className=" fixed top-0 right-0 w-full h-full bg-[#00000083]"
        />
      ) : null}
      <nav>
        <div className="max-w-screen-xl flex flex-row-reverse flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <a href="#" className="mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                viewBox="0 0 2500 2500"
              >
                <defs>
                  <radialGradient
                    id="0"
                    cx="332.14"
                    cy="2511.81"
                    r="3263.54"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".09" stopColor="#fa8f21" />
                    <stop offset=".78" stopColor="#d82d7e" />
                  </radialGradient>
                  <radialGradient
                    id="1"
                    cx="1516.14"
                    cy="2623.81"
                    r="2572.12"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0" />
                    <stop offset="1" stopColor="#8c3aaa" />
                  </radialGradient>
                </defs>
                <path
                  d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                  fill="url(#0)"
                />
                <path
                  d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                  fill="url(#1)"
                />
              </svg>
            </a>
            <a href="#" className="mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Telegram"
                role="img"
                width="25px"
                height="25px"
                viewBox="0 0 512 512"
              >
                <rect width="512" height="512" rx="15%" fill="#37aee2" />
                <path
                  fill="#c8daea"
                  d="M199 404c-11 0-10-4-13-14l-32-105 245-144"
                />
                <path fill="#a9c9dd" d="M199 404c7 0 11-4 16-8l45-43-56-34" />
                <path
                  fill="#f6fbfe"
                  d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"
                />
              </svg>
            </a>
            <a href="#" className="mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                viewBox="0 0 17 17"
                version="1.1"
              >
                <path
                  d="M8.301 6.422c0.437 0 0.769-0.161 1.006-0.484 0.181-0.237 0.265-0.617 0.265-1.12v-1.66c0-0.503-0.084-0.873-0.265-1.11-0.238-0.321-0.57-0.483-1.006-0.483-0.428 0-0.76 0.161-0.995 0.483-0.181 0.238-0.266 0.608-0.266 1.111v1.66c0 0.503 0.085 0.873 0.266 1.12 0.235 0.322 0.567 0.483 0.995 0.483zM7.893 2.988c0-0.436 0.133-0.654 0.408-0.654 0.285 0 0.408 0.218 0.408 0.654v1.992c0 0.437-0.123 0.664-0.408 0.664-0.275 0-0.408-0.228-0.408-0.664v-1.992zM10.35 6.071c-0.048-0.143-0.075-0.37-0.075-0.711v-3.738h0.863v3.481c0 0.2 0 0.313 0.010 0.333 0.019 0.133 0.085 0.208 0.199 0.208 0.17 0 0.35-0.133 0.54-0.408v-3.614h0.863v4.734h-0.863v-0.522c-0.341 0.398-0.663 0.588-0.978 0.588-0.275 0-0.474-0.113-0.559-0.351zM13.633 11.811v0.436h-0.854v-0.436c0-0.427 0.143-0.646 0.427-0.646 0.284 0.001 0.427 0.219 0.427 0.646zM4.354 1.774c-0.208-0.588-0.416-1.186-0.617-1.774h1.007l0.673 2.495 0.645-2.495h0.968l-1.148 3.785v2.571h-0.948v-2.571c-0.086-0.465-0.276-1.129-0.58-2.011zM15.283 8.785c-0.171-0.75-0.788-1.3-1.518-1.385-1.746-0.19-3.511-0.19-5.266-0.19s-3.52 0-5.256 0.19c-0.738 0.085-1.346 0.635-1.526 1.385-0.237 1.062-0.247 2.22-0.247 3.32 0 1.091 0 2.257 0.247 3.32 0.171 0.75 0.788 1.3 1.518 1.376 1.745 0.199 3.51 0.199 5.265 0.199s3.52 0 5.266-0.199c0.729-0.076 1.337-0.626 1.518-1.376 0.237-1.062 0.247-2.229 0.247-3.32-0.001-1.1-0.001-2.258-0.248-3.32zM5.483 9.743h-1.014v5.398h-0.949v-5.398h-0.997v-0.892h2.96v0.892zM8.045 15.141h-0.845v-0.512c-0.342 0.389-0.664 0.579-0.968 0.579-0.274 0-0.474-0.114-0.55-0.351-0.048-0.142-0.076-0.361-0.076-0.692v-3.709h0.845v3.453c0 0.2 0 0.304 0.009 0.333 0.020 0.132 0.086 0.199 0.199 0.199 0.172 0 0.352-0.132 0.541-0.398v-3.586h0.845v4.684zM11.271 13.737c0 0.437-0.020 0.749-0.086 0.948-0.104 0.342-0.342 0.522-0.674 0.522-0.303 0-0.598-0.171-0.883-0.522v0.456h-0.843v-6.29h0.843v2.059c0.275-0.342 0.57-0.512 0.883-0.512 0.332 0 0.57 0.18 0.674 0.531 0.066 0.19 0.086 0.502 0.086 0.939v1.869zM14.477 12.959h-1.698v0.825c0 0.437 0.143 0.654 0.437 0.654 0.209 0 0.332-0.113 0.38-0.341 0.009-0.047 0.019-0.237 0.019-0.579h0.863v0.124c0 0.275 0 0.465-0.019 0.55-0.020 0.189-0.096 0.36-0.199 0.512-0.229 0.332-0.579 0.503-1.024 0.503-0.446 0-0.779-0.161-1.025-0.484-0.18-0.228-0.275-0.598-0.275-1.101v-1.641c0-0.503 0.086-0.863 0.266-1.101 0.247-0.323 0.579-0.484 1.016-0.484 0.428 0 0.759 0.161 1.005 0.484 0.172 0.237 0.257 0.597 0.257 1.101v0.978zM10.426 11.801v2.002c0 0.427-0.124 0.635-0.37 0.635-0.143 0-0.285-0.066-0.428-0.208v-2.855c0.143-0.143 0.285-0.209 0.428-0.209 0.246 0 0.37 0.218 0.37 0.635z"
                  fill="#ff0000"
                />
              </svg>
            </a>
          </div>
          <div className="flex flex-col items-end">
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="inline-flex group items-center p-2 ml-3 text-sm text-gray-500 rounded-lg "
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                viewBox="0 -0.5 21 21"
                version="1.1"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-99.000000, -200.000000)"
                    fill="#000"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M60.85,51 L57.7,51 C55.96015,51 54.55,52.343 54.55,54 L54.55,57 C54.55,58.657 55.96015,60 57.7,60 L60.85,60 C62.58985,60 64,58.657 64,57 L64,54 C64,52.343 62.58985,51 60.85,51 M49.3,51 L46.15,51 C44.41015,51 43,52.343 43,54 L43,57 C43,58.657 44.41015,60 46.15,60 L49.3,60 C51.03985,60 52.45,58.657 52.45,57 L52.45,54 C52.45,52.343 51.03985,51 49.3,51 M60.85,40 L57.7,40 C55.96015,40 54.55,41.343 54.55,43 L54.55,46 C54.55,47.657 55.96015,49 57.7,49 L60.85,49 C62.58985,49 64,47.657 64,46 L64,43 C64,41.343 62.58985,40 60.85,40 M52.45,43 L52.45,46 C52.45,47.657 51.03985,49 49.3,49 L46.15,49 C44.41015,49 43,47.657 43,46 L43,43 C43,41.343 44.41015,40 46.15,40 L49.3,40 C51.03985,40 52.45,41.343 52.45,43"
                        id="menu_navigation_grid-[#1529]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
            <div
              className={`${
                open ? "block" : "hidden"
              } fixed top-0 right-0 w-[40%]`}
              id="navbar-default"
            >
              <ul className="font-medium text-right h-[100vh] flex flex-col p-4 bg-one">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
