// src/contentScript.ts
console.log("Content script loaded");
import { spoilerRegex } from "./spoilerWords";

document.querySelectorAll('h1, h3, p, .article-body, .comment').forEach(element => {
    if (spoilerRegex.spoiler.test(element.textContent as string) || spoilerRegex.ending.test(element.textContent as string) || spoilerRegex.explained.test(element.textContent as string)) {
        element.textContent = "SPOILER DETECTED!";
    }
})