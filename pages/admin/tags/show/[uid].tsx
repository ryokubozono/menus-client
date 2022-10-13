import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { useFindTagQuery, useUpdateTagMutation } from '../../../../graphql/dist/client';

function Show() {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [sort, setSort] = useState<number>(0);

  const router = useRouter()
  const uid = router.query.uid as string;
  const [updateTag] = useUpdateTagMutation();
  const { data: { tag } = {} } = useFindTagQuery({ variables: { uid: uid } });
  useEffect(() => {
    if (tag != null) {
      setName(tag.name)
      setNote(tag.note)
      setSort(tag.sort)
    }
  }, [tag])

  const updateHandler = (
    uid: string, 
    name: string,
    note: string,
    sort: number,
  ) => {
    updateTag({ variables: { uid: uid, name: name, note: note, sort: sort }})
  }

  return (
    <div>
      <button
        onClick={() => {
          router.push(`/admin/tags/${tag?.shop_uid}`);
        }}
      >
        tag page
      </button>
      <p>uid: {uid}</p>
      <label>name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <label>note</label>
      <input value={note} onChange={(e) => setNote(e.target.value)} />
      <label>sort</label>
      <input type="number" value={sort} onChange={(e) => setSort(Number(e.target.value))} />
      <button
        onClick={() => {
          updateHandler(uid, name, note, sort);
        }}
      >
        submit
      </button>

    </div>
  )
}

export default Show