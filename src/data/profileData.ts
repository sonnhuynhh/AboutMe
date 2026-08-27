export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'Core Backend' | 'Database & Caching' | 'Architecture & DevOps' | 'Tools & Web';
  iconName: string;
  description: string;
  highlight?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
  architectureHighlights: string[];
  starsCount?: number;
  forksCount?: number;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export const PROFILE_DATA = {
  name: "[Tên Của Bạn]", // Placeholder - Điền tên bạn tại đây
  role: "Java Backend Engineer & Spring Boot Specialist",
  tagline: "Xây dựng hệ thống Backend hiệu năng cao, mở rộng quy mô với Java Spring Boot & Microservices Architecture.",
  bio: "Tôi là một Backend Engineer chuyên sâu về hệ sinh thái Java và Spring Boot. Đam mê thiết kế các hệ thống phân tán chịu tải cao, tối ưu hóa truy vấn cơ sở dữ liệu, áp dụng kiến trúc Microservices và bảo mật chuẩn OAuth2/JWT. Luôn sẵn sàng chinh phục các bài toán kỹ thuật phức tạp.",
  location: "Hà Nội / TP. Hồ Chí Minh, Việt Nam",
  email: "your.email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  telegram: "https://t.me/your-telegram",
  avatarUrl: "/avatar.png",
  cvDownloadUrl: "#",

  stats: [
    { label: "Năm kinh nghiệm Java", value: "3+" },
    { label: "Dự án Spring Boot", value: "12+" },
    { label: "Microservices Deployed", value: "20+" },
    { label: "Test Coverage", value: "85%+" },
  ],

  skills: [
    // Core Java & Spring Ecosystem
    {
      name: "Java 17/21",
      level: 95,
      category: "Core Backend",
      iconName: "Coffee",
      description: "OOP, Multithreading, Concurrency, Virtual Threads, Stream API, Lambda, Memory Management",
      highlight: true
    },
    {
      name: "Spring Boot 3.x",
      level: 95,
      category: "Core Backend",
      iconName: "Zap",
      description: "Auto-configuration, Spring MVC, REST APIs, Actuator, Profiles, Modular Monolith",
      highlight: true
    },
    {
      name: "Spring Security & JWT",
      level: 90,
      category: "Core Backend",
      iconName: "ShieldCheck",
      description: "Authentication, Authorization, OAuth2, OpenID Connect, RBAC, Rate Limiting",
      highlight: true
    },
    {
      name: "Spring Data JPA / Hibernate",
      level: 90,
      category: "Core Backend",
      iconName: "Database",
      description: "OR Mapping, Entity Lifecycle, QueryDSL, Native Queries, N+1 Optimization, Indexing",
      highlight: true
    },
    {
      name: "Spring Cloud",
      level: 85,
      category: "Core Backend",
      iconName: "Cloud",
      description: "API Gateway, Eureka Service Discovery, Feign Client, Resilience4j Circuit Breaker",
      highlight: true
    },

    // Database & Caching
    {
      name: "PostgreSQL / MySQL",
      level: 88,
      category: "Database & Caching",
      iconName: "Database",
      description: "ACID Transactions, Table Partitioning, Query Execution Plan Tuning, Liquibase/Flyway Migration"
    },
    {
      name: "Redis Caching",
      level: 85,
      category: "Database & Caching",
      iconName: "Server",
      description: "Session Management, Pub/Sub, Distributed Locking (Redlock), Cache Eviction Strategies"
    },
    {
      name: "Apache Kafka",
      level: 82,
      category: "Database & Caching",
      iconName: "Activity",
      description: "Event-driven Architecture, Producer/Consumer Patterns, Partition Tuning, Kafka Streams"
    },

    // Architecture & DevOps
    {
      name: "Microservices Architecture",
      level: 88,
      category: "Architecture & DevOps",
      iconName: "Layers",
      description: "Domain-Driven Design (DDD), Event-Driven Architecture, Distributed Tracing (Zipkin/Sleuth)"
    },
    {
      name: "Docker & Containerization",
      level: 85,
      category: "Architecture & DevOps",
      iconName: "Box",
      description: "Multi-stage Dockerfile, Docker Compose, Microservice Container Orchestration"
    },
    {
      name: "CI/CD & GitHub Actions",
      level: 80,
      category: "Architecture & DevOps",
      iconName: "GitBranch",
      description: "Automated Build Pipelines, JUnit 5 Testing, SonarQube Code Quality Analysis"
    },

    // Tools & Web Basics
    {
      name: "REST & gRPC APIs",
      level: 90,
      category: "Tools & Web",
      iconName: "Globe",
      description: "OpenAPI/Swagger, Postman, Protocol Buffers, Reactive WebFlux APIs"
    },
    {
      name: "React / Next.js Basics",
      level: 70,
      category: "Tools & Web",
      iconName: "Code2",
      description: "Frontend integration, SPA consuming Spring REST APIs, Component State Management"
    }
  ] as Skill[],

  projects: [
    {
      id: "prime-wallet",
      title: "PrimeWallet - E-Wallet Microservice Engine",
      description: "Hệ thống ví điện tử quy mô Microservice thiết kế bằng Java Spring Boot, hỗ trợ nạp/rút/chuyển tiền thời gian thực với độ an toàn giao dịch tuyệt đối.",
      longDescription: "Dự án Ví điện tử Backend giải quyết bài toán giao dịch tài chính bất đồng bộ, sử dụng cơ chế Khoá phân tán Redis (Redlock) và Transactional Outbox Pattern kết hợp Apache Kafka để tránh hiện tượng nạp/trừ tiền trùng lặp (Idempotency).",
      githubUrl: "https://github.com/your-username/prime-wallet-backend",
      liveUrl: "https://github.com/your-username/prime-wallet-backend",
      tags: ["Java 21", "Spring Boot 3", "Spring Security", "PostgreSQL", "Redis", "Kafka", "Docker"],
      architectureHighlights: [
        "Thiết kế theo chuẩn Clean Architecture & Domain-Driven Design (DDD)",
        "Đạt chuẩn Idempotency cho API giao dịch thanh toán",
        "Xử lý hàng đợi thanh toán bất đồng bộ qua Kafka đạt 5,000 TPS",
        "Tích hợp Prometheus & Grafana theo dõi độ trễ API"
      ],
      starsCount: 42,
      forksCount: 15,
      featured: true
    },
    {
      id: "auth-gateway-service",
      title: "Enterprise OAuth2 & Centralized Auth Service",
      description: "Dịch vụ xác thực tập trung & API Gateway cho hệ thống Microservices sử dụng Spring Cloud Gateway và Spring Authorization Server.",
      longDescription: "Service xác thực chuẩn doanh nghiệp, phát hành JWT token ngắn hạn kèm Refresh Token xoay vòng (Token Rotation), quản lý phân quyền RBAC và kiểm soát truy cập IP/Rate-Limiting bằng Redis.",
      githubUrl: "https://github.com/your-username/oauth2-auth-service",
      tags: ["Spring Boot", "Spring Cloud Gateway", "OAuth2 / OIDC", "JWT", "Redis", "Rate Limiting"],
      architectureHighlights: [
        "Tích hợp Spring Security OAuth2 Authorization Server",
        "Triển khai Redis Dynamic Rate-Limiter ngăn chặn DDoS API",
        "Hỗ trợ Single Sign-On (SSO) và Multi-factor Authentication (MFA)"
      ],
      starsCount: 28,
      forksCount: 8,
      featured: true
    },
    {
      id: "event-store-catalog",
      title: "High-Throughput E-Commerce Catalog Engine",
      description: "Hệ thống quản lý sản phẩm & tồn kho xử lý truy vấn tải cao kết hợp ElasticSearch và Redis Distributed Cache.",
      longDescription: "Backend dịch vụ thương mại điện tử giải quyết bài toán Flash Sale: ghi log thay đổi tồn kho vào Kafka, sync tức thì sang ElasticSearch để tìm kiếm siêu tốc trong vài millisecond.",
      githubUrl: "https://github.com/your-username/ecommerce-catalog-spring",
      tags: ["Java 17", "Spring WebFlux", "ElasticSearch", "Redis", "Kafka", "PostgreSQL"],
      architectureHighlights: [
        "Sử dụng Reactive WebFlux nâng cao khả năng xử lý truy vấn đồng thời",
        "ElasticSearch Fuzzy Search & Faceted Filter cho sản phẩm",
        "Cache-aside pattern tối ưu tỷ lệ Cache Hit lên 94%"
      ],
      starsCount: 35,
      forksCount: 11,
      featured: true
    },
    {
      id: "spring-boot-starter-template",
      title: "Production-Ready Spring Boot Boilerplate",
      description: "Bộ khung khởi tạo dự án Spring Boot chuẩn Production tích hợp sẵn Security, Swagger, Docker, CI/CD Actions và Unit Test samples.",
      longDescription: "Starter Kit dành cho lập trình viên Java Spring Boot với đầy đủ cấu hình Base Entity, Global Exception Handler, Response Wrapper, Liquibase Migration, Dockerfile tối ưu multi-stage.",
      githubUrl: "https://github.com/your-username/spring-boot-production-starter",
      tags: ["Spring Boot", "Liquibase", "Swagger/OpenAPI", "JUnit 5", "GitHub Actions"],
      architectureHighlights: [
        "Global Handling Error chuẩn RFC 7807 Problem Details",
        "Sẵn sàng triển khai Docker & CI/CD tự động test",
        "Cấu hình sẵn MapStruct và Lombok tối ưu code"
      ],
      starsCount: 64,
      forksCount: 22,
      featured: false
    }
  ] as Project[],

  experiences: [
    {
      id: "exp-1",
      role: "Senior Java Backend Engineer",
      company: "[Tên Công ty / Enterprise A]",
      period: "2024 - Hiện tại",
      location: "Hà Nội, Việt Nam",
      description: [
        "Chịu trách nhiệm thiết kế kiến trúc Backend và phát triển các dịch vụ Core Payment bằng Spring Boot 3.x.",
        "Tối ưu hóa hiệu năng truy vấn CSDL PostgreSQL, giảm thời gian phản hồi trung bình API từ 350ms xuống dưới 45ms.",
        "Thiết kế pipeline CI/CD tự động hóa kiểm thử và deploy containerized microservices lên Kubernetes."
      ],
      technologies: ["Java 21", "Spring Boot 3", "Spring Cloud", "Kafka", "PostgreSQL", "Redis", "Docker"]
    },
    {
      id: "exp-2",
      role: "Java Software Developer",
      company: "[Tên Công ty / Software House B]",
      period: "2022 - 2024",
      location: "TP. Hồ Chí Minh, Việt Nam",
      description: [
        "Tham gia xây dựng hệ thống quản lý giao dịch & hóa đơn điện tử phục vụ hơn 500k người dùng hàng tháng.",
        "Triển khai Spring Security tích hợp OAuth2 JWT cho chuỗi ứng dụng Web và Mobile Client.",
        "Viết Unit Test & Integration Test đạt độ bao phủ code 85%+ bằng JUnit 5 & Mockito."
      ],
      technologies: ["Java 17", "Spring Boot", "Spring Data JPA", "MySQL", "Redis", "RabbitMQ", "RESTful API"]
    }
  ] as Experience[],

  education: [
    {
      id: "edu-1",
      degree: "Cử nhân Công nghệ Thông tin / Khoa học Máy tính",
      institution: "[Tên Trường Đại học của Bạn]",
      period: "2019 - 2023",
      details: "Tốt nghiệp loại Giỏi. Chuyên ngành Kỹ thuật Phần mềm. Đề tài tốt nghiệp: Xây dựng hệ thống Microservices xử lý thanh toán tài chính trên Spring Boot."
    }
  ] as Education[],

  certifications: [
    "Oracle Certified Professional: Java SE 17 Developer",
    "AWS Certified Solutions Architect – Associate",
    "Spring Certified Professional (Broadcom/VMware)"
  ]
};
