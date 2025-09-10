
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
  SidebarFooter
} from '@/components/ui/sidebar';
import { useAuth } from '../../contexts/AuthContext';
import { 
  LayoutDashboard, 
  ChefHat, 
  Calendar, 
  PartyPopper, 
  Receipt, 
  Package, 
  BarChart3, 
  Users,
  LogOut,
  Sun,
  Moon
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const menuItems = [
    { 
      title: 'Dashboard', 
      icon: LayoutDashboard, 
      href: '/admin/dashboard',
      roles: ['admin', 'manager', 'cashier', 'stock_manager']
    },
    { 
      title: 'Menu Management', 
      icon: ChefHat, 
      href: '/admin/menu',
      roles: ['admin', 'manager']
    },
    { 
      title: 'Reservations', 
      icon: Calendar, 
      href: '/admin/reservations',
      roles: ['admin', 'manager', 'cashier']
    },
    { 
      title: 'Party Management', 
      icon: PartyPopper, 
      href: '/admin/parties',
      roles: ['admin', 'manager']
    },
    { 
      title: 'Billing', 
      icon: Receipt, 
      href: '/admin/billing',
      roles: ['admin', 'manager', 'cashier']
    },
    { 
      title: 'Inventory', 
      icon: Package, 
      href: '/admin/inventory',
      roles: ['admin', 'manager', 'stock_manager']
    },
    { 
      title: 'Reports', 
      icon: BarChart3, 
      href: '/admin/reports',
      roles: ['admin', 'manager', 'cashier', 'stock_manager']
    },
    { 
      title: 'User Management', 
      icon: Users, 
      href: '/admin/users',
      roles: ['admin']
    }
  ];

  const filteredMenuItems = menuItems.filter(item => 
    item.roles.includes(user?.role || '')
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <SidebarProvider>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        <Sidebar>
          <SidebarHeader className="border-b p-4">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-primary" />
              <div>
                <h1 className="font-bold text-lg">Restaurant Admin</h1>
                <p className="text-sm text-muted-foreground capitalize">{user?.role}</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-2">
            <SidebarMenu>
              {filteredMenuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.href}
                  >
                    <Link to={item.href} className="flex items-center space-x-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter className="border-t p-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Theme</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleDarkMode}
                  className="h-8 w-8 p-0"
                >
                  {isDarkMode ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <div className="text-sm">
                <p className="font-medium">{user?.full_name}</p>
                <p className="text-muted-foreground">{user?.email}</p>
              </div>
              <Button
                variant="outline"
                onClick={logout}
                className="w-full justify-start"
                size="sm"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">
                {menuItems.find(item => item.href === location.pathname)?.title || 'Dashboard'}
              </h2>
            </div>
          </header>
          
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
