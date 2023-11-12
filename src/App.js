import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Register, Robots, Insert, Reports } from "./pages";
import { AdminHome, AdminReports, AdminRobots, AdminInsert } from "./admin/pages";
import { Layout } from "./layout/Layout";
import { AdminLayout } from "./layout/AdminLayout";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/robots" element={<Robots />} />
            <Route path="/insert" element={<Insert />} />
            <Route path="/reports" element={<Reports />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="/admin/robots" element={<AdminRobots />} />
            <Route path="/admin/insert" element={<AdminInsert />} />
            <Route path="/admin/reports" element={<AdminReports />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}