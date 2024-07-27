import { io } from "socket.io-client";
import styled from "styled-components";
import { useFixtureContext } from "../../context/fixture_context";
import { FlexDiv, ParaWrapper } from "../component_utils/styled_components";

// let socket = io(`http://localhost:5005`);
let socket = io(`https://cali-server.onrender.com/`);

const NavOptions = ({ event, site, url }) => {
  const { setFixtures, setError, isLoading, setIsLoading } =
    useFixtureContext();

  const getAndSetFixtures = (url, site, event) => {
    if (isLoading) return;
    setIsLoading(true);
    connectSocket(url, site, event);
  };

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
    <OptionsWrapper onClick={() => getAndSetFixtures(url, site, event)}>
      <ParaWrapper fontSize="0.9rem">{event}</ParaWrapper>
    </OptionsWrapper>
  );
};

const OptionsWrapper = styled(FlexDiv)`
  height: 100%;
  padding: 0 1.3vw;
  gap: 5px;
  cursor: pointer;
`;

export default NavOptions;
