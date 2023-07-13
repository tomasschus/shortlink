"use client"
import React, { FormEvent } from 'react';
import FormButton from '../formButton/formButton';
import FormTextField from '../formTextField/formTextField';

interface formProps {
  onSubmit: Function;
}

const Form = ({ onSubmit }: formProps) => {
  const [url, setUrl] = React.useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (url) {
      onSubmit(url);
    }
  };

  const styles: {
    [key: string]: React.CSSProperties
  } = {
    button: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 20
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormTextField onChange={setUrl} value={url} />
      <div style={styles.button}>
        <FormButton disabled={!url} />
      </div>
    </form>
  );
};

export default Form;
