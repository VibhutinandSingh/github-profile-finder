import { useEffect, useRef, useState } from 'react'

function App() {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const selectInput = useRef(null)

  function focusInputField() {
    selectInput.current?.focus()
  }
  function selectInputField() {
    selectInput.current?.select()
  }
  function saveOnLocalStorage(){
    localStorage.setItem("previousUsername", username )
  }

  useEffect(() => {
    focusInputField()
    setUsername(localStorage.getItem("previousUsername"))
  }, [])

  async function handleSearch(e) {
    e.preventDefault() // prevents the page from refreshing
    setUser(null)
    setError("")
    setLoading(true)
    try {
      const response = await fetch(
        `https://api.github.com/users/${username.trim()}` // fetch the user
      )
      if (!response.ok) {
        setUser(null)
        setError("User not found!")
        return
      }
      const data = await response.json(); // convert the response to json
      setUser(data) // store it in state
      setUsername("")
    }
    catch (error) {
      console.error(error);
      setUser(null);
      setError("Network error. Please try again");
    }
    finally {
      setLoading(false)
    }

  }


  return (
    <>
      <div className='w-fit min-w-3/4  justify-center  h-fit p-10 my-20 rounded-4xl bg-gray-800 m-auto'>
        <div>
          <h1 className='text-4xl flex flex-col text-white text-center bg-gray-600 w-fit m-auto p-4 rounded-4xl'>GitHub Profile Finder</h1>
          <form
            onSubmit={handleSearch}
            className='flex justify-center items-center p-10'>
            <input
              type="text"
              value={username}
              placeholder='username'
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
              ref={selectInput}
              className='bg-gray-300 outline-none p-3 rounded-l-3xl w-2/6 ' />
            <button
              className='bg-slate-500 p-3 rounded-r-3xl text-white disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:bg-slate-600'
              type="submit"
              onClick={saveOnLocalStorage}
              disabled={!username.trim() || loading}
              title={!username.trim() ? "Enter a username first" : "Search"}
            >{loading ? <div className='flex justify-center items-center gap-2'>
              <div className='w-5 h-5 rounded-full border-2 border-gray-300 border-t-blue-500 animate-spin'></div>
              <h2>Searching...</h2>
            </div> : "Search"}
            </button>
          </form>
          <div className='text-white text-3xl text-center'>
            {error}
          </div>
          {user && (
            <div className='flex flex-col m-auto gap-4 justify-center starting:opacity-0 transition-all duration-500  items-center'>
              <img
                className='w-80 h-80 rounded-full object-cover'
                src={user.avatar_url}
                alt={user.login} />
              <h2 className='text-center text-3xl bg-slate-700 w-fit p-3 rounded-4xl m-auto text-white'>
                {user.login}
              </h2>
              <h2 className=' text-2xl bg-slate-500 w-fit py-3 px-8 rounded-4xl text-center text-white'>
                {user.name || "no username available"}
              </h2>
              <p className=' text-2xl bg-slate-700 w-fit py-3 px-8 rounded-4xl text-center text-white'>
                {user.bio || "no bio available"}
              </p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className=' text-2xl bg-slate-700 w-fit py-3 px-8 rounded-4xl text-center text-white'
              >
                🔗 {user.html_url}
              </a>
              <div className='flex gap-4'>
                <div className='flex flex-col font-bold justify-center items-center bg-slate-400 text-white py-4 px-8 rounded-3xl'>
                  <h2 className='text-2xl '>Followers</h2>
                  {user.followers}
                </div>
                <div className='flex flex-col font-bold justify-center items-center bg-slate-400 text-white py-4 px-8 rounded-3xl'>
                  <h2 className='text-2xl '>Following</h2>
                  {user.following}
                </div>
                <div className='flex flex-col font-bold justify-center items-center bg-slate-400 text-white py-4 px-8 rounded-3xl'>
                  <h2 className='text-2xl '>Repositories</h2>
                  {user.public_repos}
                </div>
              </div>
              <h2 className=' text-2xl bg-slate-500 w-fit py-3 px-5 rounded-4xl text-center text-white'>
                📍  Location : {user.location || "location not available"}
              </h2>
              <a
                href={`https://github.com/${user.login}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className='p-4 bg-slate-500 text-white rounded-4xl hover:bg-slate-700 hover:scale-110 duration-200'
              >
                View Repositories
              </a>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className='p-4 bg-slate-700 text-white rounded-4xl hover:bg-slate-500 hover:scale-110 duration-200'
              >
                Visit Profile
              </a>
            </div>

          )}
        </div>
      </div>
    </>
  )
}

export default App
