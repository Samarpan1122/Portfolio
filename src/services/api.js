// Mock data service for frontend-only portfolio
import { personalInfo, skills, projects, experience, awards, publications, education, contactInfo } from '../data/mock';

// Simulate API delay for better UX
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Portfolio API service - now using only mock data
export const portfolioAPI = {
  // Profile endpoints
  getProfile: async () => {
    await delay(500);
    return { data: personalInfo };
  },
  
  // Skills endpoints
  getSkills: async () => {
    await delay(300);
    return { data: skills };
  },
  
  // Projects endpoints
  getProjects: async (featuredOnly = false) => {
    await delay(400);
    const filteredProjects = featuredOnly ? projects.filter(p => p.featured) : projects;
    return { data: filteredProjects };
  },
  
  getProject: async (id) => {
    await delay(300);
    const project = projects.find(p => p.id === parseInt(id));
    return { data: project };
  },
  
  // Experience endpoints
  getExperience: async () => {
    await delay(300);
    return { data: experience };
  },
  
  // Awards endpoints
  getAwards: async (featuredOnly = false) => {
    await delay(300);
    const filteredAwards = featuredOnly ? awards.filter(a => a.featured) : awards;
    return { data: filteredAwards };
  },
  
  // Publications endpoints
  getPublications: async () => {
    await delay(300);
    return { data: publications };
  },
  
  // Education endpoint
  getEducation: async () => {
    await delay(300);
    return { data: education };
  },
  
  // Contact info
  getContactInfo: async () => {
    await delay(200);
    return { data: contactInfo };
  },
  
  // Bulk data endpoint
  getAllPortfolioData: async () => {
    await delay(800);
    return {
      data: {
        profile: personalInfo,
        skills,
        projects,
        experience,
        awards,
        publications,
        education,
        contact: contactInfo
      }
    };
  },
  
  // Health check
  healthCheck: async () => {
    await delay(100);
    return { data: { message: "Portfolio API is running! 🚀", status: "healthy" } };
  },
};

// Utility function for consistent error handling (kept for compatibility)
export const handleAPIError = (error, fallbackData = null) => {
  console.warn('API simulation error:', error);
  return { error: error.message, fallback: fallbackData };
};