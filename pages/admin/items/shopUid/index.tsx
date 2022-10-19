import {useListItemsByShopIdQuery, useCreateItemMutation, useDeleteItemMutation, useListTagsByShopIdQuery } from '../../../../graphql/dist/client';
import { useState } from "react";
import { useRouter } from 'next/router'

function Tags(shopUid: string) {
  const { data: { tagsByShopId = [] } = {} } = useListTagsByShopIdQuery({ variables: { shopUid: shopUid } });
  const tags = tagsByShopId.map((item) => item)
  return tags
}

const Items = () => {
  const router = useRouter()
  const shopUid = router.query.shopUid as string;
  const { data: { itemsByShopId = [] } = {} } = useListItemsByShopIdQuery({ variables: { shopUid: shopUid } });
  const [tagUid, setTagUid] = useState("");
  const [name, setName] = useState("");
  const [sort, setSort] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isSold, setIsSold] = useState(false);


  const [createItem] = useCreateItemMutation({refetchQueries: ["listItemsByShopId"]});
  const [deleteItem] = useDeleteItemMutation({refetchQueries: ["listItemsByShopId"]});

  const createHandler = async(
    tagUid: string,
    name: string,
    sort: number,
    price: number,
    isVisible: boolean,
    isSold: boolean,
  ) => {
    await createItem({ variables: { shop_uid: shopUid, tag_uid: tagUid, name: name, sort: sort, price: price, is_visible: isVisible, is_sold: isSold, image_path: "" }}).catch((e) => {
      console.log(e)
    })
    setTagUid("");
    setName("");
    setSort(0);
    setPrice(0);
    setIsVisible(false);
    setIsSold(false);
  };

  const deleteHandler = (uid: string) => {
    deleteItem({variables: {uid: uid}});
  };

  const tags = Tags(shopUid)

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
      {itemsByShopId.map((item) => (
        <div key={item.uid}>
        <p>{item.uid}:{item.shop_uid}:{item.tag_uid}:{item.name}:{item.sort}:{item.price}:{item.is_sold + ''}:{item.is_visible + ''}</p>
        <button
          onClick={() => {
            router.push("/admin/items/uid/?uid=" + item.uid);
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
        {item.image_path && 
          <img width='100px' src={item.image_path} alt="uploaded" />
        }
        </div>
      ))}
      <h2>Create</h2>
      <label>tagUid</label>
      <select value={tagUid} onChange={(e) => setTagUid(e.target.value)}>
        {tags.map((item) => (
          <option key={item.uid} value={item.uid}>{item.name}</option>
        ))}
      </select>
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
          createHandler(tagUid, name, sort, price, isVisible, isSold)
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