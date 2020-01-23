// import React, {useState, useCallback, Fragment} from 'react'
// import {useDropzone} from 'react-dropzone'
// import FooterV from './Footer/Footer'
// import miami from'./miami2.jpg'
// import './ContactMe.scss'


// function ContactMe() {
//     const [name,setName] = useState('');
//     const [status,setStatus] = useState('');
//     const [email,setEmail] = useState('');
//     const [message,setMessage] = useState('');
//     const [file, setFile] = useState({});

//     const onDrop = useCallback(acceptedFiles => {
//         console.log(acceptedFiles)
//         setFile(acceptedFiles[0])
//     },[])

//     const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

//     const encode = (data) => { 
//         const formData = new FormData();
//         Object.keys(data).forEach((k)=> {
//             formData.append(k,data[k])
//         });
//         return formData
//     }

//     const handleSubmit = e => {
//         const data = { "form-name": "contact", name, email, message, file}
        
//         fetch('/',{
//             method:"POST",
//             body: encode(data)
//         })

//         .then(()=> setStatus("Gracias por tu mensaje"))
//         .catch( error => setStatus("no se ha enviado tu mensaje"));
//         e.preventDefault();
   
//     };
//         const handleChange = e => { 
//             const {name, value} = e.target
//             if (name === "name") {
//                 return setName(value)
//             }
//             if (name === "email"){
//                 return setEmail(value)
//             }
//             if (name === "message"){
//                 return setMessage(value)
//             }

//         }

 //       return(
//             <Fragment>
//             <div className="header-up">
//                 <img alt="header" src={miami}/>
//                 <div className="central-text">Contact Me</div>
//             </div>
           
//            <div className="info">
//                 Get in touch with me!
//            </div>

//            <div className="font-figures">
//                 <i class="fas fa-map-pin">Adress</i>
//                 <i classname='mailes' class="far fa-envelope-open">Email</i>
//                 <i class="fab fa-whatsapp">Phone</i>

//             </div> 
            


//             <div className="ContactMe">
                
//             {/* <div className="Contact-me-logo">
//                 <h3> Contact Me</h3>
//                     <NavLink exact to ="/home">
//                         <img alt="logo"  src={Logo}/>
//                     </NavLink>
//                 </div> */}
                
//                 <form className="form-content" onSubmit={handleSubmit} action="/thank-you/">
//                     <p>
//                         <label>
//                            <input placeholder="Your name:" type="text" name="name" value={name} onChange={handleChange}/>
//                         </label>
//                     </p>
//                     <p>
//                         <label>
//                            <input  placeholder="Your Email:" type="email" name="email" value={email} onChange={handleChange}/>
//                         </label>
//                     </p>
//                     <p>
//                         <label>
//                           <textarea placeholder="Message:" name="message" value={message} onChange={handleChange}/>
//                         </label> 
//                     </p>
//                         <div {...getRootProps()}>
//                         <input {...getInputProps()}/>
//                         {
//                             isDragActive ? 
//                             <p> Click here if you want add a File..</p> :
//                             <p className="files" > Click here for add a Photo</p>

//                         }
//                         </div>
//                         <p>
//                             <button type="submit">Send it!</button>
//                         </p>
//                 </form>
//                 <h3>{status}</h3>         
//             </div>
//             <div className="spacer">
                
//             </div>
//             <FooterV></FooterV>
                      
// </Fragment>

import React, {useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone'


function App() {
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
      .then(() => setStatus("Form Submission Successful!!"))
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
    <div className="App">
    <form onSubmit={handleSubmit} action="/thank-you/">
          <p>
            <label>
              Your Name: <input type="text" name="name" value={name} onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" value={email} onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" value={message} onChange={handleChange} />
            </label>
          </p>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
          </div>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        <h3>{status}</h3>
    </div>
  );
}

export default App;