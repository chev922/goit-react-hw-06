import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

export default function Contact({ item }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(deleteContact({ id: item.id }));
  }
  return (
    <div className={css.container}>
      <h3>
        <IoPerson /> {item.name}
      </h3>
      <p>
        <BsFillTelephoneFill />
        {item.number}
      </p>
      <button className={css.btn} onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}
