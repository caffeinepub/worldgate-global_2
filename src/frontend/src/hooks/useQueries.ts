import { useMutation, useQuery } from "@tanstack/react-query";
import type { BlogPost, Testimonial } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllTestimonials() {
  const { actor, isFetching } = useActor();
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllBlogPosts() {
  const { actor, isFetching } = useActor();
  return useQuery<BlogPost[]>({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBlogPosts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      serviceType: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.addContactSubmission(
        data.name,
        data.email,
        data.phone,
        data.serviceType,
        data.message,
      );
    },
  });
}

export function useSubmitBooking() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      preferredDate: string;
      service: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.bookConsultation(
        data.name,
        data.email,
        data.phone,
        data.preferredDate,
        data.service,
        data.message,
      );
    },
  });
}
