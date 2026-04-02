import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BlogPost {
    title: string;
    content: string;
    publishDate: bigint;
    slug: string;
    author: string;
    excerpt: string;
    category: string;
}
export interface Booking {
    service: string;
    name: string;
    email: string;
    message: string;
    preferredDate: string;
    timestamp: bigint;
    phone: string;
}
export interface ContactSubmission {
    serviceType: string;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface Testimonial {
    service: string;
    review: string;
    date: bigint;
    name: string;
    rating: bigint;
    location: string;
}
export interface backendInterface {
    addBlogPost(title: string, slug: string, excerpt: string, content: string, category: string, author: string): Promise<void>;
    addContactSubmission(name: string, email: string, phone: string, serviceType: string, message: string): Promise<void>;
    addTestimonial(name: string, location: string, rating: bigint, review: string, service: string): Promise<void>;
    bookConsultation(name: string, email: string, phone: string, preferredDate: string, service: string, message: string): Promise<void>;
    getAllBlogPosts(): Promise<Array<BlogPost>>;
    getAllBookings(): Promise<Array<Booking>>;
    getAllContacts(): Promise<Array<ContactSubmission>>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
    getPostBySlug(slug: string): Promise<BlogPost | null>;
    getPostsByCategory(category: string): Promise<Array<BlogPost>>;
    getTestimonialsByService(service: string): Promise<Array<Testimonial>>;
}
