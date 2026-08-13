# Inventory Management System

A lightweight, responsive client-side web application for managing inventory items. This application allows users to track item stock levels, add new inventory entries, and remove items directly from the dashboard view without requiring a backend database.

## Live Demo

The project is deployed and available live at:
[https://is-project-2026.github.io/inventory-management-147915/]

## Features

- **Dashboard Summary**: Real-time metrics displaying total items, low stock alerts, out of stock items, and category counts.
- **Inventory Data Table**: Displays inventory items with details including item name, SKU, category, quantity, stock status badge, and action controls.
- **Item Management**:
  - Add new items using the interactive form (automatically calculates stock status).
  - Delete entries dynamically from the table with instant summary updates.
- **Responsive Layout**: Designed for seamless display across desktop and mobile screens with horizontal scrolling support for tables on narrow viewports.

## Technologies Used

- **HTML5**: Semantic document markup and structure.
- **CSS3**: Custom layout using Flexbox and CSS Grid, custom properties (`:root`), and responsive media queries.
- **JavaScript (ES6+)**: DOM manipulation, event handling, dynamic calculations, and event delegation.
- **Git & GitHub Pages**: Version control workflow and static site hosting.

## Project Structure

```
├── index.html     # Main HTML document structure
├── style.css      # Styling, layout, and responsive media queries
├── script.js     # DOM interaction and form/table logic
└── README.md      # Project documentation
```
