
Frontend developmentimage Grid

1. install node_module "npm install"
2. start the project "npm start"
*Note* - Node js installation is important to run to given commands to check the output

Defination Of Project:

In this project, This is a reusable React component for displaying a grid of documents with drag-and-drop functionality. The component fetches data from a JSON file and renders a list of documents with thumbnails. Users can click on a document to view a larger image, and reorder the documents by dragging and dropping them

Features:
1. Fetches data from a JSON file
2. Renders a list of documents with thumbnails
3. Supports drag-and-drop reordering of documents
4. Displays a larger image when a document is clicked
5. Handles loading state with a loading indicator
6. Debugging the issues
7. Responsive the content with media queries

Components:
1. DocumentGrid: The main component that renders the document grid
2. Thumbnail: A reusable component for displaying a loading indicator
3. ImageOverlay: A reusable component for displaying a larger image
   
Hooks:
1. useState: Used to manage the component's state, including the list of documents, loading state, and selected image
2. useEffect: Used to fetch data from the JSON file when the component mounts
   
