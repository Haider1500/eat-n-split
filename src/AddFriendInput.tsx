import { useState } from "react";
import { Button } from "./Button";

export function AddFriendInput({ onAddFriend }: any) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleNewFriend(e: any) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const friendData = {
      name: name,
      imgUrl: `${image}?=${id}`,
      id: id,
      balance: 0,
    };
    if (!name || !image) {
      return;
    }
    onAddFriend(friendData);
    console.log(friendData);
  }

  return (
    <form
      className="grid grid-cols-[100px,1fr] max-w-sm  bg-yellow-100 pb-4 pt-10 px-10 gap-6"
      onSubmit={handleNewFriend}
    >
      <label htmlFor="input1" className="">
        Friend name
      </label>
      <input
        type="text"
        id="input1"
        className="w-48 text-sm"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="input2">Image Url</label>
      <input
        type="text"
        id="input2"
        className="w-48 text-sm"
        name={"imgUrl"}
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <div className="col-span-2 flex justify-center">
        <Button>Add</Button>
      </div>
    </form>
  );
}
