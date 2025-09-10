
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useAuth } from '../../contexts/AuthContext';
import { Plus, Pencil, Trash2, Image as ImageIcon } from 'lucide-react';
import Swal from 'sweetalert2';

interface Category {
  id: number;
  name: string;
  description: string;
  is_active: boolean;
}

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category_id: number;
  category_name: string;
  image_url: string;
  is_available: boolean;
  is_active: boolean;
}

const MenuManagement = () => {
  const { token } = useAuth();
  const [categories, setCategories] = useState<Category[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'categories' | 'items'>('categories');

  // Category form state
  const [categoryForm, setCategoryForm] = useState({
    id: 0,
    name: '',
    description: '',
    is_active: true
  });
  const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);

  // Menu item form state
  const [itemForm, setItemForm] = useState({
    id: 0,
    name: '',
    description: '',
    price: '',
    category_id: '',
    image: null as File | null,
    is_available: true,
    is_active: true
  });
  const [itemDialogOpen, setItemDialogOpen] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchMenuItems();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/menu/categories', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchMenuItems = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/menu/items', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setMenuItems(data);
      }
    } catch (error) {
      console.error('Error fetching menu items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = categoryForm.id 
        ? `http://localhost:3000/api/menu/categories/${categoryForm.id}`
        : 'http://localhost:3000/api/menu/categories';
      
      const method = categoryForm.id ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(categoryForm)
      });

      if (response.ok) {
        Swal.fire({
          title: 'Success!',
          text: `Category ${categoryForm.id ? 'updated' : 'created'} successfully`,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
        setCategoryDialogOpen(false);
        setCategoryForm({ id: 0, name: '', description: '', is_active: true });
        fetchCategories();
      } else {
        const error = await response.json();
        Swal.fire('Error!', error.message, 'error');
      }
    } catch (error) {
      Swal.fire('Error!', 'Network error occurred', 'error');
    }
  };

  const handleItemSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('name', itemForm.name);
      formData.append('description', itemForm.description);
      formData.append('price', itemForm.price);
      formData.append('category_id', itemForm.category_id);
      formData.append('is_available', itemForm.is_available.toString());
      formData.append('is_active', itemForm.is_active.toString());
      
      if (itemForm.image) {
        formData.append('image', itemForm.image);
      }

      const url = itemForm.id 
        ? `http://localhost:3000/api/menu/items/${itemForm.id}`
        : 'http://localhost:3000/api/menu/items';
      
      const method = itemForm.id ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (response.ok) {
        Swal.fire({
          title: 'Success!',
          text: `Menu item ${itemForm.id ? 'updated' : 'created'} successfully`,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
        setItemDialogOpen(false);
        setItemForm({
          id: 0,
          name: '',
          description: '',
          price: '',
          category_id: '',
          image: null,
          is_available: true,
          is_active: true
        });
        fetchMenuItems();
      } else {
        const error = await response.json();
        Swal.fire('Error!', error.message, 'error');
      }
    } catch (error) {
      Swal.fire('Error!', 'Network error occurred', 'error');
    }
  };

  const handleDeleteCategory = async (id: number) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'This will deactivate the category and you won\'t be able to recover it!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:3000/api/menu/categories/${id}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (response.ok) {
          Swal.fire('Deleted!', 'Category has been deleted.', 'success');
          fetchCategories();
        } else {
          const error = await response.json();
          Swal.fire('Error!', error.message, 'error');
        }
      } catch (error) {
        Swal.fire('Error!', 'Network error occurred', 'error');
      }
    }
  };

  const handleDeleteItem = async (id: number) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'This will deactivate the menu item and you won\'t be able to recover it!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:3000/api/menu/items/${id}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (response.ok) {
          Swal.fire('Deleted!', 'Menu item has been deleted.', 'success');
          fetchMenuItems();
        } else {
          const error = await response.json();
          Swal.fire('Error!', error.message, 'error');
        }
      } catch (error) {
        Swal.fire('Error!', 'Network error occurred', 'error');
      }
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
      {/* Tabs */}
      <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
        <Button
          variant={activeTab === 'categories' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('categories')}
          className="rounded-md"
        >
          Categories
        </Button>
        <Button
          variant={activeTab === 'items' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('items')}
          className="rounded-md"
        >
          Menu Items
        </Button>
      </div>

      {/* Categories Tab */}
      {activeTab === 'categories' && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Categories</CardTitle>
                <CardDescription>Manage your menu categories</CardDescription>
              </div>
              <Dialog open={categoryDialogOpen} onOpenChange={setCategoryDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={() => setCategoryForm({ id: 0, name: '', description: '', is_active: true })}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Category
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      {categoryForm.id ? 'Edit Category' : 'Add New Category'}
                    </DialogTitle>
                    <DialogDescription>
                      {categoryForm.id ? 'Update category details' : 'Create a new menu category'}
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleCategorySubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="category-name">Name</Label>
                      <Input
                        id="category-name"
                        value={categoryForm.name}
                        onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="category-description">Description</Label>
                      <Textarea
                        id="category-description"
                        value={categoryForm.description}
                        onChange={(e) => setCategoryForm({ ...categoryForm, description: e.target.value })}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="category-active"
                        checked={categoryForm.is_active}
                        onCheckedChange={(checked) => setCategoryForm({ ...categoryForm, is_active: checked })}
                      />
                      <Label htmlFor="category-active">Active</Label>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button type="button" variant="outline" onClick={() => setCategoryDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button type="submit">
                        {categoryForm.id ? 'Update' : 'Create'}
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <div key={category.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{category.name}</h3>
                    <div className="flex space-x-1">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setCategoryForm(category);
                          setCategoryDialogOpen(true);
                        }}
                      >
                        <Pencil className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteCategory(category.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                  <Badge variant={category.is_active ? 'default' : 'secondary'}>
                    {category.is_active ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Menu Items Tab */}
      {activeTab === 'items' && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Menu Items</CardTitle>
                <CardDescription>Manage your menu items</CardDescription>
              </div>
              <Dialog open={itemDialogOpen} onOpenChange={setItemDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={() => setItemForm({
                    id: 0,
                    name: '',
                    description: '',
                    price: '',
                    category_id: '',
                    image: null,
                    is_available: true,
                    is_active: true
                  })}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Menu Item
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>
                      {itemForm.id ? 'Edit Menu Item' : 'Add New Menu Item'}
                    </DialogTitle>
                    <DialogDescription>
                      {itemForm.id ? 'Update menu item details' : 'Create a new menu item'}
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleItemSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="item-name">Name</Label>
                        <Input
                          id="item-name"
                          value={itemForm.name}
                          onChange={(e) => setItemForm({ ...itemForm, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="item-price">Price</Label>
                        <Input
                          id="item-price"
                          type="number"
                          step="0.01"
                          value={itemForm.price}
                          onChange={(e) => setItemForm({ ...itemForm, price: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="item-description">Description</Label>
                      <Textarea
                        id="item-description"
                        value={itemForm.description}
                        onChange={(e) => setItemForm({ ...itemForm, description: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="item-category">Category</Label>
                      <Select value={itemForm.category_id} onValueChange={(value) => setItemForm({ ...itemForm, category_id: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.filter(cat => cat.is_active).map((category) => (
                            <SelectItem key={category.id} value={category.id.toString()}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="item-image">Image</Label>
                      <Input
                        id="item-image"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setItemForm({ ...itemForm, image: e.target.files?.[0] || null })}
                      />
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="item-available"
                          checked={itemForm.is_available}
                          onCheckedChange={(checked) => setItemForm({ ...itemForm, is_available: checked })}
                        />
                        <Label htmlFor="item-available">Available</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="item-active"
                          checked={itemForm.is_active}
                          onCheckedChange={(checked) => setItemForm({ ...itemForm, is_active: checked })}
                        />
                        <Label htmlFor="item-active">Active</Label>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button type="button" variant="outline" onClick={() => setItemDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button type="submit">
                        {itemForm.id ? 'Update' : 'Create'}
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuItems.map((item) => (
                <div key={item.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.category_name}</p>
                    </div>
                    <div className="flex space-x-1">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setItemForm({
                            id: item.id,
                            name: item.name,
                            description: item.description,
                            price: item.price.toString(),
                            category_id: item.category_id.toString(),
                            image: null,
                            is_available: item.is_available,
                            is_active: item.is_active
                          });
                          setItemDialogOpen(true);
                        }}
                      >
                        <Pencil className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  {item.image_url ? (
                    <img 
                      src={`http://localhost:3000${item.image_url}`} 
                      alt={item.name}
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                  ) : (
                    <div className="w-full h-32 bg-muted rounded mb-2 flex items-center justify-center">
                      <ImageIcon className="h-8 w-8 text-muted-foreground" />
                    </div>
                  )}
                  
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">${item.price.toFixed(2)}</span>
                    <div className="flex space-x-1">
                      <Badge variant={item.is_available ? 'default' : 'secondary'}>
                        {item.is_available ? 'Available' : 'Unavailable'}
                      </Badge>
                      <Badge variant={item.is_active ? 'default' : 'secondary'}>
                        {item.is_active ? 'Active' : 'Inactive'}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MenuManagement;
