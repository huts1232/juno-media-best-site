import assert from "node:assert/strict";
import { test } from "node:test";
import {
  calculateAgentPlan,
  clampVolume,
  VOLUME_MAX,
  VOLUME_MIN,
  WEEKS_PER_MONTH,
} from "./agent-model.ts";

const base = {
  manualMinutes: 22,
  autoMinutes: 3,
  automationShare: 0.8,
  buildFactor: 1,
  volumePerWeek: 100,
};

test("clampVolume blijft binnen de grenzen van de slider", () => {
  assert.equal(clampVolume(0), VOLUME_MIN);
  assert.equal(clampVolume(9999), VOLUME_MAX);
  assert.equal(clampVolume(120.4), 120);
  assert.equal(clampVolume(Number.NaN), VOLUME_MIN);
});

test("handelingen per maand volgen het weekvolume", () => {
  const result = calculateAgentPlan(base);
  assert.equal(result.handlingsPerMonth, 100 * WEEKS_PER_MONTH);
});

test("besparing is het verschil tussen handmatig en met agent", () => {
  const result = calculateAgentPlan(base);
  assert.ok(result.hoursSavedPerMonth > 0);
  assert.equal(
    result.hoursSavedPerMonth,
    result.manualHoursPerMonth - result.agentHoursPerMonth,
  );
  assert.ok(result.agentHoursPerMonth < result.manualHoursPerMonth);
});

test("zonder automatisering verandert er niets", () => {
  const result = calculateAgentPlan({ ...base, automationShare: 0 });
  assert.equal(result.hoursSavedPerMonth, 0);
  assert.equal(result.leadTimeAfterMinutes, base.manualMinutes);
});

test("doorlooptijd na is het gewogen gemiddelde, niet de beste uitkomst", () => {
  const result = calculateAgentPlan(base);
  assert.ok(Math.abs(result.leadTimeAfterMinutes - (0.8 * 3 + 0.2 * 22)) < 1e-9);
  assert.ok(result.leadTimeAfterMinutes > base.autoMinutes);
});

test("investering is een oplopende bandbreedte, afgerond op 500", () => {
  const result = calculateAgentPlan(base);
  assert.ok(result.investmentLow < result.investmentHigh);
  assert.equal(result.investmentLow % 500, 0);
  assert.equal(result.investmentHigh % 500, 0);

  const heavier = calculateAgentPlan({ ...base, volumePerWeek: 400 });
  assert.ok(heavier.investmentLow > result.investmentLow);
});

test("dezelfde invoer geeft altijd dezelfde uitkomst", () => {
  assert.deepEqual(calculateAgentPlan(base), calculateAgentPlan({ ...base }));
});
