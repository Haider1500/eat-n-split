import { useState } from "react";
import "./App.css";

function App() {
  const [selectedFriend, setSelectedFriend] = useState<any>();

  return (
    <div className="flex py-12 gap-20 justify-center	h-screen">
      <FriendsListMenu
        setSelectedFriend={setSelectedFriend}
        selectedFriend={selectedFriend}
      />
      <BillSplitMenu selectedFriend={selectedFriend} />
    </div>
  );
}

export default App;

function FriendsListMenu({ setSelectedFriend, selectedFriend }: any) {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [friendList, setFriendList] = useState([
    { name: "Ali", imgUrl: "../public/avatar.png", id: Date.now() },
    { name: "Misam", imgUrl: "../public/vite.svg", id: Date.now() },
  ]);
  function handleAddNewFriend(newFriendData: any) {
    console.log(newFriendData, "================inside FriendsListMenu");
    setFriendList([...friendList, newFriendData]);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <FriendList
        setSelectedFriend={setSelectedFriend}
        selectedFriend={selectedFriend}
        onInputBoxOpen={() => setIsInputOpen(true)}
        friendList={friendList}
      />
      {isInputOpen && (
        <AddFriendInput
          onInputBoxClose={() => setIsInputOpen(false)}
          onAddNewFriend={handleAddNewFriend}
        />
      )}
    </div>
  );
}

function FriendList({
  setSelectedFriend,
  selectedFriend,
  onInputBoxOpen,
  friendList,
}: any) {
  console.log(selectedFriend, "========selected Friend");

  return (
    <div className="flex w-96 h-fit flex-col gap-6">
      <div className="">
        {friendList.map((friend: any) => (
          <div className="flex w-full justify-between items-center my-2">
            <div className="flex gap-6">
              <img
                src={friend.imgUrl}
                alt="img"
                className="object-contain w-12"
              />
              <div className="">
                <h2>{friend.name}</h2>
                <p>You owe 10$</p>
              </div>
            </div>
            <Button onClick={() => setSelectedFriend(friend.name)}>
              Select
            </Button>
          </div>
        ))}
      </div>
      <Button style={"self-end"} onClick={onInputBoxOpen}>
        Add Friend
      </Button>
    </div>
  );
}

function AddFriendInput({ onInputBoxClose, onAddNewFriend }: any) {
  const [newFriend, setNewFriend] = useState({ name: "", imgUrl: "" });

  function handleNewFriend(e: any) {
    const { name, value } = e.target;
    const updateFriend = { ...newFriend, [name]: value };
    setNewFriend(updateFriend);
    console.log(updateFriend);
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <form className="grid grid-cols-[100px,1fr] max-w-sm  bg-yellow-100 pb-4 pt-10 px-10 gap-6">
        <label htmlFor="input1" className="">
          Friend name
        </label>
        <input
          type="text"
          id="input1"
          className="w-40"
          name={"name"}
          value={newFriend.name}
          onChange={handleNewFriend}
        />
        <label htmlFor="input2">Image Url</label>
        <input
          type="text"
          id="input2"
          className="w-40"
          name={"imgUrl"}
          value={newFriend.imgUrl}
          onChange={handleNewFriend}
        />
        <div className="col-span-2 flex justify-center border-2">
          <Button
            onClick={(e: any) => {
              e.preventDefault();
              onAddNewFriend(newFriend);
              setNewFriend({ name: "", imgUrl: "" });
            }}
          >
            Add
          </Button>
        </div>
      </form>
      <Button style={"self-end"} onClick={onInputBoxClose}>
        close
      </Button>
    </div>
  );
}

function BillSplitMenu({ selectedFriend }: any) {
  return (
    <form className="grid grid-cols-[180px,1fr] bg-yellow-100 gap-6  p-10 h-96 max-w-lg  ">
      <h2 className="col-span-2 text-center">
        Split a bill with {selectedFriend}
      </h2>
      <label htmlFor="" className="">
        Bill Value
      </label>
      <input type="number" onChange={""} />
      <label htmlFor="">Your expense</label>
      <input type="number" onChange={""} />
      <label htmlFor="">{selectedFriend}'s expense</label>
      <input type="number" onChange={""} />
      <span>Who is paying the bill</span>
      <select name="" id="" className="w-24">
        <option value="">You</option>
        <option value="">{selectedFriend}</option>
      </select>
      <div className="col-span-2 flex items-center justify-center">
        <Button>Split bill</Button>
      </div>
    </form>
  );
}

function Button({ children, style, onClick }: any) {
  return (
    <button
      className={`w-fit px-2 rounded-md h-fit bg-yellow-600 text-white ${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
