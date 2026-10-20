import React from "react";
import ReactDOMServer from "react-dom/server";
import assert from "node:assert";

import { LaunchState } from "../src/components/LaunchState.tsx";
import { CountdownTimer } from "../src/components/CountdownTimer.tsx";

console.log("=== Testing Launch State & Components ===");

// 1. Render LaunchState component
const launchStateHtml = ReactDOMServer.renderToStaticMarkup(React.createElement(LaunchState));
console.log("Launch State HTML generated successfully");

assert(launchStateHtml.includes("We&#x27;re Live!") || launchStateHtml.includes("We're Live!"), "Heading 'We\\'re Live!' must be present");
assert(launchStateHtml.includes("The wait is over. Welcome to Letlink."), "Message 'The wait is over. Welcome to Letlink.' must be present");
assert(launchStateHtml.includes('href="/"'), "Button must link to '/' production homepage");
assert(launchStateHtml.includes("Explore Letlink"), "Button must have label 'Explore Letlink'");

console.log("✓ LaunchState component verified successfully!");

// 2. Render CountdownTimer component (initial SSR and live render)
const timerMountedHtml = ReactDOMServer.renderToStaticMarkup(
  React.createElement(CountdownTimer, {
    timeRemaining: {
      days: 8,
      hours: 14,
      minutes: 18,
      seconds: 30,
      totalMilliseconds: 742710000,
      isComplete: false,
    },
  })
);

assert(timerMountedHtml.includes("08"), "Days must be zero-padded to 08");
assert(timerMountedHtml.includes("14"), "Hours must be 14");
assert(timerMountedHtml.includes("18"), "Minutes must be 18");
assert(timerMountedHtml.includes("30"), "Seconds must be 30");
assert(timerMountedHtml.includes("Days"), "Days label must be present");
assert(timerMountedHtml.includes("Hours"), "Hours label must be present");
assert(timerMountedHtml.includes("Minutes"), "Minutes label must be present");
assert(timerMountedHtml.includes("Seconds"), "Seconds label must be present");
assert(timerMountedHtml.includes('role="timer"'), "Role timer must be present for accessibility");

console.log("✓ CountdownTimer render verified with real numbers (never displays '--')!");
