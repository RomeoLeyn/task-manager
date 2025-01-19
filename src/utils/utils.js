import randomColor from "randomcolor";

export const getProjectIcon = (type) => {
  switch (type) {
    case "DEVELOPMENT":
      return <i className="fa-solid fa-code"></i>;
    case "DESIGN":
      return <i className="fas fa-paint-brush"></i>;
    case "MARKETING":
      return <i className="fas fa-bullhorn"></i>;
    case "FINANCE":
      return <i className="fas fa-chart-line"></i>;
    case "ANALYTICS":
      return <i className="fas fa-chart-bar"></i>;
    case "EDUCATION":
      return <i className="fas fa-graduation-cap"></i>;
    case "SALES":
      return <i className="fas fa-shopping-cart"></i>;
    case "SOCIAL_MEDIA":
      return <i className="fas fa-share-alt"></i>;
    case "CONTENT_MANAGEMENT":
      return <i className="fas fa-file-alt"></i>;
    case "INNOVATION":
      return <i className="fas fa-lightbulb"></i>;
    case "CUSTOMER_SUPPORT":
      return <i className="fas fa-headset"></i>;
    case "HEALTH_FITNESS":
      return <i className="fas fa-heartbeat"></i>;
    case "LOGISTICS":
      return <i className="fas fa-truck"></i>;
    case "OCCUPATIONAL_SAFETY":
      return <i className="fas fa-shield-alt"></i>;
    case "SUSTAINABILITY":
      return <i className="fas fa-leaf"></i>;
    case "PROJECT_MANAGEMENT":
      return <i className="fas fa-tasks"></i>;
    case "LEGAL":
      return <i className="fas fa-gavel"></i>;
    case "REAL_ESTATE":
      return <i className="fas fa-building"></i>;
    case "ARTS_CULTURE":
      return <i className="fas fa-theater-masks"></i>;
    case "TRAVEL":
      return <i className="fas fa-plane"></i>;
    case "FASHION":
      return <i className="fas fa-tshirt"></i>;
    case "ENGINEERING":
      return <i className="fas fa-wrench"></i>;
    case "PHOTOGRAPHY":
      return <i className="fas fa-camera"></i>;
    case "VIDEO_PRODUCTION":
      return <i className="fas fa-video"></i>;
    case "RESEARCH_DEVELOPMENT":
      return <i className="fas fa-flask"></i>;
    case "CYBERSECURITY":
      return <i className="fas fa-lock"></i>;
    case "EVENTS":
      return <i className="fas fa-calendar-alt"></i>;
    case "CHARITY":
      return <i className="fas fa-hands-helping"></i>;
    case "AUTOMOTIVE":
      return <i className="fas fa-car"></i>;
    case "FOOD":
      return <i className="fas fa-utensils"></i>;
    default:
      return <i className="fas fa-briefcase"></i>;
  }
};

export const getRandomColor = () => {
  return randomColor();
}

export const isColorLight = (color) => {
  const rgb = parseInt(color.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
  return brightness > 150;
};

export const getErrorImage = (errorStatusCode) => {
  const defaultPath = "../../img/";
  console.log(errorStatusCode);
  
  switch (errorStatusCode) {
    case "400":
      return defaultPath + "error400.png";
    case "401":
      return defaultPath + "error401.png";
    case "403":
      return defaultPath + "error403.png";
    case "404":
      return defaultPath + "error404.png";
    case "500":
      return defaultPath + "error500.png";
    case "503":
      return defaultPath + "error503.png";
    default:
      return defaultPath + "errorUndefined.png";
  }
}

export const freezeWindow = () => {
  document.body.classList.add("frozen");
}

export const unfreezeWindow = () => {
  document.body.classList.remove("frozen");
}

export const getTaskPriorityColor = (priority) => {
  switch (priority) {
    case "low":
      return "green";
    case "medium":
      return "gold";
    case "high":
      return "red";
    default:
      return "blue";
  }
}

export const getColumnIcon = (id) => {
  switch (id) {
    case "todo":
      return <i className="fas fa-tasks"></i>;
    case "in-progress":
      return <i className="fas fa-spinner"></i>;
    case "in-review":
      return <i className="fas fa-edit"></i>;
    case "done":
      return <i className="fas fa-check"></i>;
    default:
      return <i className="fas fa-tasks"></i>;
  }
}