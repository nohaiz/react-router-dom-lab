import { Link } from "react-router-dom";

const MailboxList = ({ mailboxList }) => {
  return (
    <>
      <h1>Mailbox List</h1>
      {mailboxList.length === 0 ? <h2>Nothing</h2> : null}
      <ul>
        {mailboxList.map((mailbox, index) => (
          <li key={index}>
            <Link to={`/mailboxes/${mailbox.id}`}>Mailbox {mailbox.id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MailboxList;
