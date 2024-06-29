import { RouterProvider } from "react-router-dom";
import { router } from "@src/router";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <>
      <AppLayout>
        <RouterProvider router={router} />
      </AppLayout>
    </>
  );
}

export default App;
