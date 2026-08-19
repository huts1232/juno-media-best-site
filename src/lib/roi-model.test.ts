import assert from "node:assert/strict";
import { test } from "node:test";
import { calculateRoi, MONTHS_IN_CHART, WEEKS_PER_MONTH } from "./roi-model.ts";

const base = {
  hoursPerWeek: 12,
  hourlyRate: 65,
  people: 4,
  automationPercent: 65,
};

test("vrijgekomen uren volgen uren, medewerkers en percentage", () => {
  const result = calculateRoi(base);
  assert.equal(result.hoursFreedPerYear, 12 * WEEKS_PER_MONTH * 4 * 0.65 * 12);
});

test("besparing per jaar is twaalf maanden", () => {
  const result = calculateRoi(base);
  assert.ok(Math.abs(result.yearlySaving - result.monthlySaving * 12) < 1e-9);
});

test("zonder automatisering is er niets te besparen en geen terugverdientijd", () => {
  const result = calculateRoi({ ...base, automationPercent: 0 });
  assert.equal(result.monthlySaving, 0);
  assert.equal(result.paybackMonths, null);
  assert.equal(result.crossingMonth, null);
});

test("de grafiek levert twaalf punten per lijn", () => {
  const result = calculateRoi(base);
  assert.equal(result.series.without.length, MONTHS_IN_CHART);
  assert.equal(result.series.with.length, MONTHS_IN_CHART);
});

test("met automatisering begint de lijn hoger en zakt hij eronder", () => {
  const result = calculateRoi(base);
  assert.ok(result.series.with[0]! > result.series.without[0]!);
  assert.ok(result.crossingMonth !== null);
  const month = result.crossingMonth!;
  assert.ok(result.series.with[month - 1]! <= result.series.without[month - 1]!);
});

test("terugverdientijd komt overeen met bouwsom gedeeld door netto besparing", () => {
  const result = calculateRoi(base);
  assert.ok(result.paybackMonths !== null);
  assert.ok(Math.abs(result.paybackMonths! - result.buildCost / result.netMonthlySaving) < 1e-9);
});

test("meer medewerkers verhoogt zowel besparing als kosten", () => {
  const small = calculateRoi({ ...base, people: 2 });
  const large = calculateRoi({ ...base, people: 20 });
  assert.ok(large.monthlySaving > small.monthlySaving);
  assert.ok(large.monthlyCost > small.monthlyCost);
  assert.ok(large.buildCost > small.buildCost);
});

test("randwaarden lopen niet uit de rails", () => {
  const zero = calculateRoi({ hoursPerWeek: 0, hourlyRate: 0, people: 0, automationPercent: 200 });
  assert.equal(zero.monthlySaving, 0);
  assert.equal(zero.paybackMonths, null);
  assert.ok(Number.isFinite(zero.buildCost));
});
