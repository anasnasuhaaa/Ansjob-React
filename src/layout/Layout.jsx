export default function Layout(props) {
  return <div className="md:px-8 grid sm:grid-cols-2 md:grid-cols-3 gap-5 px-5 py-5">{props.children}</div>;
}
