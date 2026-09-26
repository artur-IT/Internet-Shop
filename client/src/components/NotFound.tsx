import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function NotFound() {
  const navigate = useNavigate();
  const message = useRef<HTMLParagraphElement>(null)

  let count = 5
  const timer = setInterval(() => {
    if (count >= 0) {
      if (message.current) {
        message.current.textContent = `${count}`;
      }
      count--
    } else {
      clearInterval(timer)
      navigate("/");
    }
  }, 1000)


  return (
    <div>
      <h1>Ups, nie ma tu żadnej strony!</h1>
      <div>Wracamy na stronę główną za <span ref={message}></span> sekund.</div>
    </div>
  );
}

