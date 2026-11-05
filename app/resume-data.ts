export type Language = 'en' | 'zh';

export type ResumeContent = {
  languageName: string;
  nav: {
    overview: string;
    education: string;
    project: string;
    competitions: string;
    skills: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    greeting: string;
    name: string;
    formalName: string;
    tagline: string;
    about: string;
    currentLabel: string;
    currentValue: string;
    profileLabel: string;
    focus: string[];
  };
  actions: { email: string; github: string };
  education: {
    kicker: string;
    title: string;
    description: string;
    school: string;
    degree: string;
    date: string;
  };
  project: {
    kicker: string;
    title: string;
    description: string;
    items: Array<{
      name: string;
      kind: string;
      stack: string[];
      bullets: string[];
    }>;
  };
  competitions: {
    kicker: string;
    title: string;
    description: string;
    awardLabel: string;
    items: Array<{ name: string; date: string; award?: string; bullets: string[] }>;
  };
  skills: {
    kicker: string;
    title: string;
    description: string;
    groups: Array<{ title: string; items: Array<{ name: string; level?: string }> }>;
  };
  contact: {
    kicker: string;
    title: string;
    description: string;
    emailNote: string;
    githubNote: string;
  };
  footer: string;
};

export const contact = {
  email: 'ChenYuKuen66@outlook.com',
  githubLabel: 'github.com/Kenkencs',
  githubUrl: 'https://github.com/Kenkencs',
};

