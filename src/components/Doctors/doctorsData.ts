export interface Doctor {
  name: string;
  role: string;
  degree: string;
  rating: number;
  experience: string;
  languages: string;
  image: string;
}

export const doctorsData: Doctor[] = [
  {
    name: "Dr. Marcus Thorne",
    role: "Senior Cardiologist",
    degree: "MBBS, MD - Cardiology, FACC",
    rating: 4.9,
    experience: "12+ Years Experience",
    languages: "English, Spanish",
    image:
      "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Dr. Sarah Jenkins",
    role: "Pediatrics Specialist",
    degree: "MBBS, DCH, MD - Pediatrics",
    rating: 5.0,
    experience: "8 Years Experience",
    languages: "English, French",
    image:
      "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fHww",
  },
  {
    name: "Dr. Alan Varga",
    role: "Neurologist",
    degree: "MBBS, MS, DM - Neurology",
    rating: 4.8,
    experience: "15+ Years Experience",
    languages: "English, German",
    image:
      "https://images.unsplash.com/photo-1758691463393-a2aa9900af8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lZGljYWwlMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Dermatology Head",
    degree: "MBBS, MD - Dermatology",
    rating: 4.7,
    experience: "10 Years Experience",
    languages: "Spanish, English",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Dr. Mishika Maharjan",
    role: "Dermatology Head",
    degree: "MBBS, MD - Dermatology",
    rating: 4.7,
    experience: "10 Years Experience",
    languages: "Spanish, English",
    image:
      "https://images.unsplash.com/photo-1758691462651-611d730c5272?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lZGljYWwlMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Dr. Ginas Magar",
    role: "Dermatology Head",
    degree: "MBBS, MD - Dermatology",
    rating: 4.7,
    experience: "10 Years Experience",
    languages: "Spanish, English",
    image:
      "https://images.unsplash.com/photo-1758691461513-88a0aef72160?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lZGljYWwlMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
  },
];
