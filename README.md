---

# Jejak Store

Jejak Store is a modern and full-featured e-commerce web application built with a powerful stack of technologies. It's designed to provide a seamless and user-friendly platform for selling shoes online.

**Live Demo:** [jejak-store.ffathur.my.id](https://jejak-store.ffathur.my.id/)

**GitHub Repository:** [github.com/fathurrahman20/jejak-store](https://github.com/fathurrahman20/jejak-store)

---

## About The Project

Jejak Store was created to deliver a complete e-commerce experience, from Browse products to secure checkout. The application leverages a modern, type-safe, and efficient technology stack to ensure a robust and scalable platform. Key features include user authentication, product management, a shopping cart, and an integrated payment gateway.

---

## Built With

This project is powered by a combination of cutting-edge tools and frameworks:

### Frontend

- **[Next.js](https://nextjs.org/)**: A React framework for building fast and scalable web applications.
- **[TypeScript](https://www.typescriptlang.org/)**: For strong typing and improved developer experience.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **[Shadcn UI](https://ui.shadcn.com/)**: A collection of beautifully designed, accessible, and customizable UI components.
- **[React Query](https://tanstack.com/query/latest)**: For fetching, caching, and managing server state in React.
- **[Zustand](https://zustand-demo.pmnd.rs/)**: A small, fast, and scalable state-management solution.
- **[Zod](https://zod.dev/)**: A TypeScript-first schema declaration and validation library.

### Backend & Database

- **[Prisma ORM](https://www.prisma.io/)**: A next-generation ORM for Node.js and TypeScript.
- **[Supabase](https://supabase.io/)**: An open-source Firebase alternative for building secure and scalable backends.
- **[PostgreSQL](https://www.postgresql.org/)**: A powerful, open-source object-relational database system.
- **[Lucia Auth](https://lucia-auth.com/)**: An authentication library for TypeScript projects, providing session-based authentication.

### Payments

- **[Xendit](https://www.xendit.co/)**: A leading payment gateway for processing transactions securely.

### Runtime

- **[Bun](https://bun.sh/)**: A fast, all-in-one JavaScript runtime.

---

## Getting Started

To get a local copy up and running, please follow these steps.

### Prerequisites

- Node.js (or Bun) installed
- A Supabase account and project
- A Xendit account for payment processing

### Installation

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/fathurrahman20/jejak-store.git
    ```

2.  **Navigate to the project directory:**

    ```sh
    cd jejak-store
    ```

3.  **Install dependencies:**

    ```sh
    bun install
    ```

4.  **Set up your environment variables:**
    Create a `.env.local` file in the root of the project and add your Supabase, Xendit, and other necessary credentials. You can use the `.env.example` file as a template.

5.  **Run the development server:**

    ```sh
    bun dev
    ```

The application should now be running on `http://localhost:3000`.

---
