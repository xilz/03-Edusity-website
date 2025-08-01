import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'



const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "bb9c55b8-cec6-451a-b477-d16a179df130");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        setResult("Email Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon}/></h3>
            <p>Feel free to reach out through contact form Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero sapiente doloremque veritatis aperiam quidem dolorum praesentium explicabo quia.</p>
            <ul>
                <li><img src={mail_icon} />Contact@123.com</li>
                <li><img src={phone_icon} />+86 123-456-7890</li>
                <li><img src={location_icon} />77 Massachusetts Ave, Cambridge <br/> MA 02139, United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required/>
                <label>Write your message here</label>
                <textarea name="message" id="" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact