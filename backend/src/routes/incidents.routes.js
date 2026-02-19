import express from "express";
import multer from "multer";
import { listAll, findById, createIncident, updateStatus } from "../store/incidents.store.js";
import { parseCsvBuffer } from "../utils/csv.js";
import { validateCreateIncident, validateStatusChange } from "../utils/validate.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Get all incidents
router.get("/", (req, res) => {
  const showArchived = req.query.showArchived === "true";
  res.json(listAll(showArchived));
});

// Get incident by id
router.get("/:id", (req, res) => {
  const incident = findById(req.params.id);
  if (!incident) return res.status(404).json({ error: "Incident not found" });
  res.json(incident);
});

// Create incident
router.post("/", (req, res) => {
  try {
    console.log("POST /api/incidents body:", req.body); 
    const result = validateCreateIncident(req.body);
    if (!result.ok) return res.status(400).json({ error: result.errors });
    const incident = createIncident(result.value);
    res.status(201).json(incident);
  } catch (e) {
    console.error("Error in POST /api/incidents:", e);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update status
router.patch("/:id/status", (req, res) => {
  try {
    const incident = findById(req.params.id);
    if (!incident) return res.status(404).json({ error: "Incident not found" });

    const check = validateStatusChange(incident.status, req.body.status);
    if (!check.ok) return res.status(400).json({ error: check.error });

    const updated = updateStatus(incident.id, check.next);
    res.json(updated);
  } catch (e) {
    console.error("Error in PATCH /api/incidents/:id/status", e);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Bulk CSV upload
router.post("/bulk-upload", upload.single("file"), async (req, res) => {
  try {
    const records = await parseCsvBuffer(req.file.buffer);

    let created = 0;
    let skipped = 0;
    let rowErrors = [];

    records.forEach((row, index) => {
      const result = validateCreateIncident(row);
      if (!result.ok) {
        skipped++;
        rowErrors.push({ row: index + 1, errors: result.errors });
        return;
      }
      createIncident(result.value);
      created++;
    });

    res.json({
      totalRows: records.length,
      created,
      skipped,
      rowErrors
    });
  } catch (e) {
    console.error("Error in /bulk-upload:", e);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;

