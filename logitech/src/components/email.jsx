import emailjs from "@emailjs/browser";
function myfirstemail(props){
const templateParams = {
  to_name: 'Mohit',
  from_name: props.firstname+" "+props.to_email,
  subject: props.subject,
  message: props.message
};

emailjs.send('service_qm2v6si', 'template_8lmanux', templateParams, 'DPONrl_vSwsH8euCs')
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
  }, (err) => {
    console.log('FAILED...', err);
  });
};
export default myfirstemail;
  