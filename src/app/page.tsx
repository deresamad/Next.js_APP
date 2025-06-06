import Image from "next/image";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Next.js Application</h1>
      <p>
        This is a demonstration of various React and Next.js concepts including:
      </p>
      <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
        <li>Component Creation and Composition</li>
        <li>State Management</li>
        <li>Event Handling</li>
        <li>Conditional Rendering</li>
        <li>Styling with CSS Modules</li>
      </ul>
      <p>
        Feel free to explore the different pages using the navigation menu above.
        You can:
      </p>
      <ul style={{ marginLeft: '2rem' }}>
        <li>Manage your tasks in the Todo List</li>
        <li>Update your preferences in the Profile section</li>
      </ul>
    </div>
  );
}
