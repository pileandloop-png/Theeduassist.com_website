import re

with open('src/data/services.ts', 'r') as f:
    content = f.read()

# Replace Custom eLearning Development
content = re.sub(
    r"(title:\s*'Custom eLearning Development',\s*description:\s*)'.*?'",
    r"\1'Create engaging, tailor-made eLearning courses designed around your goals, content, and learners’ needs.'",
    content
)

# Replace LMS Implementation
content = re.sub(
    r"(title:\s*'LMS Implementation & Migration',\s*description:\s*)'.*?'",
    r"\1'Set up, organize, or move your LMS with clearer structure, safer migration planning, and smoother learner access.'",
    content
)

# Replace AI-Powered eLearning
content = re.sub(
    r"(title:\s*'AI-Powered eLearning',\s*description:\s*)'.*?'",
    r"\1'Use AI-supported learning workflows to plan, structure, and improve digital learning experiences with human quality review.'",
    content
)

# Replace Gamified Learning
content = re.sub(
    r"(title:\s*'Gamified Learning',\s*description:\s*)'.*?'",
    r"\1'Add interaction, challenges, and reward-based learning elements that improve motivation without distracting from outcomes.'",
    content
)

# Replace Microlearning
content = re.sub(
    r"(title:\s*'Microlearning & Microsimulations',\s*description:\s*)'.*?'",
    r"\1'Deliver focused lessons and practice-based scenarios through bite-sized modules and realistic simulations.'",
    content
)

# Replace Legacy Content
content = re.sub(
    r"(title:\s*'Legacy Content Conversion',\s*description:\s*)'.*?'",
    r"\1'Modernize old Flash, PowerPoint, PDF, or classroom material into mobile-friendly digital learning content.'",
    content
)

# Replace Dashboards
content = re.sub(
    r"(title:\s*'Dashboards & Analytics',\s*description:\s*)'.*?'",
    r"\1'Use dashboards and learning insights to track progress, identify gaps, and improve training decisions.'",
    content
)

with open('src/data/services.ts', 'w') as f:
    f.write(content)
