const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export const api = {
  async request(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  },

  // Auth endpoints
  auth: {
    login: (email: string, password: string) =>
      api.request('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }),
    signup: (data: any) =>
      api.request('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  },

  // Health check
  health: () => api.request('/api/health'),

  // Patients
  patients: {
    getAll: () => api.request('/api/patients'),
    getById: (id: string) => api.request(`/api/patients/${id}`),
    create: (data: any) => api.request('/api/patients', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
    update: (id: string, data: any) => api.request(`/api/patients/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
    getReports: (id: string) => api.request(`/api/patients/${id}/reports`),
  },

  // Encounters
  encounters: {
    getByPatientId: (patientId: string) => api.request(`/api/patients/${patientId}/encounters`),
    create: (data: any) => api.request('/api/encounters', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
    uploadAttachment: (encounterId: string, file: File) => {
      const formData = new FormData();
      formData.append('file', file);
      return api.request(`/api/encounters/${encounterId}/attachments`, {
        method: 'POST',
        body: formData,
        headers: {}, // Let browser set content-type for FormData
      });
    },
  },

  // Diagnoses
  diagnoses: {
    getByEncounterId: (encounterId: string) => api.request(`/api/encounters/${encounterId}/diagnoses`),
    create: (data: any) => api.request('/api/diagnoses', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  },

  // Predictions
  predictions: {
    create: (data: any) => api.request('/api/predictions', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  },

  // Health suggestions
  suggestions: {
    getAll: () => api.request('/api/health/suggestions'),
  },
};
