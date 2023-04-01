import Avatar from "./Avatar.jsx";

export default function Contact({ id, email, online, onClick, selected }) {
  const emailParts =
    email && typeof email === "string" ? email.split("@") : [""];

  return (
    <div
      key={id}
      onClick={() => onClick(id)}
      className={
        "border-b pb-2 border-cyan-500 flex items-center gap-3 cursor-pointer" +
        (selected ? "bg-cyan-500 " : "bg-cyan-900")
      }
    >
      {selected && <div className="w-1 bg-blue-500 h-12 rounded-r-md "></div>}
      <div className=" flex gap-2 py-2 items-center">

        
        <Avatar userId={id} email={email} online={online} />


        <span className="bold">{emailParts[0]}</span>
      </div>
    </div>
  );
}
