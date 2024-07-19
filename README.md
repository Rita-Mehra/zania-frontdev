
Frontend development part of image Grid

1. install node_module "npm install"
2. start the project "npm start"
*Note* - Node js installation is important to run to given commands to check the output

Defination Of Project:

In this project, This is a reusable React component for displaying a grid of documents with drag-and-drop functionality. The component fetches data from a JSON file and renders a list of documents with thumbnails. Users can click on a document to view a larger image, and reorder the documents by dragging and dropping them

Project Approach:
As I am a frontend design focused developer I have worked for,

Features:
1. Fetches data from a JSON file
2. Renders a list of documents with thumbnails
3. Supports drag-and-drop reordering of documents
4. Displays a larger image when a document is clicked
5. Handles loading state with a loading indicator

Components:
1. DocumentGrid: The main component that renders the document grid
2. Thumbnail: A reusable component for displaying a loading indicator
3. ImageOverlay: A reusable component for displaying a larger image
   
Hooks:
1. useState: Used to manage the component's state, including the list of documents, loading state, and selected image
2. useEffect: Used to fetch data from the JSON file when the component mounts
   
Libraries:
1. react-beautiful-dnd: Used for drag-and-drop functionality
   
How to Use
1. Import the DocumentGrid component into your Next.js page or component.
2. Pass in any necessary props, such as the URL of the JSON file.
3. Customize the component's styles and layout as needed.
4. Code Structure
5. The component is organized into the following sections:

Code Highlights:
1. The useEffect hook is used to fetch data from the JSON file when the component mounts.
2. The handleDragEnd function is used to update the state when a document is reordered.
3. The handleClick function is used to update the state when a document is clicked.


Tried the API part:

I have tried for the MSW API part and some of things in this given task is not possible without a server and deplyment which is not possible right now as I dont have any also I have add the drag and drop which only work after the deployment amd with a build.

