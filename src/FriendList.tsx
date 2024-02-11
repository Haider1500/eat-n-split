import { Button } from "./Button";

export function FriendList({
  friendList,
  selectedFriend,
  onSelectFriend,
}: any) {
  return (
    <div className="flex w-96 h-fit flex-col gap-6">
      <div className="">
        {friendList.map((friend: any) => (
          <Friend
            friend={friend}
            selectedFriend={selectedFriend}
            onSelectFriend={onSelectFriend}
          />
        ))}
      </div>
    </div>
  );
}

function Friend({ friend, selectedFriend, onSelectFriend }: any) {
  const istrue = friend.id == selectedFriend?.id;
  return (
    <div
      className={`flex w-full justify-between items-center my-2 ${
        istrue && "bg-amber-100"
      } px-4`}
    >
      <div className="flex gap-6">
        <img
          src={friend.imgUrl}
          alt="img"
          className={`object-contain w-12 rounded-full ${
            friend.balance == 0 && "opacity-40"
          }`}
        />
        <div className="">
          <h2>{friend.name}</h2>
          {friend.balance < 0 && (
            <p className="text-red-500">
              You owe {friend.name} {Math.abs(friend.balance)}$
            </p>
          )}
          {friend.balance > 0 && (
            <p className="text-green-500">
              {friend.name} owes you {friend.balance}$
            </p>
          )}
          {friend.balance == 0 && (
            <p className="">You and {friend.name} are even</p>
          )}
        </div>
      </div>
      <Button onClick={() => onSelectFriend(friend)}>
        {istrue ? "close" : "select"}
      </Button>
    </div>
  );
}
