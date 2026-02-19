export function validateCreateIncident(data) {
  const { title, description, category, severity } = data;

  if (!title || !description || !category || !severity) {
    return { ok: false, error: "All fields are required" };
  }

  return {
    ok: true,
    value: { title, description, category, severity } 
  };
}


export function validateStatusChange(current, next) {
  const transitions = {
    OPEN: ["INVESTIGATING", "ARCHIVED"],
    INVESTIGATING: ["RESOLVED"],
    RESOLVED: ["ARCHIVED"],
    ARCHIVED: ["OPEN"]
  };

  if (!transitions[current] || !transitions[current].includes(next)) {
    return { ok: false, error: "Invalid status transition" };
  }

  return { ok: true, next };
}



