import { useState } from "react";
import "./App.css";

export default function App() {

  //TODO: Add your state fields here

  const [formState, setFormState] = useState([])

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '', 
    email: ''
  })

  const handleChange = (event) => {
    const {name, value} = event.target

    setFormData({
      ...formData,
      [name]: value
    })
    console.log(formData)
  }

  const handleSubmit = () => {
    setFormState({
      ...formState, 
      formData
    })
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" value={formData.value} onChange={(event) => handleChange(event)} required />
          </label>
          <label>
            Address
            <input type="text" name="address" value={formData.value} onChange={(event) => handleChange(event)}/>
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" value={formData.value} onChange={(event) => handleChange(event)}/>
          </label>

          <label>
            Email
            <input type="email" name="email" value={formData.value} onChange={(event) => handleChange(event)}/>
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" />
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" />
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" />
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
