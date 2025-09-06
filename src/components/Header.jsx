import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 py-10">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        Welcome To Weatherly
      </h1>
      <p className="text-muted-foreground text-xl">
        “From sunshine to storms — we’ve got you covered.”
      </p>
    </div>
  );
};

export default Header;
