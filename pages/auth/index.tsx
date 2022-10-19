import { Login, Logout } from '../api/firebase';

function Index() {

  return (
    <div>
      <button
        onClick={() => {
          Login()
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          Logout()
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default Index
