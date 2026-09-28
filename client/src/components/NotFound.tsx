import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function NotFound({ info }: { info: string }) {
  const navigate = useNavigate();
  const message = useRef<HTMLParagraphElement>(null)

  let count = 15
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
      <h2>Ups, coś poszło nie tak!</h2>
      <p>{info}</p>
      <div>Wracamy na stronę główną za <span ref={message}>{count}</span> sekund.</div>
    </div>
  );
}

