import React from "react";
import { Link } from "react-router-dom";

import CreateIcon from "@material-ui/icons/Create";

import Wrapper from "./style";

export default function () {
  return (
    <Wrapper>
      <div>
        <Link to="/community/create">
          <button className="go-articleForm-button">
            <CreateIcon className="acticleBtn" fontSize="small" />
          </button>
        </Link>
      </div>
    </Wrapper>
  );
}
