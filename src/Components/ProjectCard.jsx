export const ProjectCard = ({header, link1, link2, desc, img1, ptitle1, pdesc1, img2, ptitle2, pdesc2}) => {
  return (
    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div class="max-w-md mx-auto text-center lg:text-left">
              <header>
                <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                {header}
                </h2>

                <p class="mt-4 text-gray-500">
                {desc}
                </p>
              </header>

              <a
                href="https://chizzy-io.netlify.app/"
                class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-[#ff8a00] border border-[#ff8a00] rounded hover:shadow focus:outline-none focus:ring"
              >
                View All Projects
              </a>
            </div>
          </div>

          <div class="lg:col-span-2 lg:py-8">
            <ul class="grid grid-cols-2 gap-4">
              <li>
                <a href="https://chizzy-io.netlify.app/" class="block group">
                  <img
                    src={img2}
                    alt=""
                    class="object-cover w-full rounded aspect-square"
                  />
(// eslint-disable-next-line )
                  <div class="mt-3">
                  (// eslint-disable-next-line )
                    <a href={link1} target="_blank" rel="noreferrer">
                    <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    {ptitle1}
                    </h3>
                    </a>
                    <p class="mt-1 text-sm text-gray-700">{pdesc1}</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="https://chizzy-io.netlify.app/" class="block group">
                  <img
                    src={img1}
                    alt=""
                    class="object-cover w-full rounded aspect-square"
                  />

                  <div class="mt-3">
                  <a href={link2} target="_blank" rel="noreferrer">
                    <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    {ptitle2}
                    </h3>
                    </a>

                    <p class="mt-1 text-sm text-gray-700">{pdesc2}</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
