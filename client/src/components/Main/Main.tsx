type Props = {
  children: React.ReactElement;
};
export default function Main({ children }: Props) {
  return (
    <div>
      <p> Main...</p>
      {children}
    </div>
  )
}
