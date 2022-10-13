import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { useFindShopQuery, useUpdateShopMutation } from '../../../graphql/dist/client';

function Show() {
  const [name, setName] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");
  const [note, setNote] = useState("");

  const router = useRouter()
  const uid = router.query.uid as string;
  const [updateShop] = useUpdateShopMutation();
  const { data: { shop } = {} } = useFindShopQuery({ variables: { uid: uid } });
  useEffect(() => {
    if (shop != null) {
      setName(shop.name)
      setZip(shop.zip)
      setAddress(shop.address)
      setTel(shop.tel)
      setNote(shop.note)
    }
  }, [shop])

  const updateHandler = (
    uid: string, 
    name: string,
    zip: string,
    address: string,
    tel: string,
    note: string,
  ) => {
    updateShop({ variables: { uid: uid, name: name, zip: zip, address: address, tel: tel, note: note }})
  }

  return (
    <div>
      <button
        onClick={() => {
          router.push("/admin/shops");
        }}
      >
        index page
      </button>
      <p>uid: {uid}</p>
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
          updateHandler(uid, name, zip, address, tel, note);
        }}
      >
        submit
      </button>

    </div>
  )
}

export default Show