import assert from "node:assert";

// Target launch date
const TARGET_LAUNCH_DATE = "2026-10-29T11:00:00+05:30";
const targetTimeMs = new Date(TARGET_LAUNCH_DATE).getTime();

console.log("=== Letlink Countdown Verification ===");
console.log("Target ISO:", TARGET_LAUNCH_DATE);
console.log("Target UTC string:", new Date(targetTimeMs).toUTCString());
console.log("Target Unix Epoch (ms):", targetTimeMs);

// Check UTC equivalent: 11:00 AM IST (UTC+5:30) is 05:30 AM UTC on 2026-10-29
assert.strictEqual(new Date(targetTimeMs).toISOString(), "2026-10-29T05:30:00.000Z");

function calculateTimeRemaining(targetMs, currentMs) {
  const totalMilliseconds = targetMs - currentMs;
  if (totalMilliseconds <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalMilliseconds: 0,
      isComplete: true,
    };
  }

  const seconds = Math.floor((totalMilliseconds / 1000) % 60);
  const minutes = Math.floor((totalMilliseconds / (1000 * 60)) % 60);
  const hours = Math.floor((totalMilliseconds / (1000 * 60 * 60)) % 24);
  const days = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    minutes,
    seconds,
    totalMilliseconds,
    isComplete: false,
  };
}

// Test 1: Current local time: 2026-10-20T19:41:30+05:30
const simulatedNow = new Date("2026-10-20T19:41:30+05:30").getTime();
const res1 = calculateTimeRemaining(targetTimeMs, simulatedNow);
console.log("\nTest 1 (2026-10-20 19:41:30 IST):", res1);
assert.strictEqual(res1.isComplete, false);
assert.strictEqual(res1.days, 8);
assert.strictEqual(res1.hours, 15);
assert.strictEqual(res1.minutes, 18);
assert.strictEqual(res1.seconds, 30);
console.log("✓ Test 1 Passed: 8d 15h 18m 30s remaining");

// Test 2: Exactly 1 second before launch: 2026-10-29T10:59:59+05:30
const oneSecBefore = new Date("2026-10-29T10:59:59+05:30").getTime();
const res2 = calculateTimeRemaining(targetTimeMs, oneSecBefore);
console.log("\nTest 2 (1 second before):", res2);
assert.strictEqual(res2.isComplete, false);
assert.strictEqual(res2.days, 0);
assert.strictEqual(res2.hours, 0);
assert.strictEqual(res2.minutes, 0);
assert.strictEqual(res2.seconds, 1);
console.log("✓ Test 2 Passed: 0d 0h 0m 1s remaining");

// Test 3: Exactly launch moment: 2026-10-29T11:00:00+05:30
const atLaunch = new Date("2026-10-29T11:00:00+05:30").getTime();
const res3 = calculateTimeRemaining(targetTimeMs, atLaunch);
console.log("\nTest 3 (Exact launch time):", res3);
assert.strictEqual(res3.isComplete, true);
assert.strictEqual(res3.days, 0);
assert.strictEqual(res3.hours, 0);
assert.strictEqual(res3.minutes, 0);
assert.strictEqual(res3.seconds, 0);
console.log("✓ Test 3 Passed: Launch completion triggered");

// Test 4: After launch: 2026-10-29T12:00:00+05:30
const afterLaunch = new Date("2026-10-29T12:00:00+05:30").getTime();
const res4 = calculateTimeRemaining(targetTimeMs, afterLaunch);
console.log("\nTest 4 (After launch):", res4);
assert.strictEqual(res4.isComplete, true);
console.log("✓ Test 4 Passed: Handled correctly after launch");

console.log("\nAll verification tests passed successfully!");
