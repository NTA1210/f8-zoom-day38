import { HashRouter, Routes, Route } from "react-router";

//Pages
import {
  NotFoundPage,
  HomePage,
  ModalDemo,
  ScrollDemo,
  Profile,
  PerformanceDemo,
  FocusDemo,
  HOCDemo,
  RenderPropsDemo,
  CustomHooksDemo,
} from "@/pages";

//Layouts
import { DefaultLayout } from "@/layouts";

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="modal-demo" element={<ModalDemo />} />
          <Route path="scroll-demo" element={<ScrollDemo />} />
          <Route path="profile" element={<Profile />} />
          <Route path="performance-demo" element={<PerformanceDemo />} />
          <Route path="focus-demo" element={<FocusDemo />} />
          <Route path="hoc-demo" element={<HOCDemo />} />
          <Route path="render-props-demo" element={<RenderPropsDemo />} />
          <Route path="custom-hooks-demo" element={<CustomHooksDemo />} />
        </Route>

        {/* Not Found Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
