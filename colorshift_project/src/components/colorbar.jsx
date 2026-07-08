import React from 'react'

const colorbar = ({ setColor }) => {
  return (
    <>
      <div className='flex flex-wrap gap-4 mt-120 bg-white p-4 rounded-lg shadow-lg'>
        <button
          onClick={() => setColor("red")}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Red
        </button>

        <button
          onClick={() => setColor("green")}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Green
        </button>

        <button
          onClick={() => setColor("blue")}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Blue
        </button>

        <button
          onClick={() => setColor("yellow")}
          className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500"
        >
          Yellow
        </button>

        <button
          onClick={() => setColor("orange")}
          className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
        >
          Orange
        </button>

        <button
          onClick={() => setColor("purple")}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
        >
          Purple
        </button>

        <button
          onClick={() => setColor("pink")}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
        >
          Pink
        </button>

        <button
          onClick={() => setColor("cyan")}
          className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600"
        >
          Cyan
        </button>

        <button
          onClick={() => setColor("teal")}
          className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
        >
          Teal
        </button>

        <button
          onClick={() => setColor("gray")}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Gray
        </button>

        <button
          onClick={() => setColor("black")}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          Black
        </button>

        <button
          onClick={() => setColor("white")}
          className="bg-white text-black border px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          White
        </button>
      </div>
    </>
  )
}

export default colorbar