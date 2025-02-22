import logo from './logo.svg';
import './App.css';
import './style.css';

/**1.domaci 
 * novi react projekt
 * napraviti dark mode, ako je trenuto vrijeme od 20h - 07h da je background "dark blue"
 */
/*  PROVJERA RADI LI SVE pomocu custom time
const trialTime = new Date().setHours(15, 0, 0, 0);
const formattedTime = new Date(trialTime).toLocaleTimeString();
const hours = new Date(trialTime).getHours();
*/
const currentTime = new Date().getHours();

console.log(currentTime);

const darkMode = "darkblue";
const lightMode = "white";

let mode;
if(currentTime >= 20 || currentTime <= 7) {
  mode = darkMode;
}
else {
  mode = lightMode;
}

function homework() {
  return (
    <div className="timeDiv" style={{ background: mode}}>Trenutno vrijeme je: { currentTime } h
    <div ></div>
    </div>
  );
}

export default homework;
