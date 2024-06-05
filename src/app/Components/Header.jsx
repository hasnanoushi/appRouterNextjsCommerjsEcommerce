


import Link from "next/link";
import './header.css';
import Image from "next/image";
export default function Header(){return(


<nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src={"has.jpeg"}height={80}width={140}></img></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
        <Link className="nav-link txt"href={"/Homepage"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link txt" href={"/contactus"}>Contactus</Link>
          </li>
          <li className="nav-item txt">
          <Link className="nav-link txt" href={"/products"}>Products</Link></li>
          <li className="nav-item ">
          <Link className="nav-link txt" href={"/aboutus"}>Aboutus</Link></li>
          <li className="nav-item dropdown">
          <Link className="nav-link txt" href={"/cart"}><img src={"cartlog.png"}height={40}width={40}></img></Link></li>

        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success txt" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>)}