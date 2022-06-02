const referenceMonth = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
const weekDays = ['Sun','Mon','Tues','Weds','Thurs','Fri','Sat','Sun'];


const reminder = document.querySelector('.format-time');
const countDown = document.querySelectorAll('.box-display');
const days = document.querySelector('.Day');
const hours = document.querySelector('.Hour');
const min = document.querySelector('.Min');
const sec = document.querySelector('.Sec');
const end  = document.querySelector('.line-container');




const giveAwayDate = new Date(2022, 05 , 7 , 4 , 30 , 40);
const giveAwayDay = weekDays[giveAwayDate.getDay()];
const year = giveAwayDate.getFullYear();
const month = referenceMonth[giveAwayDate.getMonth()];
const hour = giveAwayDate.getHours();
const minutes = giveAwayDate.getMinutes();
const seconds = giveAwayDate.getSeconds();
const date = giveAwayDate.getDate();

reminder.innerHTML = `<h4>Giveaway ends on ${giveAwayDay} the ${date}th of ${month},${year} by ${hour}: ${minutes}  </h4>`

function formatDate(){
    if(date == 1){
        reminder.innerHTML = `<h4>Giveaway ends on ${giveAwayDay} the  ${date}st of ${month},${year} by ${hour}: ${minutes}  </h4>`

    }
    else if(date == 2){
        reminder.innerHTML = `<h4>Giveaway ends on ${giveAwayDay} the  ${date}st of ${month},${year} by ${hour}: ${minutes}  </h4>`
    }
}
formatDate();

function getRemainingTime(){
    const currentDate = new Date().getTime()
    const remainingTime = giveAwayDate - currentDate;

    let newDay = Math.floor(remainingTime/ 86400000 );
    let newHour = Math.floor((remainingTime % 86400000)/3600000);
    let newMin = Math.floor((remainingTime % 3600000)/60000);
    let newSec= Math.floor((remainingTime % 60000)/1000);

    days.textContent = newDay;
    hours.textContent = newHour;
    min.textContent = newMin;
    sec.textContent = newSec;

    if(remainingTime < 0){
        clearInterval(sessionEnd);
        end.innerHTML = `<h4>Sorry the giveaway has ended. Contact us for more Information</h4>`
        
        
        }



    
}

let sessionEnd = setInterval(getRemainingTime , 1000);

getRemainingTime();


 





