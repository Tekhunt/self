import { Footer } from "./Footer"
import { Header } from "./Header"

export const Bio = () => {
    return (
        <>
        <Header />

        <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 py-20 px-20 pl-0 pr-0 sm:py-3 sm:px-3">
  <div class="p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="flex flex-col justify-center mx-auto max-w-xl text-center sm:text-left">

      <p class="hidden text-gray-500 md:mt-4 md:block">
        Passionate about crafting seamless digital experiences and harnessing the power of AI. With a strong foundation in both fullstack development and machine learning, I thrive on transforming ideas into innovative solutions. Equipped with a diverse skillset and a commitment to continuous learning, I am dedicated to pushing the boundaries of technology.
      </p>

      <div class="flex justify-center md:justify-start mt-4 md:mt-8">
        <a
          href="https://chizzy-io.netlify.app/"
          class="inline-block rounded bg-[#ff8a00] border border-[#ff8a00] px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Let's Collaborate
        </a>
      </div>
    </div>
  </div>

  <img
    alt="Student"
    src="https://media.istockphoto.com/id/1305375074/photo/hacker-working-on-laptop-in-the-dark.jpg?s=612x612&w=0&k=20&c=IZaAbccqjmIaO3YmTm7PVXo_cb8SlghIc29n1ASE6Bw="
    class="h-56 w-full object-cover sm:h-full"
  />
</section>

        <Footer />
        </>
    )
}