import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const BookingModal = ({ item, setItem }) => {
  const { phone_name, resale_price, picture } = item;
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
      picture,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setItem(null);
          toast.success("Booking confirmed");
          // refetch();
        } else {
          toast.error(data.message);
        }
      });
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
              disabled
              defaultValue={user?.displayName}
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              disabled
              defaultValue={user?.email}
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
              disabled
              defaultValue={phone_name}
              className="input w-full input-bordered"
            />
            <input
              name="price"
              type="text"
              disabled
              defaultValue={resale_price}
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
