import axios from 'axios';
import { OfferSection, ApiResponse } from '../Types/OfferSection';

// const API_BASE_URL = 'http://localhost:3000/api';
const API_BASE_URL = 'https://api.dosaworld.de/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const offerSectionService = {
  // Create new offer section
  create: async (sectionData: Omit<OfferSection, '_id' | 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<OfferSection>> => {
    const response = await api.post('/offer-sections', sectionData);
    return response.data;
  },

  // Get all offer sections
  getAll: async (): Promise<ApiResponse<OfferSection[]>> => {
    const response = await api.get('/offer-sections');
    return response.data;
  },

  // Get single offer section by ID
  getById: async (id: string): Promise<ApiResponse<OfferSection>> => {
    const response = await api.get(`/offer-sections/${id}`);
    return response.data;
  },

  // Get active offer section
  getActive: async (): Promise<ApiResponse<OfferSection>> => {
    const response = await api.get('/offer-sections/active');
    return response.data;
  },

  // Update offer section
  update: async (id: string, sectionData: Partial<OfferSection>): Promise<ApiResponse<OfferSection>> => {
    const response = await api.put(`/offer-sections/${id}`, sectionData);
    return response.data;
  },

  // Delete offer section
  delete: async (id: string): Promise<ApiResponse<void>> => {
    const response = await api.delete(`/offer-sections/${id}`);
    return response.data;
  },
};