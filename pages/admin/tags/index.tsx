import {useListTagsByShopIdQuery, useCreateTagMutation, useDeleteTagMutation } from '../../../graphql/dist/client';
import { useState } from "react";
import { useRouter } from 'next/router'

const Tags = () => {
  const router = useRouter()
  const shopUid = router.query.shopUid as string;
  const { data: { tagsByShopId = [] } = {} } = useListTagsByShopIdQuery({ variables: { shopUid: shopUid } });
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [sort, setSort] = useState<number>(0);

  const [createTag] = useCreateTagMutation({refetchQueries: ["listTagsByShopId"]});
  const [deleteTag] = useDeleteTagMutation({refetchQueries: ["listTagsByShopId"]});

  const createHandler = async(
    name: string,
    note: string,
    sort: number,
  ) => {
    await createTag({ variables: { shop_uid: shopUid, name: name, note: note, sort: sort }}).catch((e) => {
      console.log(e)
    })
    setName("");
    setNote("");
    setSort(0);
  };

  const deleteHandler = (uid: string) => {
    deleteTag({variables: {uid: uid}});
  };

  return (
    <div>
      <button
        onClick={() => {
          router.push("/admin/shops");
        }}
      >
        shops page
      </button>
      <h2>List</h2>
      {tagsByShopId.map((item) => (
        <div key={item.uid}>
        <p>{item.uid}: {item.name}: {item.note}: {item.sort}</p>
        <button
          onClick={() => {
            router.push("/admin/tags/show/?uid=" + item.uid);
          }}
        >
          show
        </button>
        <button
          onClick={() => {
            router.push("/admin/items/tagUid/?tagUid=" + item.uid);
          }}
        >
          items
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
      <label>name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <label>note</label>
      <input value={note} onChange={(e) => setNote(e.target.value)} />
      <label>sort</label>
      <input type="number" value={sort} onChange={(e) => setSort(Number(e.target.value))} />
      <button
        onClick={() => {
          createHandler(name, note, sort)
        }}
      >
        submit
      </button>
    </div>
  );
}

function Index() {
  return (
    <Tags />
  )
}

export default Index