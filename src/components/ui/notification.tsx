import classes from "./notification.module.css";
import React from "react";
import ReactDOM from "react-dom";
import { NotificationType } from "@/types/notification";

const Notification: React.FC<NotificationType> = (props) => {
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications") as HTMLElement
  );
};

export default Notification;
