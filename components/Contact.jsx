import React, {useState , useRef} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const formDetails = {
    fullName: '',
    email: '',
    message: '',
}

const [form, setForm] = useState(formDetails);
const [buttonText, setButtonText] = useState('SEND MESSAGE')
const [status, setStatus] = useState({});

const formRef = useRef();
const  {NEXT_PUBLIC_SERVICE_ID,NEXT_PUBLIC_TEMPLATE_ID,NEXT_PUBLIC_PUBLIC_KEY} = process.env

const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Sending ...');
    // emailjs.sendForm(`${NEXT_PUBLIC_SERVICE_ID}`,`${NEXT_PUBLIC_TEMPLATE_ID}`, formRef.current, `${NEXT_PUBLIC_PUBLIC_KEY}`)
    emailjs.sendForm("service_k7f1hxg","template_hsrl3q5", formRef.current, "O99ECB6s8GXmCZJkr")
      .then((result) => {
          console.log(result.text);
          setStatus({ success: true, message: 'Message sent successfully'});
      }, (error) => {
          console.log(error.text);
          setStatus({ success: false, message: 'Something went wrong, Please try again later.'});

      });
      setForm(formDetails);
      setButtonText('SEND MESSAGE');
  };

const onFormUpdate = (category, value) => {
    setForm({
      ...form,
      [category]: value
    })
}


  return (
    <div className="p-2">
    <hr className="w-48 h-1 mx-auto mb-3 bg-indigo-500 border-0 rounded md:my-10 dark:bg-pink-500"></hr>
            <div>
              <h2 className="text-3xl lg:text-5xl dark:text-white text-center">
                Lets talk about everything!
              </h2>
              <div className="text-gray-700 mt-8 mb-2 dark:text-gray-300 md:text-center">
                Hate forms? Send me an <a href='mailto:mufaddalmaterwala52@gmail.com' className="underline">email</a>{" "}
                instead.
              </div>
            </div>
            <form ref={formRef} onSubmit={sendEmail} className='max-w-4xl mx-auto'>
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold dark:text-gray-300">
                Full Name
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline dark:bg-white"
                type="text"
                value={form.fullName} 
                name='fullName' 
                onChange={(e) => 
                onFormUpdate('fullName', e.target.value)} 
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold dark:text-gray-300">
                Email
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline dark:bg-white"
                type="email"
                value={form.email} 
                name='email' 
                onChange={(e) => 
                onFormUpdate('email', e.target.value)} 
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold dark:text-gray-300">
                Message
              </span>
              <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline dark:bg-white"
                value={form.message} 
                name='message' 
                onChange={(e) => 
                onFormUpdate('message', e.target.value)}
              ></textarea>
            </div>
            <div className="mt-8">
              <button type='submit' className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline dark:bg-pink-500">
                {buttonText}
              </button>
              {
                status.message && 
                  <p className={status.success === false ? "text-red-500 text-center" : "text-green-500 text-center pt-2"}>{status.message}</p>
              }
            </div>
            </form>
            
          </div>
  )
}

export default Contact