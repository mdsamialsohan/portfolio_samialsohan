export const projectsData = [
    {
        id: 1,
        name: 'Sales Management System',
        description: 'A web platform to streamline sales operations, track inventory, and manage customer dues. Developed RESTful API with Laravel to handle sales, inventory, and customer data secured using Sanctum-based authentication. Built multi-page Next.js application leveraging dynamic routing and server-side rendering for fast data retrieval with dynamic dashboards, invoice views, and customer profiles.',
        tools: ['Laravel', 'NextJS', 'CSS', 'Tailwind CSS', 'REST API', 'MySQl', 'Sanctum', 'Git', 'CPanel', 'cron-job'],
        code: '',
        role: 'Full Stack Developer',
        demo: 'https://demo.ezdokani.com/',
    },
    {
        id: 2,
        name: 'Employee Management System',
        description: 'A full-stack web application for managing employee data, built with React and Supabase. The system features secure authentication using Supabase Auth with Row Level Security (RLS) to ensure data protection. It includes a well-designed PostgreSQL schema with migrations and real-time updates managed via the Supabase CLI. Supabase Storage is used for uploading and managing employee documents, while Edge Functions handle automated backend tasks for improved efficiency and scalability.',
        tools: ['React', 'Supabase', 'PostgreSQL'],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://github.com/mdsamialsohan/EmployeeManagementFronend',
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
        name: 'Analysing Sakila-a movie rental database with MySQL',
        description: "This project explores Sakila Database using SQL Magic (%%sql) in Jupyter Notebook while connecting to a MySQL database hosted on XAMPP. It includes various Data Manipulation (DML) and Aggregation queries, providing insights into customer rentals, payments, and movie statistics.",
        tools: ['MySQL', 'Jupyter Notebook', 'XAMPP', 'SQL Magic'],
        role: 'Backend Developer',
        code: '',
        demo: 'https://github.com/mdsamialsohan/SQL_Projects',
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