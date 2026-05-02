export const projectsData = [
    {
        id: 1,
        name: 'TaskFlow — Task Management REST API',
        description: 'A backend REST API for managing tasks, projects, and team assignments with enforced business rules and full CI/CD. Designed a layered architecture (Controller → Service → Repository) with DTOs separating the API contract from JPA entities. Implemented status lifecycle rules (TODO → IN_PROGRESS → DONE/CANCELLED), flexible multi-filter search, input validation, and a global exception handler returning structured 404/400/422 responses. Wrote integration tests against a real PostgreSQL using Testcontainers and MockMvc tests for the HTTP layer. Containerized with a multi-stage Dockerfile, automated tests via GitHub Actions, and deployed continuously to Render.',
        tools: ['Java 21', 'Spring Boot 4', 'PostgreSQL', 'Hibernate / Spring Data JPA', 'Flyway', 'Docker', 'Docker Compose', 'JUnit 5', 'Testcontainers', 'Maven', 'Git', 'GitHub Actions', 'Render'],
        code: 'https://github.com/mdsamialsohan/taskflow',
        role: 'Backend Developer',
        demo: 'https://taskflow-e4s5.onrender.com',
    },
    {
        id: 2,
        name: 'Sales Management System',
        description: 'A web platform to streamline sales operations, track inventory, and manage customer dues. Developed RESTful API with Laravel to handle sales, inventory, and customer data secured using Sanctum-based authentication. Built multi-page Next.js application leveraging dynamic routing and server-side rendering for fast data retrieval with dynamic dashboards, invoice views, and customer profiles.',
        tools: ['Laravel', 'NextJS', 'CSS', 'Tailwind CSS', 'REST API', 'MySQl', 'Sanctum', 'Git', 'CPanel', 'cron-job'],
        code: '',
        role: 'Full Stack Developer',
        demo: 'https://demo.ezdokani.com/',
    },
    {
        id: 3,
        name: 'Predicting stock market',
        description: 'In this project, I implemented various machine learning algorithms including LSTM, XGBoost, SVR, GRU, and Random Forest (RF) to forecast stock prices for 1 day, 1 week, and 1 month ahead using data from the Dhaka Stock Exchange (DSE). The analysis focused on three dominant companies, utilising data collected from January 2021 to January 2024. The results from all models were compared to identify the most effective model for predicting stock prices in the DSE.',
        tools: ['python', 'pandas', 'tensorflow','numpy', 'LSTM', 'XGBoost', 'SVR', 'GRU', 'RF'],
        role: 'Machine Learning Engineer',
        code: '',
        demo: 'https://github.com/mdsamialsohan/MScDissertation',
    },
    {
        id: 4,
        name: 'Employee Management System',
        description: 'A full-stack web application for managing employee data, built with React and Supabase. The system features secure authentication using Supabase Auth with Row Level Security (RLS) to ensure data protection. It includes a well-designed PostgreSQL schema with migrations and real-time updates managed via the Supabase CLI. Supabase Storage is used for uploading and managing employee documents, while Edge Functions handle automated backend tasks for improved efficiency and scalability.',
        tools: ['React', 'Supabase', 'PostgreSQL'],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://github.com/mdsamialsohan/EmployeeManagementFronend',
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },