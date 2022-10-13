import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { useFindItemQuery, useUpdateItemMutation, useListTagsByShopIdQuery, useCreateImageMutation } from '../../../../graphql/dist/client';
import { storage } from '../../../api/firebase'

import { getDownloadURL, uploadBytes, ref, deleteObject } from "firebase/storage";

function Tags(shopUid: string) {
  const { data: { tagsByShopId = [] } = {} } = useListTagsByShopIdQuery({ variables: { shopUid: shopUid } });
  const tags = tagsByShopId.map((item) => item)
  return tags
}

function Show() {
  const [tagUid, setTagUid] = useState("");
  const [shopUid, setShopUid] = useState("");
  const [name, setName] = useState("");
  const [sort, setSort] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isSold, setIsSold] = useState(false);
  const [fireBaseUrl, setFireBaseUrl] = useState("");

  const router = useRouter()
  const uid = router.query.uid as string;
  const [updateItem] = useUpdateItemMutation();
  const { data: { item } = {} } = useFindItemQuery({ variables: { uid: uid } });
  const [createImage] = useCreateImageMutation();
  const [image, setImage] = useState<File>()
  const [path, setPath] = useState("")

  useEffect(() => {
    if (item != null) {
      setShopUid(item.shop_uid)
      setName(item.name)
      setSort(item.sort)
      setTagUid(item.tag_uid)
      setPrice(item.price)
      setIsVisible(item.is_visible)
      setIsSold(item.is_sold)
    }
  }, [item])

  const updateHandler = () => {
    updateItem({ variables: { uid: uid, tag_uid: tagUid, name: name, sort: sort, price: price, is_sold: isSold, is_visible: isVisible, image_path: path }})
  }

  useEffect(() => {
    if (uid != "") {
      getDownloadURL(ref(storage, `items/${uid}.jpg`))
      .then(fireBaseUrl => {
        console.log(fireBaseUrl)
        setPath(fireBaseUrl);
      }).catch((e) => {
        console.log(e);
      })
    }
  }, [uid])

  const tags = Tags(shopUid)

  const getImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files) return
    const img: File = e.target.files[0]
    setImage(img)
    console.log(img)
  }

  const onSubmit = async () => {
    if (image == null) {
      console.log("ファイルが選択されていません");
    }
    const storageRef = ref(storage, `items/${uid}.jpg`);
    await uploadBytes(storageRef, image!).then((snapshot) => {
      getDownloadURL(ref(storage, `items/${uid}.jpg`))
      .then((url) => {
        setFireBaseUrl(url)
      })
      console.log("success to upload")
      window.location.reload();
    }).catch((e) => {
      console.log(e);
    });
  };

  const deleteImageHandler = async () => {
    updateItem({ variables: { uid: uid, tag_uid: tagUid, name: name, sort: sort, price: price, is_sold: isSold, is_visible: isVisible, image_path: "" }})
    const desertRef = ref(storage, `items/${uid}.jpg`);
    await deleteObject(desertRef).then(() => {
      window.location.reload();
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <div>
      <button
        onClick={() => {
          router.push(`/admin/items/shopUid/${shopUid}`);
        }}
      >
        items page
      </button>
      <p>uid: {uid}</p>
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
      <input type="checkbox" checked={isSold} onChange={(e) => setIsSold(!isSold)} />
      <label>isVisible</label>
      <input type="checkbox" checked={isVisible} onChange={(e) => setIsVisible(!isVisible)} />
      <button
        onClick={() => {
          updateHandler();
        }}
      >
        submit
      </button>

      <p>Image</p>

      <h1>画像アップロード</h1>
      <form>
        <input type="file" onChange={getImage} />
        <input type="button" value="保存" onClick={onSubmit} />
      </form>
      {path && 
        <div>
          <img width='100px' src={path} alt="uploaded" />
          <button
            onClick={() => {
              updateHandler();
            }}
          >
            apply
          </button>
          <button
            onClick={deleteImageHandler}
          >
            delete image
          </button>
          
        </div>
      }
</div>
  )
}

export default Show