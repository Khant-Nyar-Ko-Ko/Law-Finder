# LawFinder

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/lawfinder.git
   cd lawfinder
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Environment Variables

Ensure you have an `.env.local` file with the required API configuration if applicable.

## Project Structure

```
- components/
  - LawFinder.tsx
  - SearchInput.tsx
  - PostCard.tsx
  - Pagination.tsx
- lib/
  - api.ts
- pages/
  - index.tsx (HomePage)
```

## Approach

### 1. **Fetching Posts**

- The `fetchPosts` function retrieves data from an API.
- Data is stored in React state using `useState`.
- `useEffect` ensures posts are loaded when the component mounts.

### 2. **Search Functionality**

- The `SearchInput` component filters posts based on user input.
- `useState` and `.filter()` are used for real-time filtering.
- The search resets pagination to page 1 when a new term is entered.

### 3. **Pagination**

- Displays a limited number of posts per page (10 posts per page).
- Allows navigation between pages.
- Uses a dynamic range with `...` for better UX.

### 4. **Post Card & Popup**

- Posts are displayed using the `PostCard` component.
- Uses `framer-motion` for smooth animations.
- If a post is long, a 'See more' button triggers a modal popup.

## Technologies Used

- **Next.js / React** - Framework & UI development
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - UI icons

## Future Improvements

- Implement a backend for better data management.
- Add authentication and user roles.
- Enhance UI/UX with additional filters and sorting options.
