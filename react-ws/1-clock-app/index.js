
var indianClock=document.querySelector("#indianClock");
var dubaiClock=document.querySelector("#dubaiClock");
var americanClock=document.querySelector("#americanClock");

var indianClockv1=document.querySelector("#indianClockv1");
var dubaiClockv1=document.querySelector("#dubaiClockv1");
var americanClockv1=document.querySelector("#americanClockv1");

function jsClock(props){
    var time=new Date().toLocaleTimeString("en-US",{timeZone:props});
    var template=`
    <div class="card">
        <div class="card-header">${props}</div>
        <div class="card-body">
            <p>${time}</p>
        </div>
    </div>
    `
    return template;
}

function reactClock(props){
    var time=new Date().toLocaleTimeString("en-US",{timeZone:props});
    var template=
    <div class="card">
        <div class="card-header bg-info">{props}</div>
        <div class="card-body">
            <p>{time}</p>
        </div>
    </div>
    return template;
}

setInterval(()=>{
    indianClock.innerHTML=jsClock('asia/kolkata');
    dubaiClock.innerHTML=jsClock('asia/dubai');
    americanClock.innerHTML=jsClock('america/new_york');

    ReactDOM.render(reactClock('asia/kolkata'),indianClockv1);
    ReactDOM.render(reactClock('asia/dubai'),dubaiClockv1);
    ReactDOM.render(reactClock('america/new_york'),americanClockv1);



},1000)

