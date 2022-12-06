import React, { useState, useRef } from 'react';

const Form = () => {
 /* const formRef = useRef(null);
const [loading, setLoading] = useState(false);
const scriptUrl =
  'https://script.google.com/macros/s/AKfycbyEQBpn38uebxtH7VTQBMzyax_gkY1Y6yPvazNqxpbhzkHRgqOHD9aS_nY5TPXTTKzR/exec';

const handleSubmit = (e) => {
  e.preventDefault();

  fetch(scriptUrl, { method: 'POST', body: new FormData(formRef.current) })
    .then((res) => {
      console.log('SUCCESSFULLY SUBMITTED');
    })
    .catch((err) => console.log(err));
};*/
const [data, setData] = useState({
  name: '',
  date: '',
  evnType: '',
  guest: '',
  theme: '',
  location: '',
});
const { name, date, evnType, guest, theme, location } = data;

const handleChange = (e) =>
  setData({ ...data, [e.target.name]: e.target.value });
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await fetch(
      'https://v1.nocodeapi.com/officialtk/google_sheets/rnxawtmSUnpUGpiy?tabId=<Sheet1>',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([[name, data, evnType, guest, theme, location]]),
      }
    );
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-style'>
          <label htmlFor='title'>Host Name</label>
          <input
            type='host'
            name='Host'
            placeholder='Host Name *'
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className='form-style'>
          <label htmlFor='date'>Event Date</label>
          <input
            type='date'
            name='date'
            id='date'
            value={date}
            onChange={handleChange}
          />
        </div>
        <div className='form-style'>
          <label htmlFor='Event Type'>Choose an Event:</label>
          <select
            id='EventID'
            name='Evntype'
            value={evnType}
            onChange={handleChange}
          >
            <option value='Meeting'>Meeting</option>
            <option value='Celebration'>Celebration</option>
          </select>
        </div>
        <div className='form-style'>
          <label htmlFor='guests'>Number Of Guests</label>
          <input
            type='text'
            name='guests'
            id='guests'
            value={guest}
            onChange={handleChange}
          />
        </div>
        <div className='form-style'>
          <label htmlFor='theme'>Theme</label>
          <input
            type='text'
            name='theme'
            id='theme'
            value={theme}
            onChange={handleChange}
          />
        </div>
        <div className='form-style'>
          <label htmlFor='location'>Location</label>
          <input
            type='text'
            name='location'
            id='location'
            value={location}
            onChange={handleChange}
          />
        </div>

        <div className='form-style'>
          <input
            type='submit'
            name='submit'
            
          />
        </div>
      </form>
    </div>
  );
};

export default Form;



  