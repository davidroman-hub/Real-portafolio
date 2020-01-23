import React, {useState, useCallback, Fragment} from 'react'
import {useDropzone} from 'react-dropzone'
import FooterV from './Footer/Footer'
import Logo from './logo.png'
import angel from './miami.jpg'
import './ContactMe.scss'
import { NavLink } from 'react-router-dom'

function ContactMe() {
    const [name,setName] = useState('');
    const [status,setStatus] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [file, setFile] = useState({});

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
        setFile(acceptedFiles[0])
    },[])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const encode = (data) => { 
        const formData = new FormData();
        Object.keys(data).forEach((k)=> {
            formData.append(k,data[k])
        });
        return formData
    }

    const handleSubmit = e => {
        const data = { "form-name": "contact", name, email, message, file}
        
        fetch('/',{
            method:"POST",
            body: encode(data)
        })

        .then(()=> setStatus("Gracias por tu mensaje"))
        .catch( error => setStatus("no se ha enviado tu mensaje"))
        e.preventDefault();
   
    };
        const handleChange = e => { 
            const {name, value} = e.target
            if (name === "name") {
                return setName(value)
            }
            if (name === "email"){
                return setEmail(value)
            }
            if (name === "message"){
                return setMessage(value)
            }

        }

        return(
            <Fragment>
            <div className="header-up">
                <img alt="header" src={angel}/>
                <div className="central-text">Contact Me</div>
            </div>
           
            <div className="ContactMe">
                <h3> Contact me </h3>
            {/* <div className="Contact-me-logo">
                <h3> Contact Me</h3>
                    <NavLink exact to ="/home">
                        <img alt="logo"  src={Logo}/>
                    </NavLink>
                </div> */}
                
                <form className="form-content" onSubmit={handleSubmit} action="/thank-you/">
                    <p>
                        <label>
                            Your Name: <input type="text" name="name" value={name} onChange={handleChange}/>
                        </label>
                    </p>
                    <p>
                        <label>
                            Your Email: <input type="email" name="email" value={email} onChange={handleChange}/>
                        </label>
                    </p>
                    <p>
                        <label>
                            Message : <textarea name="message" value={message} onChange={handleChange}/>
                        </label> 
                    </p>
                        <div {...getRootProps()}>
                        <input {...getInputProps()}/>
                        {
                            isDragActive ? 
                            <p> Click hereif you want add a File..</p> :
                            <p className="files" > Click here for add a Photo</p>

                        }
                        </div>
                        <p>
                            <button type="submit">Send it!</button>
                        </p>
                </form>
                <h3>{status}</h3>         
            </div>
            <div className="spacer">
                
            </div>
            <FooterV></FooterV>
                      
</Fragment>
        );

}


export default ContactMe
