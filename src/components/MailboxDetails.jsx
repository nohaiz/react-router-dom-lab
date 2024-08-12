import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxList }) => {

  const { mailboxId } = useParams();

  const mail = mailboxList.find((mail) => {
    return mail.id === Number(mailboxId);
  });


  return (
    <>
      <h1>Mailbox {mail.id}</h1>
      <h3>Details:</h3>
      <p>Boxholder: {mail.boxholder}</p>
      <p>Box size: {mail.boxSize}</p>
    </>
  );
};
export default MailboxDetails;
