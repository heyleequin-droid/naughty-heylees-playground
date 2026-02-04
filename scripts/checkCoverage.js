const fs = require('fs');
const path = require('path');

const summaryPath = path.join(process.cwd(), 'coverage', 'coverage-summary.json');
if (!fs.existsSync(summaryPath)) {
  console.error(`Coverage summary not found at ${summaryPath}. Make sure tests ran with coverage.`);
  process.exit(1);
}

const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));

const thresholds = {
  statements: 85,
  branches: 80,
  lines: 85,
  functions: 85
};

const failures = [];
for (const [key, threshold] of Object.entries(thresholds)) {
  const actual = summary.total && summary.total[key] && summary.total[key].pct;
  if (typeof actual !== 'number') {
    failures.push(`${key}: no data`);
    continue;
  }
  if (actual < threshold) {
    failures.push(`${key}: ${actual}% < ${threshold}%`);
  }
}

if (failures.length) {
  console.error('Coverage thresholds not met:');
  failures.forEach((f) => console.error(`  - ${f}`));
  process.exit(1);
}

console.log('All coverage thresholds met.');
process.exit(0);
