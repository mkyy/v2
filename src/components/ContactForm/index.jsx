import { useForm } from '@formspree/react';
import { Container } from './style';
import { PuffLoader } from 'react-spinners';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('moqrkkkq');

  if (state.succeeded) {
    return (
      <div className='div-sucess'>
        <h2 style={{ textAlign: 'center', color: '#ccd6f6' }}>Thank you for your message!</h2>
      </div>
    );
  }

  return (
    <Container onSubmit={handleSubmit}>
      <input id='name' type='text' name='name' placeholder='Name' />

      <input id='email' type='email' name='email' placeholder='example@email.com' />

      <textarea
        name='msg'
        id='msg'
        cols='30'
        rows='10'
        placeholder='Your friendly message here...'
      ></textarea>
      <div className='div-btn'>
        {state.submitting ? <PuffLoader color='#64FFDA' /> : <button type='submit'>Enviar</button>}
      </div>
    </Container>
  );
};
export default ContactForm;
