import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Int "mo:core/Int";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    serviceType : Text;
    message : Text;
    timestamp : Int;
  };

  module ContactSubmission {
    public func compare(c1 : ContactSubmission, c2 : ContactSubmission) : Order.Order {
      Int.compare(c2.timestamp, c1.timestamp);
    };
  };

  type Booking = {
    name : Text;
    email : Text;
    phone : Text;
    preferredDate : Text;
    service : Text;
    message : Text;
    timestamp : Int;
  };

  module Booking {
    public func compare(b1 : Booking, b2 : Booking) : Order.Order {
      Int.compare(b2.timestamp, b1.timestamp);
    };
  };

  type BlogPost = {
    title : Text;
    slug : Text;
    excerpt : Text;
    content : Text;
    category : Text;
    publishDate : Int;
    author : Text;
  };

  module BlogPost {
    public func compareByDate(post1 : BlogPost, post2 : BlogPost) : Order.Order {
      Int.compare(post2.publishDate, post1.publishDate);
    };
  };

  type Testimonial = {
    name : Text;
    location : Text;
    rating : Nat;
    review : Text;
    service : Text;
    date : Int;
  };

  module Testimonial {
    public func compare(t1 : Testimonial, t2 : Testimonial) : Order.Order {
      Int.compare(t2.date, t1.date);
    };
  };

  let contactIdGen = Map.empty<Text, ContactSubmission>();
  let bookings = Map.empty<Text, Booking>();
  let blogPosts = Map.empty<Text, BlogPost>();
  let testimonials = Map.empty<Text, Testimonial>();

  public shared ({ caller }) func addContactSubmission(name : Text, email : Text, phone : Text, serviceType : Text, message : Text) : async () {
    let timestamp = Time.now();
    let id = timestamp.toText();
    let contactSubmission : ContactSubmission = {
      name;
      email;
      phone;
      serviceType;
      message;
      timestamp;
    };
    contactIdGen.add(id, contactSubmission);
  };

  public shared ({ caller }) func bookConsultation(name : Text, email : Text, phone : Text, preferredDate : Text, service : Text, message : Text) : async () {
    let timestamp = Time.now();
    let id = timestamp.toText();
    let booking : Booking = {
      name;
      email;
      phone;
      preferredDate;
      service;
      message;
      timestamp;
    };
    bookings.add(id, booking);
  };

  public shared ({ caller }) func addBlogPost(title : Text, slug : Text, excerpt : Text, content : Text, category : Text, author : Text) : async () {
    let publishDate = Time.now();
    let blogPost : BlogPost = {
      title;
      slug;
      excerpt;
      content;
      category;
      publishDate;
      author;
    };
    blogPosts.add(slug, blogPost);
  };

  public shared ({ caller }) func addTestimonial(name : Text, location : Text, rating : Nat, review : Text, service : Text) : async () {
    let date = Time.now();
    let id = date.toText();
    let testimonial : Testimonial = {
      name;
      location;
      rating;
      review;
      service;
      date;
    };
    testimonials.add(id, testimonial);
  };

  public query ({ caller }) func getAllContacts() : async [ContactSubmission] {
    contactIdGen.values().toArray().sort();
  };

  public query ({ caller }) func getAllBookings() : async [Booking] {
    bookings.values().toArray().sort();
  };

  public query ({ caller }) func getAllBlogPosts() : async [BlogPost] {
    blogPosts.values().toArray().sort(BlogPost.compareByDate);
  };

  public query ({ caller }) func getAllTestimonials() : async [Testimonial] {
    testimonials.values().toArray().sort();
  };

  public query ({ caller }) func getPostsByCategory(category : Text) : async [BlogPost] {
    blogPosts.values().toArray().filter(func(post) { post.category == category }).sort(BlogPost.compareByDate);
  };

  public query ({ caller }) func getPostBySlug(slug : Text) : async ?BlogPost {
    blogPosts.get(slug);
  };

  public query ({ caller }) func getTestimonialsByService(service : Text) : async [Testimonial] {
    testimonials.values().toArray().filter(func(testimonial) { testimonial.service == service }).sort();
  };

  // Initialize sample blog posts and testimonials
  system func preupgrade() {};
  system func postupgrade() {
    let currentTime = Time.now();
    blogPosts.add(
      "canadian-immigration-guide",
      {
        title = "The Ultimate Guide to Canadian Immigration";
        slug = "canadian-immigration-guide";
        excerpt = "Learn everything you need to know about immigrating to Canada.";
        content = "Full content goes here...";
        category = "Canada";
        publishDate = currentTime - 500_000_000;
        author = "WorldGate Global";
      },
    );

    testimonials.add(
      "john-canada" # currentTime.toText(),
      {
        name = "John Doe";
        location = "Toronto, Canada";
        rating = 5;
        review = "WorldGate Global made my immigration process seamless!";
        service = "Canada Express Entry";
        date = currentTime - 1_000_000_000;
      },
    );
  };
};
