# Next.js Application

This is a modern Next.js application demonstrating various React and Next.js concepts. The application features a clean, responsive design with dark mode support and includes three main components: Navigation, Todo List, and User Profile.

## Features

### 1. Home Page
- Welcome screen with overview of application features
- Clean, modern UI with responsive design
- Navigation menu for easy access to all sections

![Home Page](/public/screenshots/home.png)

### 2. Todo List
- Add and delete todo items
- Clean interface for task management
- Persistent state management
- Interactive UI elements

![Todo List](/public/screenshots/todo.png)

### 3. User Profile
- User information management
- Theme selection (Light/Dark mode)
- Notification preferences
- Settings persistence

![User Profile](/public/screenshots/profile.png)

## Technical Implementation

The application demonstrates the following concepts:

1. **Component Creation and Composition** (2 points)
   - Modular component architecture
   - Reusable UI components
   - Props and component communication

2. **State Management** (2 points)
   - React useState and useEffect hooks
   - Local state management
   - Persistent state across sessions

3. **Event Handling** (2 points)
   - Form submissions
   - Button click handlers
   - Input change handlers

4. **Conditional Rendering** (2 points)
   - Dynamic UI updates
   - State-based content display
   - Loading states and error handling

5. **Styling** (1 point)
   - CSS Modules implementation
   - Responsive design
   - Dark mode support

6. **Application Structure** (1 point)
   - Clean project organization
   - Intuitive navigation
   - Best practices in file structure

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technologies Used

- Next.js 15.3.3
- React
- CSS Modules
- TypeScript

## Project Structure

```
my-next-app/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Todo.tsx
│   │   └── UserProfile.tsx
│   ├── page.tsx
│   ├── todos/
│   │   └── page.tsx
│   └── profile/
│       └── page.tsx
├── public/
│   └── screenshots/
└── styles/
    └── *.module.css
```

## Features and Implementation Details

### 1. Component Creation (2 points)
- Three functional components with props and TypeScript interfaces
- Modular design with separate styling modules
- Component documentation and type definitions

### 2. State Management (2 points)
- Todo component: Manages todo items state
- UserProfile: Handles form data and edit mode
- Navigation: Tracks active route

### 3. Event Handling (2 points)
- Form submissions in Todo and UserProfile
- Click handlers for todo completion
- Navigation state updates

### 4. Conditional Rendering (2 points)
- Profile view/edit mode toggle
- Todo completion status
- Success message displays
- Empty state handling

### 5. Styling (1 point)
- CSS Modules for component-specific styles
- Responsive design
- Dark mode support
- Modern UI elements and animations

### 6. Application Structure (1 point)
- Clear file organization
- Separation of concerns
- Type definitions
- Component modularity

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```