import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  // 1. fetch online status
  // how do we fetch??

  useEffect(() => {
    window.addEventListener("online", () => {
      // 2. set status
      setOnlineStatus(true);
    });

    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);

  // 3. return online status
  return onlineStatus;
};

export default useOnlineStatus;
