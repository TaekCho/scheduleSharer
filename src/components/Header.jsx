import logo from "../assets/우리둘다운타운.jpg";

export default function Header({ children }) {
  return (
    <header className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 font-extrabold flex">
      <img className="h-12 w-12 rounded-full" src={logo}></img>
      <div className="content-center w-full text-2xl p-2">{children}</div>
    </header>
  );
}
