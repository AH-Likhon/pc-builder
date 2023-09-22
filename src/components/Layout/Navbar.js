import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-base-200 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content ml-[-8px] z-[1] p-4 shadow bg-base-100 w-screen font-semibold text-base"
          >
            {session?.user ? (
              <>
                <li>
                  <p>{session?.user.name}</p>
                </li>
                <li>
                  <button onClick={() => signOut()}>Sign Out</button>
                </li>
              </>
            ) : (
              <li>
                <Link href="/login">Login</Link>
              </li>
            )}

            <li>
              <Link href="/pc-builder">PC Builder</Link>
            </li>

            <li className="z-10">
              <a>Categories</a>
              <ul>
                <li>
                  <Link href="/cpu-processor">CPU/Processor</Link>
                </li>
                <li>
                  <a>Motherboard</a>
                </li>
                <li>
                  <a>RAM</a>
                </li>
                <li>
                  <a>Power Supply Unit</a>
                </li>
                <li>
                  <a>Storage Device</a>
                </li>
                <li>
                  <a>Monitor</a>
                </li>
                <li>
                  <a>Others</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <Link href="/">
          <button className="btn btn-ghost normal-case text-xl">
            PC Builder
          </button>
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal lg:flex justify-between items-center text-lg font-semibold">
          {session?.user ? (
            <>
              <li>
                <p>{session?.user.name}</p>
              </li>
              <li>
                <button onClick={() => signOut()}>Sign Out</button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}

          <li>
            <Link href="/pc-builder">PC Builder</Link>
          </li>

          <li className="z-10" tabIndex={0}>
            <details>
              <summary>Categories</summary>
              <ul className="p-4 w-[221px] left-[-70px] rounded-none">
                <li>
                  <Link href="/cpu-processor">CPU/Processor</Link>
                </li>
                <li>
                  <Link href="/motherboard">Motherboard</Link>
                </li>
                <li>
                  <Link href="/ram">RAM</Link>
                </li>
                <li>
                  <Link href="/power-supply">Power Supply Unit</Link>
                </li>
                <li>
                  <Link href="/storage">Storage Device</Link>
                </li>
                <li>
                  <Link href="/monitor">Monitor</Link>
                </li>
                <li>
                  <Link href="/others">Others</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
