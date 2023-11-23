"use client"
import Button from "../button/Button";

export default function Nav (){
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex justify-between gap-8">
        <li>
          <Button link="/" text="ConnectInk!"  />
        </li>
        <li>
          
          <Button link="/about" text="About" />
        </li>
        <li>
          
          <Button link="/explore" text="Explore" />
        </li>
        <li>
          <Button link="/tattoregform" text="Account" />
        </li>
      </ul>
    </nav>
  );
}