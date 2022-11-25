import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const BookingModal = ({ item, setItem }) => {
  const { phone_name } = item;
  const { user } = useContext(AuthContext);
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const itemName = form.item.value;
    const rePrice = form.price.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;
    // [3, 4, 5].map((value, i) => console.log(value))
    const booking = {
      itemName,
      rePrice,
      buyerName: name,
      email,
      phone,
      location,
    };
    console.log(booking);
    setItem(null);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{phone_name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
              type="text"
              defaultValue={user.displayName}
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="item"
              type="text"
              placeholder="Item Name"
              className="input w-full input-bordered"
            />
            <input
              name="price"
              type="text"
              placeholder="Resale Price"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
