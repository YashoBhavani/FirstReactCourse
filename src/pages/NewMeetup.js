import { useNavigate } from "react-router-dom";


import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
    const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    console.log(meetupData);
    fetch('http://localhost:8080/addData', 
    {
      method: 'POST'  ,
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      },
    }
).then(() => {
    navigate('/');
  }).catch(error => {
    console.log('Error:',error);
  });
  console.log(meetupData);
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
