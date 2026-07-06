import { useState } from 'react'

function App() {
  const [username, setUsername] = useState("")

  function handleSearch(e) {
    e.preventDefault() 
    // console.log(username)
  }

  return (
    <>
      <div className='w-fit min-w-3/4  h-fit p-10 my-20 rounded-4xl bg-gray-800 m-auto'>
        <div>
          <h1 className='text-4xl text-white text-center bg-gray-600 w-fit m-auto p-4 rounded-4xl'>GitHub Profile Finder</h1>
          <form
            onSubmit={handleSearch}
            className='flex justify-center items-center p-10'>
            <input
              type="text"
              value={username}
              placeholder='username'
              onChange={(e) => setUsername(e.target.value)}
              className='bg-gray-300 outline-none p-3 rounded-l-3xl w-2/6 ' />

            <button
              className='bg-slate-500 p-3 rounded-r-3xl text-white disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:bg-slate-600'
              type="submit"
              disabled={!username.trim()}
              title={!username.trim() ? "Enter a username first" : "Search"}
            >Search</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
