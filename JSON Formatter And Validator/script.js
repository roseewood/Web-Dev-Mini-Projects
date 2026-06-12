const jsonInput = document.getElementById("jsonInput");
const jsonOutput = document.getElementById("jsonOutput");
const statusMessage = document.getElementById("statusMessage");

const formatBtn = document.getElementById("formatBtn");
const minifyBtn = document.getElementById("minifyBtn");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");
const sampleBtn = document.getElementById("sampleBtn");

function setStatus(message) {
  statusMessage.textContent = message;
}

function formatJson() {
  try {
    const parsedJson = JSON.parse(jsonInput.value);
    jsonOutput.value = JSON.stringify(parsedJson, null, 2);
    setStatus("Valid JSON. Formatted successfully.");
  } catch (error) {
    jsonOutput.value = "";
    setStatus("Invalid JSON. Please check your input.");
  }
}

function minifyJson() {
  try {
    const parsedJson = JSON.parse(jsonInput.value);
    jsonOutput.value = JSON.stringify(parsedJson);
    setStatus("Valid JSON. Minified successfully.");
  } catch (error) {
    jsonOutput.value = "";
    setStatus("Invalid JSON. Please check your input.");
  }
}

function copyOutput() {
  if (jsonOutput.value === "") {
    setStatus("Nothing to copy yet.");
    return;
  }

  navigator.clipboard.writeText(jsonOutput.value);
  setStatus("Output copied to clipboard.");
}

function clearFields() {
  jsonInput.value = "";
  jsonOutput.value = "";
  setStatus("Cleared. Waiting for JSON input...");
}

function loadSampleJson() {
  jsonInput.value = JSON.stringify(
    {
      name: "Ali",
      role: "Full Stack Developer",
      skills: ["Java", "Spring Boot", "JavaScript"],
      active: true
    },
    null,
    2
  );

  jsonOutput.value = "";
  setStatus("Sample JSON loaded.");
}

formatBtn.addEventListener("click", formatJson);
minifyBtn.addEventListener("click", minifyJson);
copyBtn.addEventListener("click", copyOutput);
clearBtn.addEventListener("click", clearFields);
sampleBtn.addEventListener("click", loadSampleJson);