import { Login, Logout } from '../api/firebase';
import { auth } from '../api/firebase';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';

function Index() {
  const [uid, setUid] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      }
    });
  })

  return (
    <div>
      {uid ?
        <>
          <div>{uid}</div>
          <button
            onClick={() => {
              Logout()
            }}
          >
            Logout
          </button>
        </>
      :
        <button
          onClick={() => {
            Login()
          }}
        >
          login
        </button>
      }
    </div>
  )
}

export default Index
