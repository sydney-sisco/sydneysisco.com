import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './Newsletter.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


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
    <ThemeProvider theme={darkTheme}>
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
        <TextField color="secondary" label="Name" variant="outlined" type="text" value={name} onChange={e => setName(e.target.value)}/>
        <TextField color="secondary" label="Email" variant="outlined" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        {/* <ThemeProvider theme={theme}> */}
          <Button
            variant="contained"
            onClick={submit}
            color="secondary"
          >
            Sign up
          </Button>
        {/* </ThemeProvider> */}
      </Stack>
    </ThemeProvider>
  );
};
