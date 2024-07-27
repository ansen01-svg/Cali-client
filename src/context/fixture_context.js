import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

let FixturesContext = createContext();

// let socket = io("http://localhost:5005");
let socket = io("https://cali-server.onrender.com/");

const MyContext = ({ children }) => {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState({ error: false, msg: "" });
  let [fixtures, setFixtures] = useState({
    fixtures: [],
    event: "",
    site: "",
    url: "",
  });

  useEffect(() => {
    connectSocket("https://22bets.me/line/football", "22bet", "Upcoming");
  }, []);

  let connectSocket = (url, site, event) => {
    socket.emit("initialData", { url, site, event });
    socket.on("fixtures", (data) => {
      setFixtures({
        fixtures: data,
        site,
        event,
        url,
      });
      setIsLoading(false);
    });
    socket.on("error", (data) => {
      setIsLoading(false);
      setError({ error: true, msg: data.name });
    });
  };

  return (
    <FixturesContext.Provider
      value={{
        isLoading,
        setIsLoading,
        error,
        setError,
        fixtures,
        setFixtures,
      }}
    >
      {children}
    </FixturesContext.Provider>
  );
};

export const useFixtureContext = () => {
  return useContext(FixturesContext);
};

export default MyContext;
