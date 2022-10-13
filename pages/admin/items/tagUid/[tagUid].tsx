import {useListItemsByTagIdQuery, useCreateItemMutation, useDeleteItemMutation, useFindTagQuery } from '../../../../graphql/dist/client';
import { useState } from "react";
import { useRouter } from 'next/router'

function GetShopIdOfTag(uid: string) {
  const { data: { tag } = {} } = useFindTagQuery({ variables: { uid: uid } });
  if (tag != null) {
    return tag.shop_uid
  } else {
    return ""
  }
}

const Items = () => {
  const router = useRouter()
  const tagUid = router.query.tagUid as string;
  const { data: { itemsByTagId = [] } = {} } = useListItemsByTagIdQuery({ variables: { tagUid: tagUid } });
  const [name, setName] = useState("");
  const [sort, setSort] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isSold, setIsSold] = useState(false);
  const shopUid = GetShopIdOfTag(tagUid)

  const [createItem] = useCreateItemMutation({refetchQueries: ["listItemsByTagId"]});
  const [deleteItem] = useDeleteItemMutation({refetchQueries: ["listItemsByTagId"]});

  const createHandler = async(
    name: string,
    sort: number,
    price: number,
    isVisible: boolean,
    isSold: boolean,
  ) => {
    await createItem({ variables: { shop_uid: shopUid, tag_uid: tagUid, name: name, sort: sort, price: price, is_visible: isVisible, is_sold: isSold, image_path: "" }}).catch((e) => {
      console.log(e)
    })
    setName("");
    setSort(0);
    setPrice(0);
    setIsVisible(false);
    setIsSold(false);
  };

  const deleteHandler = (uid: string) => {
    deleteItem({variables: {uid: uid}});
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
      {itemsByTagId.map((item) => (
        <div key={item.uid}>
        <p>{item.uid}:{item.shop_uid}:{item.tag_uid}:{item.name}:{item.sort}:{item.price}:{item.is_sold + ''}:{item.is_visible + ''}</p>
        <button
          onClick={() => {
            router.push("/admin/items/uid/" + item.uid);
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
      <label>name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <label>sort</label>
      <input type="number" value={sort} onChange={(e) => setSort(Number(e.target.value))} />
      <label>price</label>
      <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      <label>isSold</label>
      <input type="checkbox" checked={isSold} onChange={(e) => setIsSold(Boolean(e.target.value))} />
      <label>isVisible</label>
      <input type="checkbox" checked={isVisible} onChange={(e) => setIsVisible(Boolean(e.target.value))} />
      <button
        onClick={() => {
          createHandler(name, sort, price, isVisible, isSold)
        }}
      >
        submit
      </button>
    </div>
  );
}

function Index() {
  return (
    <Items />
  )
}

export default Index