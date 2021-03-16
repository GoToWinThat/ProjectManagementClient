import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { BiSearch } from "react-icons/bi";
import { IconContext } from "react-icons";

const StyledTextField = withStyles({
  root: {
    "& .MuiInput-root": {
      color: "#808080",
    },

    "& .MuiInput-root:after": {
      color: "#808080",
    },

    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },

    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },

    "& .MuiInput-underline:hover:not($disabled):not($focused):not($error):before ": {
      borderBottom: "none",
    },
  },
})(TextField);

const NavbarSearch = () => (
  <IconContext.Provider value={{ className: "searchIcons", color: "#808080" }}>
    <BiSearch size={20} />
    <StyledTextField
      m={0}
      p={0}
      id='filled-size-small'
      placeholder='Przeszukaj projekty...'
      variant='standard'
      fullWidth
    />
  </IconContext.Provider>
);

export default NavbarSearch;
