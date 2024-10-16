export const getProjectIcon = (type) => {
  switch (type) {
    case "development":
      return <i className="fa-solid fa-code"></i>;
    case "design":
      return <i className="fas fa-paint-brush"></i>;
    case "marketing":
      return <i className="fas fa-bullhorn"></i>;
    case "finance":
      return <i className="fas fa-chart-line"></i>;
    case "analytics":
      return <i className="fas fa-chart-bar"></i>;
    case "education":
      return <i className="fas fa-graduation-cap"></i>;
    case "sales":
      return <i className="fas fa-shopping-cart"></i>;
    case "social_media":
      return <i className="fas fa-share-alt"></i>;
    case "content_management":
      return <i className="fas fa-file-alt"></i>;
    case "innovation":
      return <i className="fas fa-lightbulb"></i>;
    case "customer_support":
      return <i className="fas fa-headset"></i>;
    case "health_fitness":
      return <i className="fas fa-heartbeat"></i>;
    case "logistics":
      return <i className="fas fa-truck"></i>;
    case "occupational_safety":
      return <i className="fas fa-shield-alt"></i>;
    case "sustainability":
      return <i className="fas fa-leaf"></i>;
    case "project_management":
      return <i className="fas fa-tasks"></i>;
    case "legal":
      return <i className="fas fa-gavel"></i>;
    case "real_estate":
      return <i className="fas fa-building"></i>;
    case "arts_culture":
      return <i className="fas fa-theater-masks"></i>;
    case "travel":
      return <i className="fas fa-plane"></i>;
    case "fashion":
      return <i className="fas fa-tshirt"></i>;
    case "engineering":
      return <i className="fas fa-wrench"></i>;
    case "photography":
      return <i className="fas fa-camera"></i>;
    case "video_production":
      return <i className="fas fa-video"></i>;
    case "research_development":
      return <i className="fas fa-flask"></i>;
    case "cybersecurity":
      return <i className="fas fa-lock"></i>;
    case "events":
      return <i className="fas fa-calendar-alt"></i>;
    case "charity":
      return <i className="fas fa-hands-helping"></i>;
    case "automotive":
      return <i className="fas fa-car"></i>;
    case "food":
      return <i className="fas fa-utensils"></i>;
    default:
      return <i className="fas fa-briefcase"></i>;
  }
};

export const isColorLight = (color) => {
  const rgb = parseInt(color.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
  return brightness > 150;
};
