  function addMonths(elem)
{
    var annualUseKw=0, dailyUseKw=0, i=0, x=0;
    var months=document.getElementById(elem).getElementsByTagName('input');
        
    for(i=0;i<months.length;i++)
    {
        x=Number(months[i].value);
        annualUseKw += x;
    }
    dailyUseKw=annualUseKw/365;
    return dailyUseKw;
}

        
function sunHours()
{
    var hrs;
    var theZone=document.forms.solarForm.zone.selectedIndex;
    theZone +=1;
        switch(theZone)
        {
            case 1:
                hrs=6;
                break;
            case 2:
                hrs= 5.5;
                break;    
            case 3:
                hrs=5;
                break;
            case 4:
                hrs= 4.5;
                break;
            case 5:
                hrs= 4.2;
                break;
            case 6:
                hrs= 3.5;
                break;
            default:
                hrs=0;
        }
    return hrs;
}


function calculatePanel()
{    
    var userChoice =document.forms.solarForm.panel.selectedIndex;
    var panelOptions=document.forms.solarForm.panel.options;
    var power=panelOptions[userChoice].value;
    var name=panelOptions[userChoice].text;
    var x=[power,name];
    return x; 
}

function calculateSolar()
{
      var dailyUseKw=addMonths("mpc");
      //console.log(dailyUseKw);

      var sunHoursPerDay=sunHours();
      //console.log(sunHoursPerDay);

      var minKwNeeds =dailyUseKw/sunHoursPerDay;
      //console.log(minKwNeeds);

      var realKwNeeds =minKwNeeds * 1.25;
      //console.log(realKwNeeds);

      var realWattNeeds =realKwNeeds *1000;
      //console.log(realWattNeeds);

      var panelInfo=calculatePanel();
      var panelFirst=panelInfo[0];
      var panelSecond=panelInfo[1];
      //console.log(panelFirst);
      //console.log(panelSecond);

      var panelsNeeded =Math.ceil( realWattNeeds/panelFirst);
      //console.log(panelsNeeded);

      var feedback="";
      feedback += "<p> Based on your average daily use of" + Math.ceil(dailyUseKw) + "Kwh, you will also need to purchase " + panelsNeeded + panelSecond + " solar pannels.</p>";
      feedback += "<h2> Additional Details </h2>";
      feedback += "<p>Average daily comsumption of electricity :" + Math.ceil(dailyUseKw)+" per day</p>";
      feedback += "<p> Average Sunshine per day:" + sunHoursPerDay +" hours </p>";
      feedback += "<p> Watts needed per hour " +Math.round(realWattNeeds) + "watts/hours <p>";
      feedback += "<p> The panel " +panelSecond + "you generated needs " + panelFirst + "watts</p> ";
      document.getElementById('feedback').innerHTML=feedback; 
}  
