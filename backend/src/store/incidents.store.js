import { randomUUID } from "crypto";
import fs from "fs";
import path from "path";

const DATA_PATH = path.resolve("src/data/incidents.json");

function readFile() {
  try {
    const raw = fs.readFileSync(DATA_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeFile(data) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

export function listAll(showArchived = false) {
  const incidents = readFile();
  if (!showArchived) {
    return incidents.filter(i => i.status !== "ARCHIVED");
  }
  return incidents;
}

export function findById(id) {
  const incidents = readFile();
  return incidents.find(i => i.id === id);
}

export function createIncident(data) {
  const incidents = readFile();

  const incident = {
    id: randomUUID(),
    ...data,
    status: "OPEN",
    reportedAt: new Date().toISOString()
  };

  incidents.push(incident);
  writeFile(incidents);

  return incident;
}

export function updateStatus(id, status) {
  const incidents = readFile();
  const incident = incidents.find(i => i.id === id);
  if (!incident) return null;

  incident.status = status;
  writeFile(incidents);

  return incident;
}

