import "./App.css";
import { BillSplitMenu } from "./BillSplitMenu";
import { useState } from "react";
import { AddFriendInput } from "./AddFriendInput";
import { FriendList } from "./FriendList";
import { Button } from "./Button";

const initialValue = [
  {
    name: "Ali",
    imgUrl: "https://i.pravatar.cc/48?=1233",
    balance: 10,
    id: 534264,
  },
  {
    name: "Misam",
    imgUrl: "https://i.pravatar.cc/48?=123",
    balance: -7,
    id: 435983,
  },
];

function App() {
  const [friendList, setFriendList] = useState(initialValue);
  const [isInputBoxOpen, setIsInputBoxOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<any>(null);

  function handleAddFriend(friend: any) {
    console.log(friend);
    setFriendList((friendList) => [...friendList, friend]);
    setIsInputBoxOpen(false);
  }

  function handleSelectedFriend(friend: any) {
    console.log(friend);
    setSelectedFriend(friend);
    if (friend.id === selectedFriend?.id) {
      setSelectedFriend(null);
    }
    setIsInputBoxOpen(false);
  }

  function handleBillSplit(value: number) {
    console.log(value, "========value");
    const updatedList = friendList.map((friend: any) => {
      if (friend.id == selectedFriend.id) {
        console.log(friend, "=======friend");
        console.log(friend.balance, "=======friendBalance");
        return { ...friend, balance: friend.balance + value };
      }
      return friend;
    });
    setFriendList(updatedList);
    setSelectedFriend(null);
  }
  return (
    <div className="flex py-12 px-40 gap-20	h-screen">
      <div className="flex gap-10 ">
        <div className="flex flex-col  gap-6">
          <FriendList
            friendList={friendList}
            selectedFriend={selectedFriend}
            onSelectFriend={handleSelectedFriend}
          />

          {isInputBoxOpen && <AddFriendInput onAddFriend={handleAddFriend} />}
          <Button
            style={"self-end"}
            onClick={() => setIsInputBoxOpen(!isInputBoxOpen)}
          >
            {isInputBoxOpen ? "close" : "Add friend"}
          </Button>
        </div>

        {selectedFriend && (
          <BillSplitMenu
            selectedFriend={selectedFriend}
            onBillSplit={handleBillSplit}
          />
        )}
      </div>
    </div>
  );
}

export default App;
