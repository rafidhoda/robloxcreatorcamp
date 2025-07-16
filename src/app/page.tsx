export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
      <section className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Turn Roblox time into real-world skills.
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            In this 2-day camp, your child will build a game, promote it with a video,
            code a website to show it off, and design a poster using AI.
          </p>
          <a
            href="#signup"
            className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-500 transition"
          >
            Reserve Your Spot – Only 12 Seats per Class
          </a>
        </div>

        {/* Right Video Embed */}
        <div className="md:w-1/2 w-full aspect-[9/16]">
          <div className="w-full h-full overflow-hidden rounded-xl shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/BvrtpnPcMN8"
              title="Roblox Creator Camp Promo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
