export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Turn Roblox time into real-world skills.
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-6">
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
        </div>
      </section>

      {/* What You'll Create Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Your Child&apos;s 2-Day Journey
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Watch your child go from Roblox player to creator, building and launching their first game like a pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Build Game */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square">
                <img 
                  src="/images/alex-game.png" 
                  alt="Child building a Roblox obstacle course game"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded-full mr-3">1</span>
                  <h3 className="text-lg font-bold text-gray-900">Build a Roblox Game</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Your child creates their first Obby - a challenging obstacle course with jumps, moving platforms, and tricky puzzles
                </p>
              </div>
            </div>

            {/* Card 2: Make Video */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square">
                <img 
                  src="/images/alex-video.png" 
                  alt="Child creating a promotional video"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-purple-500 text-white text-sm font-bold px-2 py-1 rounded-full mr-3">2</span>
                  <h3 className="text-lg font-bold text-gray-900">Make a Promo Video</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Your child films and edits an awesome trailer showcasing the best parts of their game
                </p>
              </div>
            </div>

            {/* Card 3: Code Website */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square">
                <img 
                  src="/images/alex-website.png" 
                  alt="Child coding a website for their game"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-green-500 text-white text-sm font-bold px-2 py-1 rounded-full mr-3">3</span>
                  <h3 className="text-lg font-bold text-gray-900">Code a Website</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Your child builds a professional website with screenshots, description, and download button
                </p>
              </div>
            </div>

            {/* Card 4: Design Poster */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square">
                <img 
                  src="/images/alex-poster.png" 
                  alt="Child designing an AI-generated poster"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full mr-3">4</span>
                  <h3 className="text-lg font-bold text-gray-900">Design with AI</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Your child creates a stunning marketing poster using AI tools, just like real game studios
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Is Different Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Why This Is Different
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              This isn&apos;t just another coding camp.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              It&apos;s a chance for your child to transform from{" "}
              <span className="font-bold text-gray-800 bg-gray-100 px-2 py-1 rounded">consumer</span>
              {" "}to{" "}
              <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">creator</span>
              {" "}<br></br>— using what they already love: Roblox.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                We Start With What They Already Love
              </h3>
              <p className="text-gray-700">
                No more forcing abstract concepts. We use Roblox to unlock curiosity about game design, storytelling, video editing, AI, and web creation.
              </p>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                A Shift in Identity
              </h3>
              <p className="text-gray-700">
                It&apos;s not just about skills. It&apos;s about your child seeing themselves differently — as someone who can build and share their ideas with the world.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                A Full Creator Journey
              </h3>
              <p className="text-gray-700">
                Most camps teach one thing. This camp gives your child the complete experience — from building a game to launching it like a pro.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                AI as a Creative Superpower
              </h3>
              <p className="text-gray-700">
                We don&apos;t just talk about AI. We show kids how to use it to bring their ideas to life, making the future feel fun, not scary.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
