import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={styles.contact}>
      <div className={styles.contactInfo}>
        <div className={styles.contactDetails}>
          <FaUser className={styles.icon} />
          <span>{contact.name}</span>
        </div>
        <div className={styles.contactDetails}>
          <FaPhoneAlt className={styles.icon} />
          <span>{contact.number}</span>
        </div>
      </div>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
