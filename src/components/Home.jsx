import React from 'React';

function Home () {
  const date = new Date()
  const yyyy =  date.getFullYear()
  const mm = ("0"+(date.getMonth()+1)).slice(-2)
  const dd = ("0"+date.getDate()).slice(-2)
  const getdate = dd+'-'+mm+'-'+yyyy
  const hours = date.getHours()
  let timeOfDay
    if (hours < 12){
      timeOfDay = "Morning"
    } else if (hours >=12 && hours < 17){
      timeOfDay = "Afternoon"
    }else {
      timeOfDay = "Evening"
    }

  return(
      <div>
      <h3>Welcome My React works, click on the links above to see more!</h3>
      <h4> To day is : {`${getdate}`}, Good {`${timeOfDay}`} !!!</h4>
      </div>

    )
}

export default Home
