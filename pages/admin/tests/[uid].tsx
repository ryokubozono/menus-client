import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { useFindTestQuery, useUpdateTestMutation } from '../../../graphql/dist/client';

function Show() {
  const [text, setText] = useState("");

  const router = useRouter()
  const uid = router.query.uid as string;
  const [updateTest] = useUpdateTestMutation();
  const { data: { test } = {} } = useFindTestQuery({ variables: { uid: uid } });
  useEffect(() => {
    if (test != null) {
      setText(test.text)
    }
  }, [test])

  const updateHandler = (uid: string, text: string) => {
    updateTest({ variables: { uid: uid, text: text }})
  }

  return (
    <div>
      <button
        onClick={() => {
          router.push("/admin/tests");
        }}
      >
        index page
      </button>
      <p>uid: {uid}</p>
      <label>text</label>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          updateHandler(uid, text);
        }}
      >
        submit
      </button>

    </div>
  )
}

export default Show