import React from "react";

export default function ContactLinks() {
  return (
    <ul className="list-group list-group-flush text-center">
      <li className="list-group-item"> <a href="https://www.linkedin.com/in/maria-betancourt-ramirez-06b4971b3/">LinkedIn</a> </li>
      {/* eslint-disable-next-line */}
      <li className="list-group-item"> <a href="mailto:maria.betancourt15@yahoo.com">Email</a> </li> 
      <li className="list-group-item"> <a href="../images/MariaBetancourtResume.pdf" download>My Resume</a> </li>
      <li className="list-group-item"> <a href="https://github.com/MaiaBetancourt">Github</a></li>
      {/* eslint-disable-next-line */}
      <li className="list-group-item"> <a href="#">1-702-626-6346</a></li> 
    </ul>
  );
}

