import {useListShopsQuery, useCreateShopMutation, useDeleteShopMutation } from '../../../graphql/dist/client';
import { useState } from "react";
import { useRouter } from 'next/router'

const Shops = () => {
  const { data: { shops = [] } = {} } = useListShopsQuery();
  const [name, setName] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");
  const [note, setNote] = useState("");

  const [createShop] = useCreateShopMutation({refetchQueries: ["listShops"]});
  const [deleteShop] = useDeleteShopMutation({refetchQueries: ["listShops"]});
  const router = useRouter()
  const createHandler = async(
    name: string,
    zip: string,
    address: string,
    tel: string,
    note: string,
  ) => {
    await createShop({ variables: { name: name, zip: zip, address: address, tel: tel, note: note }}).catch((e) => {
      console.log(e)
    })
    setName("");
    setZip("");
    setName("");
    setAddress("");
    setTel("");
    setNote("");
  };

  const deleteHandler = (uid: string) => {
    deleteShop({variables: {uid: uid}});
  };

  return (
    <div>
      <h2>List</h2>
      {shops.map((item) => (
        <div key={item.uid}>
        <p>{item.uid}: {item.name}: {item.zip}: {item.tel}: {item.note}: {item.address}</p>
        <button
          onClick={() => {
            router.push("/admin/shops/show/?uid=" + item.uid);
          }}
        >
          show
        </button>
        <button
          onClick={() => {
            router.push("/admin/tags/?shopUid=" + item.uid);
          }}
        >
          tags
        </button>
        <button
          onClick={() => {
            router.push("/admin/items/shopUid/?shopUid=" + item.uid);
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
      <label>zip</label>
      <input value={zip} onChange={(e) => setZip(e.target.value)} />
      <label>address</label>
      <input value={address} onChange={(e) => setAddress(e.target.value)} />
      <label>tel</label>
      <input value={tel} onChange={(e) => setTel(e.target.value)} />
      <label>note</label>
      <input value={note} onChange={(e) => setNote(e.target.value)} />
      <button
        onClick={() => {
          createHandler(name, zip, address, tel, note)
        }}
      >
        submit
      </button>
    </div>
  );
}

function Index() {
  return (
    <Shops />
  )
}

export default Index