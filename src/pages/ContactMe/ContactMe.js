import React, {useState, useCallback, Fragment} from 'react'
import {useDropzone} from 'react-dropzone'
import FooterV from './Footer/Footer'
import miami from'./miami2.jpg'
import './ContactMe.scss'


function ContactMe() {
  const [name,setName] = useState('');
  const [status,setStatus] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const [file, setFile] = useState({});

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
    setFile(acceptedFiles[0])
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k])
    });
    return formData
  }

  const handleSubmit = e => {
    const data = { "form-name": "contact", name, email, message, file }
    
    fetch("/", {
      method: "POST",
      // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
      body: encode(data)
    })
      .then(() => setStatus("Thanks for the message, I will contact you!"))
      .catch(error => setStatus("Form Submission Failed!"));

    e.preventDefault();
  };

  const handleChange = e => {
    const {name, value} = e.target
    if (name === 'name' ){
      return setName(value)
    }
    if (name === 'email' ){
      return setEmail(value)
    }
    if (name === 'message' ){
      return setMessage(value)
    }
  }

  return (
      <Fragment>
          <div className="header-up">
                 <img alt="header" src={miami}/>
                 <div className="central-text">Contact Me</div>
             </div>
           
            <div className="info">
                 Get in touch with me!
            </div>

            <div className="font-figures">
                 <i class="fas fa-map-marker-alt">
                   <p>Adress</p>
                      <p className="text-p">France - Paris Malakoff</p>
                      <br></br>
                      <p className="text-p">Mexico City</p>
                  </i>
                 <div className="mailes">
                    <i class="fas fa-envelope-open">
                      <p>Email</p>
                      <p className="text-p">Jobroman83 @gmail.com</p>
                      <br/>
                      <p className="text-p">Black_maranello @hotmail.com</p>
                      </i>
                 </div>
                 <i class="fab fa-whatsapp-square">
                      <p>Phone</p>
                      <p className="text-p">+33 7 87 42 20 67 (only calls- France)</p>
                      <p className="text-p">+52 55 65 60 67 69 (WhatsApp)</p>
                   </i>

             </div> 

                  <div className="text-des">
                          <h4>If you got any question  please send me a message it is very important to me</h4>
                          <p>.</p>
                  </div>
             
    <div className="ContactMe">
    <form className="form-content" onSubmit={handleSubmit} action="/thank-you/">
          <p>
            <label>
              <input type="text" placeholder="Your Name" name="name" value={name} onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              <input type="email" placeholder="Your Email" name="email" value={email} onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
         <textarea name="message" placeholder="Your messages" value={message} onChange={handleChange} />
            </label>
          </p>
          <div {...getRootProps()}>
            <input  {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <p className="button-2"> Click here to select files</p>
            }
          </div>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        <h3>{status}</h3>
    </div>
            <div className="info">
                 Connect With me!
            </div>
    <FooterV/>
    </Fragment>
  );
}

export default ContactMe;