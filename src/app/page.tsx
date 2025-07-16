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

      {/* Meet Rafid Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Photo */}
            <div>
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <img 
                  src="/images/rafid-hoda.jpg" 
                  alt="Rafid Hoda"
                  className="w-full aspect-square rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Meet Rafid Hoda
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-8">
                Teacher. Creator. Lifelong Nerd.
              </p>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  I was just <span className="font-semibold text-blue-600">9 years old</span> when I started building things on the computer—simple games, websites, and whatever else I could imagine.
                </p>

                <p>
                  By <span className="font-semibold text-blue-600">14</span>, I had made a video tutorial that went viral (before YouTube was even around), attracting <span className="font-semibold text-purple-600">15,000 visitors</span> to my website. That same year, I sold my first website for <span className="font-semibold text-green-600">$200</span>—to my music teacher for his rock band.
                </p>

                <p>
                  Since then, I&apos;ve taught thousands of people how to build websites, apps, and games—both online through <span className="font-semibold text-blue-600">Scrimba</span>, <span className="font-semibold text-blue-600">freeCodeCamp</span>, and <span className="font-semibold text-blue-600">Coursera</span>, and in-person through <span className="font-semibold text-purple-600">two companies I founded</span> that specialized in teaching kids to code. I&apos;ve run countless workshops and camps designed to spark <span className="font-semibold text-green-600">excitement, confidence, and creativity</span>.
                </p>

                <p>
                  But my real mission isn&apos;t just teaching technical skills—<span className="font-bold text-blue-600">it&apos;s inspiring people to become creators.</span>
                </p>

                <p>
                  In a world of endless scrolling and passive consumption, I want your child to realize they can build something amazing—using the same tools they already love.
                </p>

                <p>
                  Over these two days, I&apos;ll guide them through a fun, hands-on journey that could spark a lifelong passion.
                </p>

                <p className="text-xl font-bold text-gray-900 pt-4">
                  Let&apos;s build something awesome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Need Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              🔧 What You&apos;ll Need to Join
            </h2>
            <p className="text-lg text-gray-700">
              Before we begin, here&apos;s what your child needs to participate:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">💻 Computer Requirements</h3>
              <p className="text-gray-700 text-sm">A Windows or Mac computer (Roblox Studio doesn&apos;t work on iPads or Chromebooks)</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">🎮 Roblox Account</h3>
              <p className="text-gray-700 text-sm">A Roblox account (free to create)</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">📹 Zoom Setup</h3>
              <p className="text-gray-700 text-sm">Zoom with working camera and mic</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">🌐 Internet Connection</h3>
              <p className="text-gray-700 text-sm">A stable internet connection</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">🏠 Quiet Space</h3>
              <p className="text-gray-700 text-sm">A quiet space for 3 hours at a time</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">👨‍👩‍👧‍👦 Parent Support</h3>
              <p className="text-gray-700 text-sm">A parent nearby to assist with setup if needed</p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
            <p className="text-lg font-semibold text-blue-800">
              ✅ Don&apos;t worry — you&apos;ll get a 30-minute 1-on-1 setup call with Rafid to make sure everything&apos;s ready before the camp starts!
            </p>
          </div>
        </div>
      </section>

      {/* How Registration Works Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              📝 How to Join the Camp
            </h2>
            <p className="text-lg text-gray-700">
              Here&apos;s how to reserve your spot:
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Pay $49 to book a 30-minute 1-on-1 setup call with Rafid
                  </h3>
                  <p className="text-gray-600 text-sm">(This session is non-refundable, and part of your total tuition)</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">In the call:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      We&apos;ll install Roblox Studio
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Test Roblox Studio
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Confirm your time slot
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Answer any questions you have
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Like what you see?</h3>
                  <p className="text-gray-700 mb-3">Pay the remaining $100 after the call to lock in your seat</p>
                  <p className="text-gray-600 text-sm">Camp runs over two days (6 hours total)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 text-center mt-8">
            <p className="text-lg font-bold text-yellow-800">
              ⏰ Spots are limited to 12 students per class, and they fill fast!
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="signup" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            🚀 Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Click the button below to book your setup call and reserve your child&apos;s seat in the Roblox Creator Camp.
          </p>
          
          <a
            href="#"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl px-12 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            👉 Book Your Spot Now
          </a>
          
          <p className="text-gray-600 mt-4 text-sm">
            Setup call: $49 • Total tuition: $149 • Limited to 12 students
          </p>
        </div>
      </section>
    </main>
  );
}
