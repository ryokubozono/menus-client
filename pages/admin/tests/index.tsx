import {useListTestsQuery, useCreateTestMutation, useDeleteTestMutation } from '../../../graphql/dist/client';
import { useState } from "react";
import { useRouter } from 'next/router'

const Tests = () => {
  const { data: { tests = [] } = {} } = useListTestsQuery();
  const [text, setText] = useState("");
  const [createTest] = useCreateTestMutation({refetchQueries: ["listTests"]});
  const [deleteTest] = useDeleteTestMutation({refetchQueries: ["listTests"]});
  const router = useRouter()
  const createHandler = async(
    text: string
  ) => {
    await createTest({ variables: { text: text }}).catch((e) => {
      console.log(e)
    })
    setText("");
  };

  const deleteHandler = (uid: string) => {
    deleteTest({variables: {uid: uid}});
  };

  return (
    <div>
      <h2>List</h2>
      {tests.map((item) => (
        <div key={item.uid}>
        <p>{item.uid}: {item.text}</p>
        <button
          onClick={() => {
            router.push("/admin/tests/?uid=" + item.uid);
          }}
        >
          show
        </button>
        <button
          onClick={() => {
            deleteHandler(item.uid)
          }}
        >
          delete
        </button>
        </div>
      ))}
      <h2>Create</h2>
      <label>text</label>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          createHandler(text)
        }}
      >
        submit
      </button>
    </div>
  );
}

function Index() {
  return (
    <Tests />
  )
}

export default Index