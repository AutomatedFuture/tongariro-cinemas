/*
Author: AutomatedFuture@github
*/

// Generic "not found"/error page

import {useNavigate} from "react-router-dom";

function Eror404() {
  const navigate = useNavigate();

  return (
    <main>
      <div class="Error404">
        <p>Oops! Looks like this page does not exist or is currently in development.</p>
        <button onClick={() => navigate(-1)} className="goback">Go Back</button>
      </div>
    </main>

  );
}

export default Eror404;