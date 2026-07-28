export default function Register() {
  return (
    <>
    <div>
      <h1>Register Page</h1>
    </div>
    <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>
      </form>
    </>
  );
}
