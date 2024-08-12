import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({ mailboxList, getFormData }) => {
  const [formData, setFormData] = useState({
    id: mailboxList.length + 1,
    boxSize: "Small",
    boxholder: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (formData.boxholder) {
      getFormData(formData);
      setFormData({
        id: mailboxList.length + 1,
        boxSize: "Small",
        boxholder: "",
      });
      navigate("/mailboxes");
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <>
      <h1>New Mailbox</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="boxholder">Enter a Boxholder</label>
        <input
          type="text"
          name="boxholder"
          id="boxholder"
          value={formData.boxholder}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          name="boxSize"
          id="boxSize"
          value={formData.boxSize}
          onChange={handleOnChange}
          required
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MailboxForm;
