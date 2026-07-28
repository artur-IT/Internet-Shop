import {  useNavigate } from "react-router-dom";
import {  useState } from "react";

export default function NotFound() {

  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
const countdownInterval = setInterval(() => {
  if (countdown > 0) {
    setCountdown(countdown - 1);
  } else {
    clearInterval(countdownInterval);
    navigate("/");
  }
}, 1000);

  return (
    <div>
      <h1>Ups, nie ma tu żadnej strony!</h1>
      <p>Wracamy na stronę główną za {countdown} sekund...</p>
    </div>
  );
}
