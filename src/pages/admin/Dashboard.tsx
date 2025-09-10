
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '../../contexts/AuthContext';
import {
  DollarSign,
  Calendar,
  PartyPopper,
  AlertTriangle,
  TrendingUp,
  Users,
  Clock,
  Package
} from 'lucide-react';

interface DashboardStats {
  sales: {
    total_orders: number;
    total_revenue: number;
    avg_order_value: number;
  };
  reservations: {
    total_reservations: number;
    pending_reservations: number;
    confirmed_reservations: number;
  };
  parties: {
    total_parties: number;
    party_revenue: number;
  };
  lowStockItems: Array<{
    name: string;
    current_stock: number;
    min_stock_level: number;
    unit: string;
  }>;
  recentOrders: Array<{
    id: number;
    order_number: string;
    total_amount: number;
    status: string;
    created_at: string;
    table_info: string;
  }>;
  upcomingReservations: Array<{
    id: number;
    customer_name: string;
    customer_phone: string;
    reservation_time: string;
    guest_count: number;
    table_number: string;
  }>;
}

const Dashboard = () => {
  const { token } = useAuth();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/dashboard/stats', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${stats?.sales.total_revenue.toFixed(2) || '0.00'}
            </div>
            <p className="text-xs text-muted-foreground">
              {stats?.sales.total_orders || 0} orders today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reservations</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats?.reservations.total_reservations || 0}
            </div>
            <p className="text-xs text-muted-foreground">
              {stats?.reservations.pending_reservations || 0} pending
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Party Revenue</CardTitle>
            <PartyPopper className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${stats?.parties.party_revenue.toFixed(2) || '0.00'}
            </div>
            <p className="text-xs text-muted-foreground">
              {stats?.parties.total_parties || 0} parties today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              {stats?.lowStockItems.length || 0}
            </div>
            <p className="text-xs text-muted-foreground">items need restocking</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Recent Orders
            </CardTitle>
            <CardDescription>Latest order activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats?.recentOrders.length ? (
                stats.recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{order.order_number}</p>
                      <p className="text-sm text-muted-foreground">
                        {order.table_info} • {new Date(order.created_at).toLocaleTimeString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${order.total_amount.toFixed(2)}</p>
                      <Badge variant={order.status === 'completed' ? 'default' : 'secondary'}>
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground text-center py-4">No recent orders</p>
              )}
            </div>
          </CardContent>
        </Card>

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
      </div>

      {/* Low Stock Items */}
      {stats?.lowStockItems.length ? (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Package className="h-5 w-5 mr-2" />
              Low Stock Alerts
            </CardTitle>
            <CardDescription>Items that need immediate attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stats.lowStockItems.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{item.name}</h4>
                    <Badge variant="destructive">Low Stock</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Current: {item.current_stock} {item.unit}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Minimum: {item.min_stock_level} {item.unit}
                  </p>
                  <div className="mt-2 bg-red-100 dark:bg-red-900/20 rounded-full h-2">
                    <div 
                      className="bg-red-500 h-2 rounded-full"
                      style={{
                        width: `${Math.min((item.current_stock / item.min_stock_level) * 100, 100)}%`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
};

export default Dashboard;
