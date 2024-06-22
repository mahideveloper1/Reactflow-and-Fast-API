# Pipeline Project

Welcome to the Pipeline Project, an application built using ReactFlow for the frontend and FastAPI for the backend. This project aims to provide a seamless and efficient way to create, manage, and visualize pipelines.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

This project integrates ReactFlow for creating and visualizing complex workflows in the frontend with FastAPI to manage backend services and APIs. Together, they form a robust pipeline management tool.

## Features

- **Intuitive UI**: Utilize ReactFlow's drag-and-drop interface to create and manage pipelines easily.
- **FastAPI Backend**: A high-performance backend to handle API requests and data processing.
- **Scalable Architecture**: Designed to scale and handle complex workflows efficiently.
- **Real-time Updates**: Reflect changes immediately with a responsive interface.
- **API Endpoints**: Comprehensive API to interact programmatically with the pipeline.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. [Download Node.js](https://nodejs.org/)
- **Python**: Ensure you have Python 3.7+ installed. [Download Python](https://www.python.org/downloads/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/mahideveloper1/Reactflow-and-Fast-API
   ```

2. **Frontend Setup**:

   ```bash
   cd frontend
   npm install
   ```

3. **Backend Setup**:
   ```bash
   cd ../backend
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```

### Running the Project

1. **Start the backend server**:

   ```bash
   cd backend
   uvicorn main:app --reload
   ```

2. **Start the frontend server**:

   ```bash
   cd ../frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

1. **Creating a Pipeline**:

   - Use the ReactFlow interface to drag and drop nodes.
   - Connect nodes to define the workflow.
   - Can create dynamic handles of nodes by using text in format {{text}}

2. **Managing Pipelines**:
   - Can calculate no of Edges , Nodes and can tell whether the nodes structure is Directed Acyclic Graph (DAG) or not.
   - Utilize the backend APIs to programmatically handle pipelines.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to:

- **GitHub**: https://github.com/mahideveloper1
