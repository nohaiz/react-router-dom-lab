import NavBar from "./components/NavBar";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";
import { Route, Routes } from 'react-router-dom';
import { useState } from "react";

const App = () => {
  const [mailboxList, setMailboxList] = useState([]);

  const getFormData = (formData)=> {
    setMailboxList([...mailboxList, formData])
  }
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>}/>
        <Route path='/mailboxes' element={<MailboxList mailboxList={mailboxList} />}/>
        <Route path='/new-mailbox' element={<MailboxForm mailboxList={mailboxList} getFormData={getFormData}/>}/>
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxList={mailboxList}/>} />
      </Routes>
    </>
)};

export default App;
