import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image";

export const Header: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1 pl-5 text-xl font-bold">
        {sessionData?.user?.name ? `Notes: ${sessionData?.user?.name}` : "Welcome to T3 Notetaker"}
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown-end dropdown">
          {sessionData?.user ? (
            <label tabIndex={0} className="btn btn-ghost btn-sm rounded-btn">
              <div className="w-10 rounded-full">
                <img src={sessionData?.user?.image || undefined} alt={sessionData?.user?.name || "username"}
                />
              </div>
            </label>
          ) : <button className="btn btn-ghost btn-sm rounded-btn" onClick={() => void signIn()}>Login</button>}
          {sessionData?.user && (
            <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
              <li className="flex">
                <button className="btn btn-ghost btn-sm rounded-btn" onClick={() => void signOut()}>Logout</button>
              </li>
            </ul>
          )}

        </div>
      </div>
    </div>
  )
}
