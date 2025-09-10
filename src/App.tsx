
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import AdminLayout from "./components/layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import MenuManagement from "./pages/admin/MenuManagement";
import ReservationManagement from "./pages/admin/ReservationManagement";
import PartyManagement from "./pages/admin/PartyManagement";
import BillingManagement from "./pages/admin/BillingManagement";
import InventorySystem from "./pages/admin/InventorySystem";
import Reports from "./pages/admin/Reports";
import UserManagement from "./pages/admin/UserManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            
            {/* Protected admin routes */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="menu" element={
                <ProtectedRoute allowedRoles={['admin', 'manager']}>
                  <MenuManagement />
                </ProtectedRoute>
              } />
              <Route path="reservations" element={
                <ProtectedRoute allowedRoles={['admin', 'manager', 'cashier']}>
                  <ReservationManagement />
                </ProtectedRoute>
              } />
              <Route path="parties" element={
                <ProtectedRoute allowedRoles={['admin', 'manager']}>
                  <PartyManagement />
                </ProtectedRoute>
              } />
              <Route path="billing" element={
                <ProtectedRoute allowedRoles={['admin', 'manager', 'cashier']}>
                  <BillingManagement />
                </ProtectedRoute>
              } />
              <Route path="inventory" element={
                <ProtectedRoute allowedRoles={['admin', 'manager', 'stock_manager']}>
                  <InventorySystem />
                </ProtectedRoute>
              } />
              <Route path="reports" element={<Reports />} />
              <Route path="users" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <UserManagement />
                </ProtectedRoute>
              } />
            </Route>
            
            {/* Redirect root to admin */}
            <Route path="/" element={<Navigate to="/admin" replace />} />
            
            {/* 404 fallback */}
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
