
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Clock, 
  AlertTriangle,
  TrendingUp,
  Calendar,
  Package
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const API_BASE_URL = 'http://localhost:3001/api';

interface DashboardStats {
  todaySales: number;
  todayOrders: number;
  todayReservations: number;
  confirmedReservations: number;
  upcomingReservations: Array<{
    id: number;
    customer_name: string;
    customer_phone: string;
    reservation_time: string;
    guest_count: number;
    table_number: number;
  }>;
  lowStockItems: Array<{
    id: number;
    item_name: string;
    current_stock: number;
    minimum_stock: number;
    unit: string;
  }>;
  recentBills: Array<{
    id: number;
    bill_number: string;
    customer_name: string;
    total_amount: number;
    created_at: string;
  }>;
}

const Dashboard: React.FC = () => {
  const { token } = useAuth();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/dashboard/stats`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch dashboard data');
      }

      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Dashboard fetch error:', error);
      setError(error instanceof Error ? error.message : 'Failed to load dashboard');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-center text-red-600">
              <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg font-semibold">Error Loading Dashboard</p>
              <p className="text-sm text-muted-foreground mt-2">{error}</p>
              <button 
                onClick={fetchDashboardStats}
                className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
              >
                Retry
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Badge variant="outline">
          {new Date().toLocaleDateString()}
        </Badge>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Sales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats?.todaySales?.toFixed(2) || '0.00'}</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              Revenue for today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.todayOrders || 0}</div>
            <p className="text-xs text-muted-foreground">
              Orders completed today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reservations</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.confirmedReservations || 0}</div>
            <p className="text-xs text-muted-foreground">
              Confirmed for today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.lowStockItems?.length || 0}</div>
            <p className="text-xs text-muted-foreground">
              Items need restocking
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Reservations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Upcoming Reservations
            </CardTitle>
            <CardDescription>Today's confirmed reservations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats?.upcomingReservations.length ? (
                stats.upcomingReservations.map((reservation) => (
                  <div key={reservation.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{reservation.customer_name}</p>
                      <p className="text-sm text-muted-foreground">
                        Table {reservation.table_number} • {reservation.guest_count} guests
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        {new Date(`2024-01-01T${reservation.reservation_time}`).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {reservation.customer_phone}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground text-center py-4">No upcoming reservations</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Low Stock Alert */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
              Low Stock Alert
            </CardTitle>
            <CardDescription>Items that need immediate attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {stats?.lowStockItems.length ? (
                stats.lowStockItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.item_name}</p>
                      <p className="text-sm text-muted-foreground">
                        Min: {item.minimum_stock} {item.unit}
                      </p>
                    </div>
                    <Badge variant={item.current_stock === 0 ? "destructive" : "secondary"}>
                      {item.current_stock} {item.unit}
                    </Badge>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground text-center py-4">All items are well stocked</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Bills */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Recent Bills
          </CardTitle>
          <CardDescription>Latest billing transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {stats?.recentBills.length ? (
              stats.recentBills.map((bill) => (
                <div key={bill.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">#{bill.bill_number}</p>
                    <p className="text-sm text-muted-foreground">
                      {bill.customer_name || 'Walk-in Customer'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${bill.total_amount}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(bill.created_at).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-center py-4">No recent bills</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
