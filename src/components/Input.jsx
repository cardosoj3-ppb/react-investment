export default function Input({ children, ...props }) {
  return (
    <>
      <label htmlFor=""> {children} </label>
      <input type="text" {...props} />
    </>
  );
}
