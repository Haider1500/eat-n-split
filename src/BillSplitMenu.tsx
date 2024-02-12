import { useState } from "react";
import { Button } from "./Button";

export function BillSplitMenu({ selectedFriend, onBillSplit }: any) {
  const [bill, setBill] = useState<any>("");
  const [paidByUser, setPaidByUser] = useState<any>("");
  const paidByFriend = bill - paidByUser;
  const [whoPayBill, setWhoPayBill] = useState("user");

  function handleFormSubmit(e: any) {
    e.preventDefault();
    if (!bill || !paidByUser) {
      return;
    }
    const value = whoPayBill == "user" ? paidByFriend : -paidByUser;
    onBillSplit(value);
  }

  return (
    <form
      className="grid grid-cols-[180px,1fr] bg-yellow-200 gap-6  p-10 h-96 max-w-lg"
      onSubmit={handleFormSubmit}
    >
      <h2 className="col-span-2 text-center">
        Split a bill with {selectedFriend.name}
      </h2>
      <label htmlFor="" className="">
        Bill Value
      </label>
      <input
        type="number"
        name="bill"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label htmlFor="">Your expense</label>
      <input
        type="number"
        name="user"
        value={paidByUser}
        onChange={(e) => {
          console.log(Number(e.target.value));
          Number(e.target.value) > bill
            ? paidByUser
            : setPaidByUser(Number(e.target.value));
        }}
      />
      <label htmlFor="">{selectedFriend.name}'s expense</label>
      {/* <input type="number" disabled name="friendBill" /> */}
      <span className="flex justify-center opacity-50 w-16 rounded-lg border-2 border-yellow-600 bg-yellow-600">
        {bill || paidByUser ? paidByFriend : ""}
      </span>
      <span>Who is paying the bill</span>
      <select
        name=""
        id={""}
        className="w-fit"
        value={whoPayBill}
        onChange={(e) => setWhoPayBill(e.target.value)}
      >
        <option value="user">You</option>
        <option>{selectedFriend.name}</option>
      </select>
      <div className="col-span-2 flex items-center justify-center">
        <Button>Split bill</Button>
      </div>
    </form>
  );
}
