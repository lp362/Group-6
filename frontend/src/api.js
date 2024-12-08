import axios from "axios";

// Set the base URL for the API
const API_BASE_URL = "http://127.0.0.1:8000/api"; // Ensure this is your backend URL

// Create an Axios instance for consistency
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Set a reasonable timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to add authentication token to requests if needed
const getAuthHeader = () => {
  const token = localStorage.getItem("token"); // Adjust this to match your auth logic
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Automatically add authentication headers to all requests
apiClient.interceptors.request.use((config) => {
  config.headers = { ...config.headers, ...getAuthHeader() };
  return config;
});

// Interceptor to handle global errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error.response?.data || error.message);
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Headers:", error.response.headers);
    }
    return Promise.reject(error);
  }
);

// Fetch all available courses
export const fetchCourses = async () => {
  try {
    const response = await apiClient.get("/courses/");
    console.log("Courses fetched:", response.data); // Log fetched data for debugging
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

// Fetch all cart items
export const fetchCartItems = async () => {
  try {
    const response = await apiClient.get("/cart/");
    return response.data;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw error;
  }
};

// Remove a course from the cart
export const removeCourseFromCart = async (courseId) => {
  try {
    const response = await apiClient.delete(`/cart/${courseId}/`);
    return response.data;
  } catch (error) {
    console.error(`Error removing course ${courseId} from cart:`, error);
    throw error;
  }
};

// Confirm enrollment for courses in the cart
export const confirmEnrollment = async () => {
  try {
    const response = await apiClient.post("/cart/confirm/", {});
    return response.data;
  } catch (error) {
    console.error("Error confirming enrollment:", error);
    throw error;
  }
};

// Fetch detailed information about a specific course
export const fetchCourseDetails = async (id) => {
  try {
    const response = await apiClient.get(`/courses/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching course details for ID ${id}:`, error);
    throw error;
  }
};

// Add a course to the cart
export const addCourseToCart = async (courseId) => {
  try {
    const response = await apiClient.post("/cart/", { id: courseId });
    return response.data;
  } catch (error) {
    console.error(`Error adding course ${courseId} to cart:`, error);
    throw error;
  }
};

// Submit the contact form
export const submitContactForm = async (data) => {
  try {
    const response = await apiClient.post("/contact/", data);
    return response.data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await apiClient.post("/users/", userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

// Log in a user
export const loginUser = async (credentials) => {
  try {
    const response = await apiClient.post("/users/login/", credentials);
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};