export const resumeContent: Record<Language, ResumeContent> = {
  en: {
    languageName: 'English',
    nav: {
      overview: 'Overview',
      education: 'Education',
      project: 'Projects',
      competitions: 'Competitions',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Computer Science · CityUHK',
      greeting: "Hi, I'm",
      name: 'Ken Chen',
      formalName: 'Chen Yu Kuen',
      tagline: 'I build practical technology at the intersection of AI, IoT, and software engineering.',
      about:
        'I am a Computer Science student at City University of Hong Kong, interested in turning emerging technology into clear, useful products. My work spans LLM applications, connected devices, and user-centred software.',
      currentLabel: 'Currently',
      currentValue: 'B.Sc. Computer Science @ CityUHK',
      profileLabel: 'Profile / 01',
      focus: ['AI Apps', 'Product Delivery', 'Software Eng.'],
    },
    actions: { email: 'Email me', github: 'View GitHub' },
    education: {
      kicker: '01 / Foundation',
      title: 'Education',
      description: 'Building a strong foundation in computer science and practical problem-solving.',
      school: 'City University of Hong Kong',
      degree: 'B.Sc. in Computer Science',
      date: 'Sep 2025 — Expected 2029',
    },
    project: {
      kicker: '02 / Selected work',
      title: 'Projects',
      description: 'AI products designed to turn complex technology and real-world data into useful outcomes.',
      items: [
        {
          name: 'iAsk',
          kind: 'AI Digital Literacy Assistant',
          stack: ['Python', 'Streamlit', 'LangChain', 'OpenAI API', 'SerpAPI'],
          bullets: [
            'Built an LLM-powered digital assistant for users with low technical literacy, integrating conversational memory, voice input, and personalized onboarding.',
            'Designed structured prompt pipelines to clarify vague questions, keep responses relevant to technology topics, and improve answer quality for beginners.',
            'Integrated real-time web search through a LangChain ReAct agent and SerpAPI, combining retrieved information with LLM-generated troubleshooting guidance.',
            'Developed a proficiency quiz to segment beginner and experienced users and adapt the product experience to their needs.',
          ],
        },
        {
          name: 'Agentic Product Analyst',
          kind: 'AI-Powered User Feedback Analysis System',
          stack: [
            'Python',
            'LangChain',
            'LangGraph',
            'OpenAI Agents SDK',
            'DeepSeek API',
            'RAG',
            'Sentence Transformers',
          ],
          bullets: [
            'Built an agentic product-analysis system that analyzes user feedback and dynamically decides whether to retrieve product evidence, invoke tools, or answer directly, generating grounded product insights and recommendations.',
            'Developed a semantic RAG pipeline with embeddings, similarity search, Top-K retrieval, and relevance filtering, enabling the agent to retrieve relevant product feedback while refusing unsupported conclusions when evidence is insufficient.',
            'Designed stateful tool-calling workflows with session memory and LangGraph orchestration, separating LLM reasoning, deterministic retrieval, and application logic for more reliable, maintainable, and debuggable agent behavior.',
            'Built an evaluation and failure-analysis framework for tool-selection accuracy, retrieval quality, groundedness, and latency, including tests for hallucination, redundant agent loops, and indirect prompt injection.',
          ],
        },
        {
          name: 'Frontline',
          kind: 'Workplace Knowledge AI Agent for SMEs',
          stack: [
            'TypeScript',
            'React',
            'Node.js',
            'Vite',
            'RAG',
            'REST APIs',
            'JSON Schema',
            'SQLite / D1',
            'Drizzle',
          ],
          bullets: [
            'Built a full-stack workplace knowledge AI agent for SMEs, using a modular 1+2 workflow comprising Main, Knowledge, and Risk agents to coordinate retrieval, risk checks, and response validation, producing sourced replies or structured Action Cards with operational steps and escalation guidance.',
            'Implemented keyword-based RAG with policy-version controls, filtering documents by employee role, revision, approval status, and review date to retrieve up to four relevant excerpts; verified citations against source records and surfaced clarification or manager-review prompts when evidence was insufficient.',
            'Designed an AIProvider abstraction layer with adapters for OpenAI, Anthropic, DeepSeek, and Kimi, standardising structured JSON responses and runtime validation while keeping credentials on the backend and enabling provider changes without frontend modifications.',
            'Developed a persistent FAQ review and knowledge-reuse workflow using SQLite / D1, parameterised SQL, and Drizzle migrations; integrated published answers into FAQs, the knowledge base, and retrieval, with 142 automated tests covering retrieval, risk rules, API errors, provider contracts, and storage behaviour.',
          ],
        },
      ],
    },
    competitions: {
      kicker: '03 / Applied learning',
      title: 'Competitions',
      description: 'Hands-on challenges across software, IoT, robotics, and public education.',
      awardLabel: 'Award',
      items: [
        {
          name: 'PolyU Engineering Project Competition 2023',
          date: 'Jul 2023',
          award: '2nd Runner-up',
          bullets: [
            'Developed a Python program to retrieve and process JSON weather data from the Hong Kong Observatory.',
            'Built an IoT system with a Raspberry Pi Pico W and MQTT server for remote control and monitoring of home devices on the same local network.',
          ],
        },
        {
          name: 'STEM Workshops and Competition for District Cooling System',
          date: 'Oct 2022 — Mar 2023',
          award: '2nd Runner-up',
          bullets: ['Developed an educational Python Q&A game with Pygame.'],
        },
        {
          name: 'Greater Bay Area STEM/AI Challenge',
          date: 'Jul 2022 — Sep 2022',
          bullets: [
            'Developed a program enabling a smart car and UAV to operate autonomously, recognize instructions along the racecourse, and navigate obstacles.',
          ],
        },
      ],
    },
    skills: {
      kicker: '04 / Toolkit',
      title: 'Skills',
      description: 'A growing toolkit for turning ideas into working software.',
      groups: [
        {
          title: 'Programming',
          items: [
            { name: 'Python', level: 'Intermediate' },
            { name: 'HTML5 · CSS3 · JavaScript', level: 'Intermediate' },
            { name: 'C / C++', level: 'Beginner' },
            { name: 'Java', level: 'Beginner' },
          ],
        },
        {
          title: 'AI & development',
          items: [
            { name: 'LangChain · OpenAI API' },
            { name: 'Prompt design', level: 'Intermediate' },
            { name: 'Claude Code · Codex', level: 'Beginner' },
          ],
        },
        {
          title: 'Tools & communication',
          items: [
            { name: 'Word · Excel · PowerPoint', level: 'Intermediate' },
            { name: 'English', level: 'IELTS Band 7.0' },
          ],
        },
      ],
    },
    contact: {
      kicker: '05 / Contact',
      title: "Let's build something useful.",
      description: 'For internships, projects, or a conversation about technology, feel free to get in touch.',
      emailNote: 'Best for opportunities and collaborations',
      githubNote: 'Projects, experiments, and code',
    },
    footer: 'Designed and built for Ken Chen.',
  },
  zh: {
    languageName: '中文',
    nav: {
      overview: '简介',
      education: '教育',
      project: '项目',
      competitions: '比赛',
      skills: '能力',
      contact: '联系',
    },
    hero: {
      eyebrow: '计算机科学 · 香港城市大学',
      greeting: '你好，我是',
      name: '陈宇权',
      formalName: 'Ken Chen',
      tagline: '专注于 AI、物联网与软件工程，用技术解决真实问题。',
      about:
        '我就读于香港城市大学计算机科学专业，乐于把新兴技术转化为清晰、实用的产品。我的实践涵盖大语言模型应用、智能硬件以及以用户为中心的软件开发。',
      currentLabel: '目前',
      currentValue: '香港城市大学 · 计算机科学学士',
      profileLabel: '个人档案 / 01',
      focus: ['AI 应用', '产品落地', '软件工程'],
    },
    actions: { email: '发送邮件', github: '查看 GitHub' },
    education: {
      kicker: '01 / 学习基础',
      title: '教育经历',
      description: '持续夯实计算机科学基础，并用实践解决真实问题。',
      school: '香港城市大学',
      degree: '计算机科学学士',
      date: '2025 年 9 月 — 预计 2029 年',
    },
    project: {
      kicker: '02 / 代表项目',
      title: '项目经历',
      description: '通过 AI 产品将复杂技术与真实数据转化为清晰、实用的成果。',
      items: [
        {
          name: 'iAsk',
          kind: 'AI 数字素养助手',
          stack: ['Python', 'Streamlit', 'LangChain', 'OpenAI API', 'SerpAPI'],
          bullets: [
            '面向数字技术基础较弱的用户设计并开发 LLM 智能助手，支持多轮对话记忆、语音输入及个性化引导。',
            '设计结构化 Prompt 工作流，对用户的模糊问题进行澄清，限制模型回答范围，并提升初学者的使用体验与回答质量。',
            '基于 LangChain ReAct Agent 与 SerpAPI 接入实时网络搜索，将检索结果与 LLM 生成的故障排查建议进行整合。',
            '设计用户能力测试，根据结果区分初学者与较熟练用户，并针对不同技术水平调整产品体验。',
          ],
        },
        {
          name: 'Agentic Product Analyst',
          kind: 'AI 智能产品分析系统',
          stack: [
            'Python',
            'LangChain',
            'LangGraph',
            'OpenAI Agents SDK',
            'DeepSeek API',
            'RAG',
            'Sentence Transformers',
          ],
          bullets: [
            '设计并开发面向用户反馈分析的 Agentic AI 产品分析系统，由 Agent 根据用户问题动态判断是否调用工具、检索产品数据或直接回答，并基于真实用户反馈生成产品洞察与优化建议。',
            '构建基于 Embedding 的语义 RAG 检索流程，结合相似度搜索、Top-K 检索及相关性阈值过滤，从用户反馈中提取相关证据，并在证据不足时避免生成缺乏依据的产品结论。',
            '基于 LangGraph 与 Session Memory 设计有状态的工具调用与 Agent 工作流，将 LLM 推理、确定性检索及应用逻辑进行模块化拆分，提升 Agent 系统的可靠性、可维护性与可调试性。',
            '搭建 Agent 评估与故障分析框架，对工具选择准确率、检索质量、回答 Groundedness、响应延迟等指标进行测试，并覆盖幻觉、重复工具调用及间接 Prompt Injection 等典型 Agent 失败场景。',
          ],
        },
        {
          name: 'Frontline',
          kind: '面向中小企业的一线工作知识 AI Agent',
          stack: [
            'TypeScript',
            'React',
            'Node.js',
            'Vite',
            'RAG',
            'REST APIs',
            'JSON Schema',
            'SQLite / D1',
            'Drizzle',
          ],
          bullets: [
            '设计并开发面向中小企业的全栈工作知识 AI Agent，构建由 Main Agent、Knowledge Agent 与 Risk Agent 组成的 1+2 模块化工作流，协调知识检索、风险检查与响应验证，将员工问题转化为普通回复或包含操作步骤、来源及经理或 Mentor 升级提示的 Action Card。',
            '实现基于关键词匹配的 RAG 检索与政策版本控制，结合员工角色、文档版本、审批状态及复审日期筛选知识，返回最多 4 条相关片段；校验引用标识与原始内容，并在证据不足时提示补充信息或由经理核实，支持可追溯的工作指导。',
            '构建 AIProvider 接口与多供应商适配层，封装 OpenAI、Anthropic、DeepSeek 与 Kimi 的请求差异，统一结构化 JSON 响应及运行时验证；通过后端环境变量管理密钥，支持切换模型供应商而无需修改前端。',
            '搭建 SQLite / D1 的 FAQ 审核与知识复用流程，使用参数化 SQL 和 Drizzle 迁移维护数据结构，使审核后的答案进入 FAQ、知识库与检索流程；通过 142 项自动化测试验证检索、风险规则、API 异常处理、供应商接口及存储行为。',
          ],
        },
      ],
    },
    competitions: {
      kicker: '03 / 实践学习',
      title: '比赛经历',
      description: '在软件、物联网、机器人与科普领域中把想法转化为成果。',
      awardLabel: '奖项',
      items: [
        {
          name: '香港理工大学工程项目比赛 2023',
          date: '2023 年 7 月',
          award: '季军',
          bullets: [
            '使用 Python 获取并处理香港天文台（HKO）提供的 JSON 格式天气数据。',
            '基于 Raspberry Pi Pico W 与 MQTT Server 搭建物联网系统，实现同一局域网下家居设备的远程控制及状态监测。',
          ],
        },
        {
          name: '区域供冷系统 STEM 工作坊及比赛',
          date: '2022 年 10 月 — 2023 年 3 月',
          award: '季军',
          bullets: ['使用 Python 与 Pygame 开发科普问答游戏。'],
        },
        {
          name: '粤港澳大湾区 STEM/AI 挑战赛',
          date: '2022 年 7 月 — 2022 年 9 月',
          bullets: ['开发程序，使智能小车与无人机能够自主运行、识别赛道上的指令并跨越障碍。'],
        },
      ],
    },
    skills: {
      kicker: '04 / 技术栈',
      title: '能力',
      description: '持续扩展将想法落地为软件产品的能力。',
      groups: [
        {
          title: '编程语言',
          items: [
            { name: 'Python', level: '中级' },
            { name: 'HTML5 · CSS3 · JavaScript', level: '中级' },
            { name: 'C / C++', level: '入门' },
            { name: 'Java', level: '入门' },
          ],
        },
        {
          title: 'AI 与开发',
          items: [
            { name: 'LangChain · OpenAI API' },
            { name: 'Prompt Design', level: '中级' },
            { name: 'Claude Code · Codex', level: '入门' },
          ],
        },
        {
          title: '工具与沟通',
          items: [
            { name: 'Word · Excel · PowerPoint', level: '中级' },
            { name: '英文能力', level: 'IELTS 7.0' },
          ],
        },
      ],
    },
    contact: {
      kicker: '05 / 联系方式',
      title: '期待一起做些有用的事。',
      description: '如果你有实习机会、合作项目，或想聊聊技术，欢迎与我联系。',
      emailNote: '适合实习机会与项目合作',
      githubNote: '查看项目、实验与代码',
    },
    footer: '为 Ken Chen 设计与开发。',
  },
};
