
export default function MintCard() {
  return (
     <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl p-6 w-full">
      <div className="flex-shrink-0">
        <img
          className="h-24 md:h-48 w-24 md:w-48 rounded-xl"
          src="https://i.pinimg.com/736x/7e/55/99/7e55994a06daa0bf59d60c7504f4f3a3.jpg" // Replace with your logo URL
          alt="Get a Series Logo"
        />
      </div>
      <div className="mt-4 md:mt-0 md:ml-4 flex-grow">
        <h1 className="text-2xl font-semibold text-purple-700">Get a Series</h1>
        <p className="mt-2 text-gray-600">Starting: June 30, 2025 - July 2, 2025</p>
        <p className="mt-1 text-gray-600">Format: In-person Event</p>
        <p className="mt-2 text-gray-500">Testing</p>
        <a href="https://example.com" className="text-blue-500">example.com</a>
      </div>
      <div className="md:ml-8 mt-4 md:mt-0">
        <h2 className="text-lg font-semibold">Collect this Series</h2>
        <input
          type="text"
          placeholder="Email, ENS or Ethereum address"
          className="border border-gray-300 rounded-md p-2 mt-2 w-full"
        />
        <button className="mt-2 bg-purple-600 text-white rounded-md p-2 w-full hover:bg-purple-700">
          Mint now
        </button>
        <p className="mt-2 text-sm text-gray-500">
          Mint for free on <span className="font-semibold">Base</span>
        </p>
      </div>
    </div>
  )
}
