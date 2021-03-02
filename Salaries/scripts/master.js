/*
* Developed by Johnny Trejos Barrios.
* Technology: JavaScript.
* Development Environment: VIM 8.0
* Date: 01/03/2021, Time: 18:38:11.
*
* Additional Info.
*
* Source Code Target Or Details:
*
*     [Employee Salary Calulator]
*
* Licenses: GNU GPL v3.0, Eclipse Public License 1.0, personal for non-commercial purposes.
* Developer Contact: jtrejosb@live.com
* GitHub.com/jtrejosb
*/
var weekdays=document.getElementById('weekdays')
var schedule=document.getElementById('schedule')
var hours=document.getElementById('hours')
var output=document.getElementById('output')

function calculate() {
  var wkd=weekdays.options[weekdays.selectedIndex].value
  var sch=schedule.options[schedule.selectedIndex].value
  var hrs=parseInt(hours.value)
  if(!wkd.includes('Select')&&!sch.includes('Select')&&hrs>0) {
    if(wkd.includes('Monday')) {
      if(sch==='Diurnal')
        total=hrs*7000
      else
        total=hrs*8000
    } else {
      if(sch==='Diurnal')
        total=hrs*9000
      else
        total=hrs*12000
    }
    output.innerHTML='Total to pay: $'+total
    output.style.color='green'
  } else {
    output.innerHTML='Invalid Data Entry!';
    output.style.color='pink'
  }
}
