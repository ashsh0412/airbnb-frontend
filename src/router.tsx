import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import NotFound from "./routes/NotFound";
import Home from "./routes/Home";
import RoomDetail from "./routes/RoomDetail";
import GithubConfirm from "./routes/GithubConfirm";
import KakaoConfirm from "./routes/KakaoConfirm";
import UploadRoom from "./routes/UploadRoom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: "rooms/upload",
    element: <Root />,
    children: [{ path: "", element: <UploadRoom /> }],
  },
  {
    path: "rooms/:roomPk",
    element: <Root />,
    errorElement: <NotFound />,
    children: [{ path: "", element: <RoomDetail /> }],
  },
  {
    path: "social",
    children: [
      {
        path: "github",
        element: <GithubConfirm />,
      },
      {
        path: "kakao",
        element: <KakaoConfirm />,
      },
    ],
  },
]);

export default router;
