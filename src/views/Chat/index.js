import React, { useEffect, useState } from "react";

/* import internal modules */
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const ChatPage = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 910);
  }, [window.innerWidth]);


  return isDesktop ? <Desktop /> : <Mobile />;
};

export default ChatPage;
