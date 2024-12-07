import axios from "axios";

// API base URL (adjust using environment variables for flexibility)
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:8000/api";

// Create an Axios instance for API interactions
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Set a timeout of 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Helper to retrieve the auth token from localStorage
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Automatically add auth headers to requests
apiClient.interceptors.request.use(
  (config) => {
    config.headers = { ...config.headers, ...getAuthHeader() };
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle global errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Headers:", error.response.headers);

      // Redirect to login on unauthorized errors
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

// API methods
export const fetchCourses = async () => {
  try {
    const response = await apiClient.get("/courses/");
    console.log("Courses fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export const fetchCartItems = async () => {
  try {
    const response = await apiClient.get("/cart/");
    return response.data;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw error;
  }
};

export const addCourseToCart = async (courseId) => {
  try {
    const response = await apiClient.post("/cart/", { id: courseId });
    return response.data;
  } catch (error) {
    console.error(`Error adding course ${courseId} to cart:`, error);
    throw error;
  }
};

export const removeCourseFromCart = async (courseId) => {
  try {
    const response = await apiClient.delete(`/cart/${courseId}/`);
    return response.data;
  } catch (error) {
    console.error(`Error removing course ${courseId} from cart:`, error);
    throw error;
  }
};

export const confirmEnrollment = async () => {
  try {
    const response = await apiClient.post("/cart/confirm/", {});
    return response.data;
  } catch (error) {
    console.error("Error confirming enrollment:", error);
    throw error;
  }
};

export const fetchCourseDetails = async (id) => {
  try {
    const response = await apiClient.get(`/courses/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching course details for ID ${id}:`, error);
    throw error;
  }
};

export const submitContactForm = async (data) => {
  try {
    const response = await apiClient.post("/contact/", data);
    return response.data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await apiClient.post("/users/", userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await apiClient.post("/users/login/", credentials);
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};

// Export all methods for easy import in other files
export default {
  fetchCourses,
  fetchCartItems,
  addCourseToCart,
  removeCourseFromCart,
  confirmEnrollment,
  fetchCourseDetails,
  submitContactForm,
  registerUser,
  loginUser,
};
