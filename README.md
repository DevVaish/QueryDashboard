# **QueryDashboard**

## **Overview**
**QueryDashboard** is a **React SPA** built to communicate with the **Gen AI Analytics tool**. The dashboard allows users to enter **natural language questions** and obtain **simulated answers with visualizations**, showcasing the ability of the tool to **democratize business unit data insights**.

## **Live Demo**
🔗 **[Click here to view the live project](https://dataquery.aafreen.live/)**

## **Features**
- **Natural Language Query Input:** Users can enter business questions in plain English.
- **Query Processing Simulation:** The application simulates query processing and provides predetermined responses.
- **Result Visualization:** Shows results in **bar and line charts** for easier data interpretation.
- **Query History:** Stores a history of user queries for reference.
- **Dark Mode Toggle:** Enables users to toggle between **light and dark themes** for better usability.

## **Technical Stack**
- **Frontend:** React.js with Next.js framework
- **State Management:** Redux
- **Styling:** Tailwind CSS
- **Data Visualization:** Chart.js
- **Icons:** Heroicons

## **Project Structure**

app/: Holds the main application components and pages.

components/: Reusable React components like QueryInput, QueryResults, and QueryHistory.

hooks/: Custom React hooks for handling component logic.

lib/: Utility libraries and functions.

public/: Static files such as images and fonts.

styles/: Global and component styles.


## **Key Components**
- **QueryInput:** Offers an input box where users can type in natural language queries.
- **QueryResults:** Renders results of the queries, which are processed and visualized.
- **QueryHistory:** Displays a history of past queries made by the user.

## **State Management**
The app employs **Redux** for managing global state. Actions and reducers are created to handle:
- **Query submissions**
- **Processing states**
- **Query history storage**

## **Dark Mode Implementation**
A **dark mode feature** is implemented using a **state variable (`darkMode`)**. The UI components dynamically change their styles according to this state, allowing for a **smooth transition between light and dark themes**.

