import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Newsletter.css';

export default function Newsletter() {

  const postUrl = `https://sydneysisco.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div className="newsletter">
      <MailchimpSubscribe 
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </div>
  );
}

const CustomForm = ({ status, message, onValidated }) => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const submit = () =>
    email &&
    name &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email,
      NAME: name,
    });

  return (
    <Stack spacing={2}>
      <h3 className='signup-heading'>Newsletter Signup</h3>
      {!status && <div>&nbsp;</div>}
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <TextField label="Name" variant="outlined" type="text" value={name} onChange={e => setName(e.target.value)}/>
      <TextField label="Email" variant="outlined" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <Button variant="contained" onClick={submit} sx={{
        backgroundColor: '#5c6060',
      }}>
        Sign up
      </Button>
    </Stack>
  );
};
